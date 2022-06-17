import * as actions from './actionTypes';
import axios from 'axios';

export const addFilter = (payload) => { 
    return async dispatch => {
        dispatch({type: actions.ADD_FILTER, payload});
        axios.post('http://127.0.0.1:8000/api/filters', payload.data);  
    };    
};

export const addSort = ({searchId, data, sort}) => { 
    return async dispatch => {
        dispatch({type: actions.ADD_SORT, payload: {searchId, sort}});
        axios.post('http://127.0.0.1:8000/api/sorts', data);  
    };    
};

export const fetchFilters = () => {
    return async dispatch => {   
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/filters');
            dispatch(setFilters(response.data));            
        } catch(e) {
            console.log('errormessage: ', e.error);
        }        
    };
};


export const removeFilter = ({searchId, filterId}) => { 
    axios.delete(`http://127.0.0.1:8000/api/filters/${filterId}/${searchId}`);  

    return {
        type: actions.REMOVE_FILTER,
        payload: {searchId, filterId}
    };
};

export const setFilters = filters => {
    return {
        type: actions.SET_FILTERS,
        payload: filters
    };
};

export const updateDragResize = (payload) => {
    const url = payload.data.url;
    const id = payload.data.id;
    const userId = payload.data.userId;
    
    return async dispatch => {
        dispatch({type: actions.UPDATE_DRAG_RESIZE, payload});
        axios.put(`http://127.0.0.1:8000/api/dragresize/${url}/${id}/${userId}`, payload.data);  
    };    
};

export const updateFilterColumn = ({searchId, filterId, filterColumn}) => { 
    return async dispatch => {
        //dispatch({type: actions.UPDATE_FILTERCOLUMN, payload: {searchId, filter, filterColumn}});
        const response = await axios.get(`http://127.0.0.1:8000/api/filters/${filterId}/${searchId}`);
        let filter = response.data[0];

        let data = {
            'id': filter.id,
            'search_id': filter.search_id,
            'filter_id': filter.filter_id,
            'logical_operator': filter.logical_operator,
            'filter_column': filterColumn,
            'not_operator': filter.not_operator, 
            'filter_type': filter.filter_type,
            'filter_value': filter.filter_value,   
        }

        const id = filter.id;

        await axios.put(`http://127.0.0.1:8000/api/filters/${id}`, data);  
        dispatch({type: actions.UPDATE_FILTERCOLUMN, payload: {searchId, filterId, filterColumn}})
    };      
};

export const updateFilterType = ({searchId, filterId, filterType}) => { 
    return async dispatch => {

        const response = await axios.get(`http://127.0.0.1:8000/api/filters/${filterId}/${searchId}`);
        let filter = response.data[0];

        let data = {
            'id': filter.id,
            'search_id': filter.search_id,
            'filter_id': filter.filter_id,
            'logical_operator': filter.logical_operator,
            'filter_column': filter.filter_column,
            'not_operator': filter.not_operator, 
            'filter_type': filterType,
            'filter_value': filter.filter_value,   
        }
        
        const id = filter.id;

        await axios.put(`http://127.0.0.1:8000/api/filters/${id}`, data);  
        dispatch({type: actions.UPDATE_FILTERTYPE, payload: {searchId, filterId, filterType}})        
    };      
};

export const updateLogicalOperator = ({searchId, filterId, logicalOperator}) => { 
    return async dispatch => {

        const response = await axios.get(`http://127.0.0.1:8000/api/filters/${filterId}/${searchId}`);
        let filter = response.data[0];

        let data = {
            'id': filter.id,
            'search_id': filter.search_id,
            'filter_id': filter.filter_id,
            'logical_operator': logicalOperator,
            'filter_column': filter.filter_column,
            'not_operator': filter.not_operator, 
            'filter_type': filter.filter_type,
            'filter_value': filter.filter_value,   
        }
        
        const id = filter.id;

        await axios.put(`http://127.0.0.1:8000/api/filters/${id}`, data); 
        dispatch({type: actions.UPDATE_LOGICAL_OPERATOR, payload: {searchId, filterId, logicalOperator}});         
    };      
};

export const updateNotOperator = ({searchId, filterId, notOperator}) => { 
    return async dispatch => {

        const response = await axios.get(`http://127.0.0.1:8000/api/filters/${filterId}/${searchId}`);
        let filter = response.data[0];

        let data = {
            'id': filter.id,
            'search_id': filter.search_id,
            'filter_id': filter.filter_id,
            'logical_operator': filter.logical_operator,
            'filter_column': filter.filter_column,
            'not_operator': notOperator, 
            'filter_type': filter.filter_type,
            'filter_value': filter.filter_value,   
        }
        
        const id = filter.id;

        await axios.put(`http://127.0.0.1:8000/api/filters/${id}`, data);
        dispatch({type: actions.UPDATE_NOTOPERATOR, payload: {searchId, filterId, notOperator}});  
    };      
};

export const updateFilterValue = ({searchId, filterId, filterValue}) => { 
    return async dispatch => {

        const response = await axios.get(`http://127.0.0.1:8000/api/filters/${filterId}/${searchId}`);
        let filter = response.data[0];

        let data = {
            'id': filter.id,
            'search_id': filter.search_id,
            'filter_id': filter.filter_id,
            'logical_operator': filter.logical_operator,
            'filter_column': filter.filter_column,
            'not_operator': filter.not_operator, 
            'filter_type': filter.filter_type,
            'filter_value': filterValue,   
        }
        
        const id = filter.id;

        await axios.put(`http://127.0.0.1:8000/api/filters/${id}`, data);
        dispatch({type: actions.UPDATE_FILTERVALUE, payload: {searchId, filterId, filterValue}});  
    };      
};

