import * as actionTypes from '../actions/actionTypes';

const initialState =  {
    search: [],
    menuBar: true,
    menuToolbar: {
        position: 'LEFT',
        positionClass: 'menutoolbar__left',        
        animationClass: 'menutoolbar__left--open',
        visible: true
    },
    dragResizes: [],
    windowSettings: {
        warehouse: {
            warehouse: {
                products: {
                    id: 1,
                    initX: 0,
                    initY: 0,
                    initWidth: 70,
                    initHeight: 100,
                    bgColor: "#23272a",
                    visible: true,
                    enableResizing: true,
                    enableFullscreen: true       
                },
                optionsDrawer: {
                    id: 2,
                    initX: 70.25,
                    initY: 0,
                    initWidth: 29.75,
                    initHeight: 50,        
                    bgColor: "#23272a",
                    visible: true, 
                    enableResizing: true,
                    enableFullscreen: true,                    
                },
                optionsDrawer2: {
                    id: 3,
                    initX: 70.25,
                    initY: 50.15,
                    initWidth: 29.75,
                    initHeight: 49.85,        
                    bgColor: "#23272a",
                    visible: true, 
                    enableResizing: true,
                    enableFullscreen: true,                    
                }                
            },
            options:  {
                products: {
                    id: 1,
                    initX: 0,
                    initY: 0,
                    initWidth: 50,
                    initHeight: 100,
                    bgColor: "#23272a",
                    visible: true,
                    enableResizing: true,
                    enableFullscreen: true       
                },
                optionsDrawer: {
                    id: 2,
                    initX: 50.25,
                    initY: 0,
                    initWidth: 49.75,
                    initHeight: 70,        
                    bgColor: "#23272a",
                    visible: true, 
                    enableResizing: true,
                    enableFullscreen: true,                    
                }
            }    
        }
    }
}

const addAdvancedSearch = (state, action) => {
   let addSearch = [...state.search];

   const index = addSearch.findIndex(record => record.id === parseInt(action.payload.id)); 

   if (index < 0) {
        const search = {
            id: action.payload.id,
            filters: [],
            sorts: [],
            aggragates: [],
            groups: [],
            params: '',
        };

        addSearch.push(search);        
    }   

    return {
        ...state,
        search: addSearch,        
    } 
}  

const addDragResize = (state, action) => {
    let updatedDragResizes = [...state.dragResizes];
    const index = updatedDragResizes.findIndex(dragResize => {
        return Number(dragResize.id) === Number(action.payload.id);
    })


    if (index >= 0 ) {
        updatedDragResizes[index] = action.payload;      
    } else {
        updatedDragResizes.push(action.payload);
    }   

    return {
        ...state,
        dragResizes: updatedDragResizes,        
    } 
}

const addFilter = (state, action) => {
    let updatedSearch = [...state.search];
    const payload = action.payload;
    const searchId = payload.searchId[0];
    const index = updatedSearch.findIndex(record => record.id == searchId);    

    updatedSearch[index].filters.push(payload.filter);

    return {
        ...state,
        search: updatedSearch,        
    } 
}

const getFilters = (id, search) => {
    let result = null;

    for(let index=0; index<search.length; index++) {
        if(search[index].id === id) {
            result = search[index];
            break;
        }
    }

    return result;
}

const removeDragResize = (state, action) => {
    let updatedDragResizes = [...state.dragResizes];
    updatedDragResizes = updatedDragResizes.filter(dragResize => Number(dragResize.id) !== Number(action.payload.id));

    return {
        ...state,
        dragResizes: updatedDragResizes,        
    } 
}

const removeFilter = (state, action) => {
    let updatedSearch = [...state.search];
    let searchIndex = updatedSearch.findIndex(record => record.id === parseInt(action.payload.searchId));
    let filterIndex = updatedSearch[searchIndex].filters.findIndex(record => record.filterId === parseInt(action.payload.filterId));

    if(filterIndex === 0 && updatedSearch.length > 1) {
        updatedSearch[searchIndex].filters[1].filter.logicalOperator = null;
    }   
        
    updatedSearch[searchIndex].filters.splice(filterIndex, 1);

    return {
        ...state,
        search: updatedSearch
    }  
}

const setFilters = (state, action) => {
    const updatedSearch = [...state.search];
    const filters = action.payload;

    if (filters) {
        for (let key in filters) {
            const searchId = filters[key].search_id;

            let filter = {
                filterId: filters[key].filter_id,
                logicalOperator: filters[key].logical_operator,
                filterColumn: filters[key].filter_column,
                notOperator: filters[key].not_operator,
                filterType: filters[key].filter_type,
                filterValue: filters[key].filter_value,
            }

            filter = {
                filterId: filters[key].filter_id,
                filter: filter, 
                filterSet: {}
            }

            const searchIndex = updatedSearch.findIndex(record => record.id === searchId);

            if(searchIndex >= 0) {
                updatedSearch[searchIndex].filters.push(filter);  
            } else {
                const newSearch = {
                    id: searchId,
                    filters: [filter],
                    sorts: [],
                    aggragates: [],
                    groups: [],
                    params: '',
                };  
                updatedSearch.push(newSearch);              
            }                   
        }
    }

    return {
        ...state,
        search: updatedSearch   
    } 
} 

const setMenu = (state, action) => {
    return {
        ...state,
        menuToolbar: action.payload
    }  
}

const setMenuBar = (state, action) => {
    return {
        ...state,
        menuBar: action.payload
    }  
}

const updateDragResize = (state, action) => {
    let updatedDragResizes = [...state.dragResizes];
    updatedDragResizes = updatedDragResizes.filter(dragResize => Number(dragResize.id) !== Number(action.payload.id));
    updatedDragResizes.push(action.payload.dragResize);

    return {
        ...state,
        dragResizes: updatedDragResizes,        
    } 
}

const updateFilterColumn = (state, action) => {
    let updatedSearch = [...state.search];

    const searchIndex = updatedSearch.findIndex(search => search.id === parseInt(action.payload.searchId));
    const filterIndex = updatedSearch[searchIndex].filters.findIndex(filter => filter.filter.filterId === parseInt(action.payload.filterId));
    updatedSearch[searchIndex].filters[filterIndex].filter.filterColumn = action.payload.filterColumn;

    return {
        ...state,
        search: updatedSearch
    }   
}

const updateFilterType = (state, action) => {
    let updatedSearch = [...state.search];

    const searchIndex = updatedSearch.findIndex(search => search.id === parseInt(action.payload.searchId));
    const filterIndex = updatedSearch[searchIndex].filters.findIndex(filter => filter.filter.filterId === parseInt(action.payload.filterId));
    updatedSearch[searchIndex].filters[filterIndex].filter.filterType = action.payload.filterType;

    return {
        ...state,
        search: updatedSearch
    }    
}

const updateFilterValue = (state, action) => {
    let updatedSearch = [...state.search];

    const searchIndex =  updatedSearch.findIndex(record => record.id === parseInt(action.payload.searchId));
    const filterIndex = updatedSearch[searchIndex].filters.findIndex(filter => filter.filter.filterId === parseInt(action.payload.filterId));
    updatedSearch[searchIndex].filters[filterIndex].filter.filterValue = action.payload.filterValue;
    const filters = updatedSearch[searchIndex].filters[0];
    const params = updateParams(filters);
    updatedSearch[searchIndex].params = params;

    return {
        ...state,
        search: updatedSearch
    }   
}

const updateLogicalOperator = (state, action) => {
    let updatedSearch = [...state.search];

    const searchIndex = updatedSearch.findIndex(search => search.id === parseInt(action.payload.searchId));
    const filterIndex = updatedSearch[searchIndex].filters.findIndex(filter => filter.filter.filterId === parseInt(action.payload.filterId));
    updatedSearch[searchIndex].filters[filterIndex].filter.logicalOperator = action.payload.logicalOperator;

    return {
        ...state,
        search: updatedSearch
    }    
}

const updateNotOperator = (state, action) => {
    let updatedSearch = [...state.search];

    const searchIndex = updatedSearch.findIndex(search => search.id === parseInt(action.payload.searchId));
    const filterIndex = updatedSearch[searchIndex].filters.findIndex(filter => filter.filter.filterId === parseInt(action.payload.filterId));
    updatedSearch[searchIndex].filters[filterIndex].filter.notOperator = action.payload.notOperator;

    return {
        ...state,
        search: updatedSearch
    }   
}

const updateParams = (filters) => {
    
    let params = '';

    for(const [key, value] of Object.entries(filters.filter)) {
        if(key == 'filterColumn') {
            params = `?${value}=$`;
        } else if(String(key) === 'filterType') {
            params += 'greater=';
        } else if (key == 'filterValue') {
            params += value;
        } 
    }

    return params;     
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.ADD_ADVANCED_SEARCH: return addAdvancedSearch(state, action);         
        case actionTypes.ADD_FILTER:  return addFilter(state, action);   
        case actionTypes.REMOVE_FILTER:  return removeFilter(state, action);     
        case actionTypes.SET_FILTERS : return setFilters(state, action); 
        case actionTypes.SET_MENU: return setMenu(state, action);         
        case actionTypes.UPDATE_FILTERCOLUMN: return updateFilterColumn(state, action); 
        case actionTypes.UPDATE_FILTERTYPE: return updateFilterType(state, action);         
        case actionTypes.UPDATE_FILTERVALUE: return updateFilterValue(state, action);  
        case actionTypes.UPDATE_LOGICAL_OPERATOR: return updateLogicalOperator(state, action); 
        case actionTypes.UPDATE_NOTOPERATOR: return updateNotOperator(state, action); 

        case actionTypes.ADD_DRAG_RESIZE: return addDragResize(state, action);
        case actionTypes.REMOVE_DRAG_RESIZE: return removeDragResize(state, action);
        case actionTypes.UPDATE_DRAG_RESIZE: return updateDragResize(state, action);

        case actionTypes.SET_MENUBAR: return setMenuBar(state, action);
        // case 'updateLogicalOperator': 
        //     let { columnFilters } = state;

        //     const index = columnFilters.findIndex(item => item.filterId === action.filter.filterId);

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
        
                      
        default: return state;
    }
}

export default uiReducer;