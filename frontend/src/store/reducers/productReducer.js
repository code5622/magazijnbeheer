import * as actionTypes from '../actions/actionTypes';

const initialState =  {
    productsData: [],
    paginateData: {},
    // columnFilters: []
}

const setProducts = (state, action) => {  
    return {
        ...state,
        productsData: action.products
    } 
}

const setPaginateData = (state, action) => {
    return {
        ...state,
        paginateData: action.paginateData
    } 
}

// const removeFilter = (state, action) => {

//     let { columnFilters } = state;
//     const index = columnFilters.findIndex(item => item.id === action.id);
//     columnFilters.splice(index, 1);
        
//     return {
//         ...state,
//         columnFilters: columnFilters
//     }  
// }

// const updateFilterColumn = (state, action) => {
//     let { columnFilters } = state;

//     const index = columnFilters.findIndex(item => item.id === action.filter.id);

//     const columnFilter = columnFilters[index];
//     const xxx = {
//         ...columnFilter, 
//         filterColumn: action.filter.column
//     }

//     columnFilters.splice(index, 1);

//     columnFilters.push(xxx);

//     return {
//         ...state,
//         columnFilters: columnFilters
//     }   
// }

// const updateFilterType = (state, action) => {
//     let { columnFilters } = state;

//     const index = columnFilters.findIndex(item => item.id === action.filter.id);

//     const columnFilter = columnFilters[index];
//     const xxx = {
//         ...columnFilter, 
//         filterType: action.filter.filterType
//     }

//     columnFilters.splice(index, 1);

//     columnFilters.push(xxx);

//     return {
//         ...state,
//         columnFilters: columnFilters
//     }   
// }

// const updateFilterValue = (state, action) => {
//     let { columnFilters } = state;

//     const index = columnFilters.findIndex(item => item.id === action.filter.id);

//     const columnFilter = columnFilters[index];
//     const xxx = {
//         ...columnFilter, 
//         filterValue: action.filter.filterValue
//     }

//     columnFilters.splice(index, 1);

//     columnFilters.push(xxx);

//     return {
//         ...state,
//         columnFilters: columnFilters
//     }   
// }

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PRODUCTS: return setProducts(state, action);
        case actionTypes.SET_PAGINATE_DATA: return setPaginateData(state, action);       
        // case 'addFilter': 
        //     let filters = [...state.columnFilters];
        //     filters.push(action.filter);

        //     return {
        //         ...state,
        //         columnFilters: filters
        //     } 
        // case 'updateLogicalOperator': 
        //     let { columnFilters } = state;

        //     const index = columnFilters.findIndex(item => item.id === action.filter.id);

        //     const columnFilter = columnFilters[index];
        //     const xxx = {
        //         ...columnFilter, 
        //         logicalOperator: action.filter.logicalOperator
        //     }

        //     columnFilters.splice(index, 1);

        //     columnFilters.push(xxx);

        //     return {
        //         ...state,
        //         columnFilters: columnFilters
        //     }   
        // case 'updateFilterColumn': return updateFilterColumn(state, action);    
        // case 'updateFilterType': return updateFilterType(state, action);    
        // case 'updateFilterValue': return updateFilterValue(state, action);                    
        // case 'removeFilter': return removeFilter(state, action);
                      
        default: return state;
    }
}

export default productReducer;