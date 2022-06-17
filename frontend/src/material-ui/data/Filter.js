import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/index';
import Modal from '../utils/Modal';

/* ********************* Filter Options ************************************************************** */ 
const empty = [
    {id: 1, value: '', label: ''},      
];

// const years = [
//     2011, 2012, 2013, 2014, 2015,
//     2016, 2017, 2018, 2019, 2020, 2021
// ];

// const months = [
//     'januari', 'februari', 'maart',
//     'april', 'mei', 'juni', 'juli',
//     'augustus', 'september', 'oktober',
//     'november', 'december'
// ];

// const days = [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25,
//     26, 27, 28, 29, 30, 31
// ];

// const quarters = [
//     1, 2, 3, 4
// ];

// const weekdays = [
//     'monday', 'tuesday', 'wednesday',
//     'thursday', 'friday', 
//     'saturday', 'sunday'
// ];

const number = [    
    {id: 1, value: 'is', label: '='},             
    {id: 2, value: 'gt', label: '>'},   
    {id: 3, value: 'gte', label: '>='}, 
    {id: 4, value: 'lt', label: '<'}, 
    {id: 5, value: 'lte', label: '<='}
];

const text = [    
    {id: 1, value: 'startswith', label: 'startwith'},   
    {id: 2, value: 'endswith', label: 'endswith'},  
    {id: 3, value: 'contains', label: 'contains'}               
];     

const date = [       
    {id: 1, value: 'year', label: 'year'},   
    {id: 2, value: 'quarter', label: 'quarter'},             
    {id: 3, value: 'month', label: 'month'},   
    {id: 4, value: 'day', label: 'day'},                        
    {id: 5, value: 'is', label: '='},             
    {id: 6, value: 'gt', label: '>'},   
    {id: 7, value: 'gte', label: '>='}, 
    {id: 8, value: 'lt', label: '<'}, 
    {id: 9, value: 'lte', label: '<='}                                                                                
]; 

const getFilterType = (dataType) => {
    switch(dataType) {
        case 'date': return date[0].value;
        case 'text': return text[0].value;
        case 'number': return number[0].value;
        default: return null;
    }
}

const getFilterDataType = (columns, columnValue) => {
    let column = columns[0];
    if(typeof columnValue === 'string') {
        column = columns.filter(column => column.value === columnValue)[0];
    }
    
    return column.dataType;
}

/* *********** Create unique FilterId ************************************************************************ */
const createFilterId = (filters) => {
    if(filters.length !== 0) {
        let lastId = 0;

        for(let i=0; i<filters.length; i++) {
            const listFilter = filters[i];
            if (listFilter.filterId > lastId) {
                lastId = listFilter.filterId;
            }
        }
        return lastId + 1;
    } else {
        return 1;
    }        
}

export const useFilter = (data, columns, id, filterValues, setfilterValues) => {

    const searchId = useState(id);  
    //const searchContext = useContext(SearchContext);
    const dispatch = useDispatch();   
    const [filters, setFilters] = useState([]);
    const filterValueRefs = useRef([]);
    const notOperatorRefs = useRef([]);
    const [setFilterColumnValue] = useState();
    const [logicalOperatorValue, setLogicalOperatorValue] = useState();    
    const [filterTypeValue, setFilterTypeValue] = useState();        
    const [notOperatorValue, setNotOperatorValue] = useState();
    const [filterModal, setFilterModal] = useState(false);
    const [initialize, setInitialize] = useState(false);

    const [defaultFilters] = useState(prevDefaultFilters => {
        const dataType = columns[0].dataType;
        const filterType = getFilterType(dataType);
        return {
            filterColumn: columns[0].value,
            filterType: filterType
        }
    });

    useEffect(() => {
            //const index = data.findIndex(record => record.id === searchId[0]);
            const prevFilters = [...filters];
            const result = buildFilters(prevFilters);
            setFilters(result);               
    }, [filterValues, notOperatorValue, logicalOperatorValue, filterTypeValue]);

    useEffect(() => {
        // Important initialization from database comes after other useEffect with updating state from internal useState
        if(data.length > 0 && !initialize) {
            const index = data.findIndex(record => record.id === id);

            const result = buildFilters(data[index].filters);             
            setFilters(result); 
            setInitialize(true);
        }       
    }, [data, initialize]);

    const buildFilters = (filterItems) => {
        let newFilters = [];
        for (let key in filterItems) { 

            const filterIdValue = filterItems[key].filter.filterId;
            const logicalOperatorValue =  filterItems[key].filter.logicalOperator; 
            const filterColumnValue = filterItems[key].filter.filterColumn;
            const notOperatorValue = filterItems[key].filter.notOperator;
            const filterTypeValue = filterItems[key].filter.filterType;
            const filterVal = filterItems[key].filter.filterValue;
            const filterDataTypeValue = getFilterDataType(columns, filterColumnValue);

            const index = filterItems.findIndex(filter => filter.filterId === filterIdValue);
            const filter = buildFilter(filterIdValue, logicalOperatorValue, filterColumnValue, notOperatorValue, filterTypeValue, filterVal, filterDataTypeValue);
            const logicalOperator = buildLogicalOperators(index, filterIdValue, logicalOperatorValue);
            const filterColumns = buildFilterColumns(filterColumnValue, filterIdValue);
            const filterTypes = buildFilterTypes(filterDataTypeValue, filterTypeValue); 

            const filterSet = buildFilterSet(logicalOperator, filterColumns, filterTypes, notOperatorValue, filterVal, filterIdValue);

            const newFilter = {
                filterId: filterIdValue,
                filter: filter,
                filterSet: filterSet,
            }   
            newFilters.push(newFilter);
        } 
        return newFilters;
    }
    

    /* *************************************************************************************** */
   
    const [updateParams, setUpdateParams] = useState(false);
    const [selected, setSelected] = useState("");  
    const [initialized, setInitialized] = useState(false);

    // useEffect(() => {
    //     if(!initialized && advancedSearch.length > 0 && searchContext.id == 1) {
    //         // filterId: prevFilters[1].filterId,
    //         // filter: filter,
    //         // filterSet: filterSet   



    //         setFilters(prevFilters => prevFilters.setFilters = advancedSearch[0].filterSet);

    //         setInitialized(true);
    //     }
    // }, [initialized, setInitialized])

    const filterValueHandler = (filterId) => {
        setfilterValues(prevFilterValues => {
            return {
                ...prevFilterValues,
                [filterId]: filterValueRefs.current[filterId].value
            }
        });
    }

    const getColumnWidth = () => {
        let minLength = 0;
        for(let index=0; index<columns.length; index++) {
            if (columns[index].label.length > minLength) {
                minLength = columns[index].label.length;
            }
        }
        
        return minLength * 8 + 15;
    }
    
    const buildFilterColumns = (selectedColumn, filterId) => { 
        if (selectedColumn === '') {
            setFilterColumnValue(columns[0].value);
            selectedColumn = setFilterColumnValue(columns[0].value);
        }

        let filterColumns = columns.map(column => {
            return (
                <option 
                    key={column.id} 
                    value={`${column.value}, ${column.dataType}, ${filterId}`}
                    {...selectedColumn === column.value && {selected: true}}>
                    {column.label}
                </option>
            );
        });

        filterColumns = (
            <select 
                name="columns" 
                onChange={(e) => setFilterColumns({update: true, filterId: filterId, filterColumn: e.target.value})}>
                {filterColumns}
            </select>  
        ); 

        return filterColumns;
    } 

    const buildFilter = (filterId, logicalOperator=null, filterColumn=null, notOperator=null, filterType=null, filterValue=null, filterDataType) => {
        
        if(filterColumn === null) {
            filterColumn = String(columns[0].value);
        }
        
        const filter = { 
            filterId,         
            logicalOperator,
            filterColumn: filterColumn,            
            notOperator,
            filterType,
            filterValue,
            filterDataType
        } 
        
        return filter;
    }

    const buildLogicalOperators = (index, filterId, selectedOperator=null) => {
        
        let logicalOperator = <div style={{width: '6rem'}}>WHERE</div>;

        if (index !== 0) {
            logicalOperator = (
                <select style={{width: '6rem'}} className="SelectLogicalOperator" onChange={(e) => addLogicalOperator(e, filterId)}>
                    <option key="1" value="and" {...selectedOperator === 'and' && {selected: true}}>AND</option>
                    <option key="2" value="or" {...selectedOperator === 'or' && {selected: true}}>OR</option>
                </select>
            );        
        }   

        return logicalOperator;
    }
    
    const buildFilterTypes = (filterDataType=null, filterType=null) => {
        //let types = filterDataType;
        let types = [];

        if (filterDataType === "number") {
            types = number;
        } else if (filterDataType === "text") {
            types = text;      
        } else if (filterDataType === "date") {
            types = date;           
        } else if (filterDataType === null) {
            types = empty;
        }  

        const filterTypes = types.map(type => {
       
                return <option key={type.id} value={type.value} {...filterType === type.value && {selected: true}}>{type.label}</option>                
        });                 
 
        return filterTypes;
    }    

    const buildFilterSet = (logicalOperators, filterColumns, filterTypes, notOperator, filterValue, filterId) => {
        const filterColumnsWidth = getColumnWidth();
        const logicalOperatorsWidth = '55px';

        const filterSet = (
            <div className="filterrow" key={filterId}> 
                {
                    logicalOperators &&
                    <div style={{width: '6rem'}}  className="filterrow__formelement filterrow__select">
                        {logicalOperators}
                    </div>               
                }
                <div style={{width: '15rem'}} className="filterrow__formelement filterrow__select">               
                    {filterColumns}
                </div> 
                <div style={{width: '6rem'}} className="filterrow__formelement filterrow__select">                     
                    <select 
                        className="NotOperator" 
                        onChange={(e) => setNotOperator({update: true, filterId, value: e.target.value})}
                        ref={ref => notOperatorRefs.current[filterId] = ref} 
                    >               
                        <option key="1" value={'false'} {...notOperator === 'false' && {selected: true}}></option>                             
                        <option key="2" value={'true'} {...notOperator === 'true' && {selected: true}}>NOT</option>                                                                                                                                                     
                    </select> 
                </div>
                <div style={{width: '10rem'}} className="filterrow__formelement filterrow__select">
                    <select name="filters" onChange={(e) => addFilterType(e, filterId)}>
                        {filterTypes}                                                                                 
                    </select>
                </div> 
                <div className="filterrow__formelement filterrow__filtervalue">
                    {filterValues &&
                    <input 
                        type="text" 
                        ref={ref => filterValueRefs.current[filterId] = ref} 
                        value={filterValues[filterId]} onChange={() => filterValueHandler(filterId)} 
                        onBlur={(e) => addFilterValue(e, filterId)}
                    /> } 
                    {/* <input 
                        type="text" 
                        onBlur={(e) => addFilterValue(e, filterId)}
                    />                       */}
                </div>                  
                <div className="filterrow__formelement">   
                    <button className="filterrow__button" onClick={() => setUpdateRemoveFilter({update: true, filterId})}>X</button>    
                </div>                                                      
            </div> 
        );

        return filterSet;
    }   

    /* ************************************************************************************************** */
  
    useEffect(() => {
        setUpdateParams(false);
    }, [updateParams])
    
    const addFilter = (filterColumn=null, filterDataType='number', notOperator='false', filterValue='', index=filters.length, removeFilters=0, filterId=null, update=true, logicalOperatorValue=null, filterType=null) => {      
        const prevFilters = [...filters];

        if (filterId === null) filterId = createFilterId(prevFilters);

        if(filterType === null) {
            filterType = defaultFilters.filterType;
        }

        const filter = buildFilter(filterId, logicalOperatorValue, filterColumn, notOperator, filterType, filterValue=null, filterDataType);
        let logicalOperator = buildLogicalOperators(index, filterId, logicalOperatorValue);
        
        if(!update) {
            filterColumn = String(columns[0].value);
        }


        if(typeof filterColumn === 'string') {
            filter.filterColumn = filterColumn;
        } else {
            filter.filterColumn = String(columns[0].value);
        }       
        
        const filterColumns = buildFilterColumns(filterColumn, filterId);
        const filterTypes = buildFilterTypes(filterDataType); 

        const filterSet = buildFilterSet(logicalOperator, filterColumns, filterTypes, notOperator, filterValue, filterId, '');
        
        if(prevFilters.length > 0) {
            filter.logicalOperator = 'and';
        }

        const newFilter = {
            filterId: filterId,
            filter: filter,
            filterSet: filterSet,
        }

        prevFilters.splice(index, removeFilters, newFilter);

        setFilters(prevFilters);

        logicalOperator = null;
        if (prevFilters.length > 1) {
            logicalOperator = 'and'
        }

        if(update) {
            filterType = defaultFilters.filterType;
        } 

        if(update) {
            const data = {
                'search_id': searchId[0],
                'filter_id': filterId,
                'logical_operator': logicalOperator,
                'filter_column': String(columns[0].value),
                'not_operator':  'false',
                'filter_type':  filterType,
                'filter_value':  null,                        
            };  
            dispatch(actionTypes.addFilter({searchId: searchId, data: data, filter: newFilter})); 
        }  else {
            dispatch(actionTypes.updateFilterType({filterId, searchId, filterType}));   
        }
    };

    const refreshFilter = (logicalOperatorValue, filterColumn, notOperator, filterValue, filterId, filterDataType) => {      
        const prevFilters = [...filters];

        const filterTypeValue = getFilterType(filterDataType);
        const filterType = filterDataType;
        const index = prevFilters.findIndex(filter => filter.filterId == filterId);

        const filter = buildFilter(filterId, logicalOperatorValue, filterColumn, notOperator, filterType, filterValue=null, filterDataType);
        let logicalOperator = buildLogicalOperators(index, filterId, logicalOperatorValue);
        const filterColumns = buildFilterColumns(filterColumn, filterId);
        const filterTypes = buildFilterTypes(filterDataType); 

        const filterSet = buildFilterSet(logicalOperator, filterColumns, filterTypes, notOperator, filterValue, filterId, '');

        const newFilter = {
            filterId: filterId,
            filter: filter,
            filterSet: filterSet,
        }

        prevFilters.splice(index, 1, newFilter);

        setFilters(prevFilters);

        setTimeout(() => {
            dispatch(actionTypes.updateFilterType({filterId, searchId, filterType: filterTypeValue})); 
        }, 400);
        
        dispatch(actionTypes.updateFilterColumn({filterId, searchId, filterColumn: filterColumn})); 
        
    };    

    const [updateRemoveFilter, setUpdateRemoveFilter] = useState({update: false});  
    
    useEffect(() => {
        if (updateRemoveFilter.update) {          
            removeFilter(updateRemoveFilter.filterId);            
            setUpdateRemoveFilter({update:false});
        }
    }, [updateRemoveFilter])     
    
    const removeFilter = (filterId) => {
        let prevFilters = [...filters];
  
        if (filters.length > 1 && prevFilters[0].filterId === filterId) {   
            const index = 0;
            let filter = prevFilters[1].filter;

            const logicalOperators = buildLogicalOperators(index, prevFilters[1].filterId);      
            const filterDataType = prevFilters[1].filter.filterDataType;         
            const filterTypes = buildFilterTypes(filterDataType); 
            const filterColumns = buildFilterColumns(prevFilters[1].filter.filterColumn, prevFilters[1].filterId);
                        
            const filterSet = buildFilterSet(
                logicalOperators, 
                filterColumns, 
                filterTypes, 
                prevFilters[1].filter.notOperator,  
                prevFilters[1].filter.filterValue,
                prevFilters[1].filterId,
            );   
            
            prevFilters[1] = {           
                filterId: prevFilters[1].filterId,
                filter: filter,
                filterSet: filterSet   
            }   
            
            dispatch(actionTypes.updateLogicalOperator({searchId, filterId: prevFilters[1].filterId, logicalOperator: null}));            
        }

        prevFilters = prevFilters.filter(filter => filter.filterId !== filterId);

        setFilters(prevFilters);

        setfilterValues(prevFilterValues => {
            delete prevFilterValues[filterId];
            return prevFilterValues;
        });        

        dispatch(actionTypes.removeFilter({searchId, filterId}));
    }
  
    const [notOperator, setNotOperator] = useState({update: false});

    useEffect(() => {
        if (notOperator.update) {          
            addNotOperator(notOperator.filterId, notOperator.value);            
            setNotOperator({update:false});
        }
    }, [notOperator])    

    const addNotOperator = (filterId, notOperator) => {

        setFilters(prevFilters => {
            const index = prevFilters.findIndex(filter => filter.filterId === filterId);          
            prevFilters[index].filter.notOperator = notOperator;          
            setNotOperatorValue(notOperator);

            return prevFilters;
        });   

        dispatch(actionTypes.updateNotOperator({searchId, filterId, notOperator}));                  
    }    
    
    const addLogicalOperator = (e, filterId) => {
        const logicalOperator = e.target.value;
        setFilters(prevFilters => {
            const index = prevFilters.findIndex(filter => filter.filterId === filterId);
            prevFilters[index].filter.logicalOperator = logicalOperator;
            setLogicalOperatorValue(logicalOperator);

            return prevFilters;
        }); 

        
        dispatch(actionTypes.updateLogicalOperator({searchId, filterId, logicalOperator})); 
        //dispatch({type: 'updateLogicalOperator', payload: {filterId, logicalOperator: e.target.value}}); 
        //setUpdateParams(true);                    
    } 

    /* **************** FilterColumn ************************************************************************ */
    const [filterColumns, setFilterColumns] = useState({update: false});

    useEffect(() => {
        if (filterColumns.update) {          
            addFilterColumn(filterColumns.filterId, filterColumns.filterColumn);            
            setFilterColumns({update:false});
        }
    }, [filterColumns])

    const addFilterColumn = useCallback((filterId, filterColumn) => { 
        filterColumn = filterColumn.split(', ');
        const filter_id = filterId;
        const index = filters.findIndex(filter => filter.filterId === filter_id);
        const logicalOperatorValue = filters[index].filter.logicalOperator;
        const notOperator = filters[index].filter.notOperator;
        
        const filterDataType = filterColumn[1];
        const filterValue = filters[index].filter.filterValue;
        filterColumn = filterColumn[0];   

        refreshFilter(logicalOperatorValue, filterColumn, notOperator, filterValue, filterId, filterDataType);
    });     
    /* ***************************************************************************************************** */    
        
    const addFilterType = useCallback((e, filterId) => {
        //dispatch({type: 'updateFilterType', payload: {filterId, filterType: e.target.value}});     
        //setUpdateParams(true);
        const filterType = e.target.value; 
        
        setFilters(prevFilters => {             
            const index = prevFilters.findIndex(filter => filter.filterId === filterId);
            prevFilters[index].filter.filterType = filterType; 
            setFilterTypeValue(filterType);

            return prevFilters; 
        });   
        
        dispatch(actionTypes.updateFilterType({filterId, searchId, filterType}));         
    });       
    
    const addFilterValue = useCallback((e, filterId) => {
        const filterValue = e.target.value;
        
        setFilters(prevFilters => {      
            const index = prevFilters.findIndex(filter => filter.filterId === filterId);
            prevFilters[index].filter.filterValue = filterValue;           
            return prevFilters;
        });
        
        dispatch(actionTypes.updateFilterValue({filterId, searchId, filterValue})); 
    });
    
    return [
        filters, 
        addFilter,
        filterModal,
        setFilterModal
    ];
}

// export default Filter;

const Filter = ({filters, addFilter, filterModal, setFilterModal}) => {

    let filterSet = null;
    
    if(filters.length > 0) {
        filterSet = filters.map(filter => {
            return filter.filterSet;
        });
    }
    

    return (
        <Modal 
            show={filterModal} 
            modalClosed={() => setFilterModal(false)} 
            top={'3.5rem'}
            left={filters.length > 0 ? '-40rem' : '0rem'}
            width={filters.length > 0 ? '60rem': '15rem'}             
        > 
            <div>
                <div className="filterform">
                    {filterSet}
                </div> 
                <button className="Button" onClick={addFilter} style={{marginTop: '5px', marginBottom: '2px'}}>+ Add Filter <i class="fas fa-filter" style={{'margin-right': '4px'}}></i></button>           
            </div>
        </Modal>    
    );     
}

export default Filter;