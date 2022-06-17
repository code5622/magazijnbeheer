import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/index';
import Modal from '../utils/Modal';

const sortDirectionList = [
    {id: 1, value: 'empty', label: ''},
    {id: 2, value: 'asc', label: 'Ascending'},
    {id: 3, value: 'desc', label: 'Descending'},  
]

/* *********** Create unique FilterId ************************************************************************ */
const createSortId = (sorts) => {
    if(sorts.length !== 0) {
        let lastId = 0;

        for(let i=0; i<sorts.length; i++) {
            const sort = sorts[i].sort;

            if (sort.sortId > lastId) {             
                lastId = sort.sortId;                                
            }
        }
        return lastId + 1;
    } else {
        return 1;
    }        
}

export const useSort = (data, columns, id) => {
    const searchId = useState(id);  
    const dispatch = useDispatch();   
    const [sorts, setSorts] = useState([]);
    const [sortColumn, setSortColumn] = useState();
    const [sortDirection, setSortDirection] = useState();    
    const [updateParams, setUpdateParams] = useState(false);
    const [defaultSortColumn] = useState(columns[0].value);
    const [defaultSortDirection] = useState(sortDirectionList[0].value);
    const [sortColumns, setSortColumns] = useState();
    const [updateRemoveSort, setUpdateRemoveSort] = useState({update: false});
    const [sortModal, setSortModal] = useState(false);  

    useEffect(() => {

    }, [sorts])

    // const showSortModal = (show) => {
    //     setModalSort(show);
    // }


    const buildSortColumn = (sortId, selectedColumn=defaultSortColumn) => {
        let sortColumnList = columns.map(column => {
            return (
                <option 
                    key={column.id} 
                    value={column.value}
                    {...selectedColumn === column.value && {selected: true}}>
                    {column.label}
                </option>
            );
        });

        sortColumnList = (
            <select 
                className="select-sortColumns" 
                onChange={(e) => setSortColumns({update: true, sortId, sortColumn: e.target.value})}>
                {sortColumnList}
            </select>  
        ); 

        return sortColumnList;
    }

    const buildSortDirection = (sortId, selectedColumn=defaultSortDirection) => {
        let directionList = sortDirectionList.map(column => {
            return (
                <option 
                    key={column.id} 
                    value={column.value}
                    {...selectedColumn === column.value && {selected: true}}>
                    {column.label}
                </option>
            );
        });

        directionList = (
            <select 
                className="select-sortDirections" 
                onChange={(e) => setSortColumns({update: true, sortId, sortColumn: e.target.value})}>
                {directionList}
            </select>  
        ); 

        return directionList;
    }    

    const buildSortList = (sortColumnList, sortDirectionList, sortId) => {
        //const filterColumnsWidth = getColumnWidth();
        //const logicalOperatorsWidth = '55px';

        const sortList = (
            <div className="FilterTableRow" key={sortId}>
                <div className="DropSelect SortColumn">
                    {sortColumnList}
                </div>                   
                <div className="DropSelect SortDirection">
                    {sortDirectionList}
                </div>                       
                <div className="SortRemoveBtn">   
                    <button 
                        className="SortRemoveBtn" 
                        onClick={() => setUpdateRemoveSort({update: true, sortId})}
                    >X</button>    
                </div>                                                      
            </div> 
        );

        return sortList;
    }      

    const addSort = (index=sorts.length, removeSorts=0) => {
        let prevSorts = [...sorts];
        const sortId = createSortId(sorts);

    
        const sortColumnList = buildSortColumn(sortId);
        const sortDirectionList = buildSortDirection(sortId);
        const sortList = buildSortList(sortColumnList, sortDirectionList, sortId);

        const sort = {
            sort: {
                sortId: sortId,
                sortColumn: defaultSortColumn,
                sortDirection: null
            },
            sortList: sortList
        }  

        prevSorts.push(sort);

        setSorts(prevSorts);

        const data = {
            'search_id': searchId[0],
            'sort_id': sortId,
            'sort_column': defaultSortColumn,
            'sort_direction': null
        }

        //dispatch(actionTypes.addSort({searchId, data, sort}));
    }

    useEffect(() => {
        if (updateRemoveSort.update) {          
            removeSort(updateRemoveSort.sortId);            
            setUpdateRemoveSort({update:false});
        }
    }, [updateRemoveSort])     
    
    const removeSort = (sortId) => {  
        setSorts(prevSorts => {
            const updatedSorts = prevSorts.filter(record => record.sort.sortId !== parseInt(sortId));
            return updatedSorts;
        })
    }

    return [
        sorts,
        addSort,
        sortModal, 
        setSortModal        
    ];
}

const Sort = ({sorts, addSort, sortModal, setSortModal}) => {

    let sortList = null;

    if(sorts.length > 0) {
        sortList = sorts.map(sort => {
            return sort.sortList;
        });
    }

    return (
        <Modal 
            show={sortModal} 
            modalClosed={() => setSortModal(false)} 
            top={'3rem'}
            right={'0rem'}
            width={'20rem'}  
        > 
            <div className="Filter">
                <div className="FilterTable">
                    {sortList}
                </div> 
                <button 
                    className="AddFilterBtn" 
                    onClick={addSort} 
                    style={{marginTop: '5px', marginBottom: '2px'}}
                >+ Add Sort 
                </button>           
            </div> 
        </Modal>       
    );
}

export default Sort;