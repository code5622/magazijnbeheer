import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Aggregate, { useAggregate } from '../../material-ui/data/Aggregate';
import DataGrid from '../../material-ui/data/DataGrid';
import Filter, { useFilter } from '../../material-ui/data/Filter';
import Group, { useGroup } from '../../material-ui/data/Group';
import Paginate, { usePaginate } from '../../material-ui/data/Paginate';
import Sort, { useSort } from '../../material-ui/data/Sort';
import DataSearch from '../../material-ui/data/DataSearch';

import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

const Products = ({id, isResizing}) => {

    const dispatch = useDispatch();

    /* ********************* AdvancedSearch **************************************************************** */    
    const search = useSelector(state => state.ui.search);  
    const [filterValues, setfilterValues] = useState({});

    useEffect(() => {
        dispatch({type: actionTypes.ADD_ADVANCED_SEARCH, payload: {id: id}});
    }, [dispatch, id])

    useEffect(() => {

    }, [search])

    const updateFilterValueState = (result) => {
        for(let key in result) {
            setfilterValues(prevFilterValues => {
                const filterValue = result[key].filter.filterValue;
                const filterId = result[key].filter.filterId;
                return {
                    ...prevFilterValues,
                    [filterId]: filterValue
                }
            })
        }          
    }    

    useEffect(() => {
        //setParams('');
        if (search.length === 0) {
            dispatch(actions.fetchFilters());      
        } else {
            //const result = buildFilters(search[index].filters);
            const index = search.findIndex(record => record.id === 2);
            const result = search[index].filters            
            updateFilterValueState(result);
        }
    }, [search, dispatch])  
       
    //const [filters, addFilter, updateParams] = useFilter(columns, 2, search, filterValues, setfilterValues);    
    
    // useEffect(() => {

    // }, [searchContext])

    /* ********************* Filter ************************************************************************ */ 
    const columns = [     
        {id: 1, value: 'query_id', label: 'id', dataType: 'number'},
        {id: 2, value: 'query_name', label: 'naam', dataType: 'text'},    
        {id: 3, value: 'query_units', label: 'verpakkingseenheid', dataType: 'number'}, 
        {id: 4, value: 'query_date', label: 'datum', dataType: 'date'},                                              
    ];    

    /* ********************* Datagrid ********************************************************************** */
    const products = useSelector(state => state.products.productsData);
   
    /* ********************* Paginate ********************************************************************** */
    const paginateData = useSelector(state => state.products.paginateData);
    const { metadata } = usePaginate(1, 10);
    const { pageNumber, pageItems, setPaginateData, } = metadata;

    useEffect(() => {
        console.log(paginateData);
        setPaginateData(paginateData);
    }, [setPaginateData, paginateData])

 

    useEffect(() => {
        // const items = search.filter(item => item.id === parseInt(id));
        //setParams(items[0].params);
        if(pageNumber && pageItems) {
            //const querystring = '?query_name=$contains=gain';
            dispatch(actions.fetchProducts(pageNumber, pageItems));               
        }        
    }, [pageNumber, pageItems, dispatch])

    useEffect(() => {
        // const items = search.filter(item => item.id === parseInt(id));
        //setParams(items[0].params);
        if(search) {

        }        
    }, [search])    

    // useEffect(() => {
    //     if(search.length > 0) {
    //         // if(search[1].params !== '') {
                

    //             //dispatch(actions.fetchProducts(pageNumber, pageItems));
    //             console.log('params', search);
    //         // }
    //     }        
    // }, [search]);      
    

    // useEffect(() => {
    //     const params = search[1].params;
    //     dispatch(actions.fetchProducts(pageNumber, pageItems, params));               
    //     console.log('updating params *************', search[1].params);
    // }, [search[1].params]);          

    /* ****************************************************************************************************** */

    // const tableHeaders = [
    //     "Items",
    //     "Order #",
    //     "Amount",
    //     "Status",
    //     "Delivery Driver"
    // ];  

    const columnHeaders = [
        {id: 1, label: 'id', dataType: 'key', width: '25px'},
        {id: 2, label: 'product', dataType: 'text', width: '0px'},
        {id: 3, label: 'stock', dataType: 'number', width: '50px'}, 
        {id: 4, label: 'datum', dataType: 'date', width: '50px'}               
    ];    

    const [filters, addFilter, filterModal, setFilterModal] = useFilter(search, columns, id, filterValues, setfilterValues);   
    const [sorts, addSort, sortModal, setSortModal] = useSort(search, columns, id);
    const [aggregateModal, setAggregateModal] = useAggregate(search, columns, id);
    const [groupModal, setGroupModal] = useGroup(search, columns, id);

    let positionModal = {
        width: '16rem',
        height: '7rem',
        left: '-9rem',
        top: '4rem'
    } 

    return (
        <div style={{position: 'relative', width: '90%', margin: '0 auto', paddingTop: '-1rem'}}>            
            <div style={{position: 'sticky', top: '0', height: '2rem', backgroundColor: '#23272a', zIndex: '999999999999999999999999999999999'}}></div>
            <div style={{height: '5rem', position: 'sticky', top: '2rem', left: '0px', backgroundColor: '#23272a', width: '100%', zIndex: '50', marginTop: '-6rem'}}>                             
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.2rem'}}>
                    <Paginate metadata={metadata} 
                              positionModal={positionModal}  
                    />
                    <div style={{alignSelf: 'center', height: '2.5rem'}}>
                    <DataSearch 
                        setSortModal={setSortModal}
                        setFilterModal={setFilterModal}
                        setAggregateModal={setAggregateModal} 
                        setGroupModal={setGroupModal}                                      
                    >
                        <Filter                      
                            filters={filters} 
                            addFilter={addFilter} 
                            filterModal={filterModal}
                            setFilterModal={setFilterModal}
                        />                   
                        <Sort 
                            sorts={sorts}
                            addSort={addSort}
                            sortModal={sortModal}
                            setSortModal={setSortModal}                    
                        />
                        <Aggregate 
                            aggregateModal={aggregateModal}
                            setAggregateModal={setAggregateModal}                      
                        />
                        <Group 
                                groupModal={groupModal}
                                setGroupModal={setGroupModal}                    
                        />        
                    </DataSearch>
                    </div>
                </div>
            </div>
            <DataGrid 
                rows={metadata}
                data={products} 
                minColumnWidth={2}
                columnHeaders={columnHeaders}
            />                                                                                                      
        </div>    
    );
};

export default Products;
