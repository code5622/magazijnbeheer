import * as actions from './actionTypes';
import axios from 'axios';

export const setProducts = products => {
    return {
        type: actions.SET_PRODUCTS,
        products: products
    };
};

export const setPaginateData = data => {   
    return {
        type: actions.SET_PAGINATE_DATA,
        paginateData: data
    };
};

export const fetchProducts = (pageNumber, pageItems, params='') => {
    return async dispatch => {
        // const data = {
        //     filter: true,
        //     name: 'breedte',
        //     operator: '>=',
        //     value: 8
        // };

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/products/${pageNumber}/${pageItems}${params}`);

            const responseData = response.data;
            const data = {
                firstPage : responseData.firstPage,
                lastPage: responseData.lastPage,
                previousPage: responseData.previousPage,
                nextPage: responseData.nextPage,
                totalCount: responseData.totalCount,
                currentPage: responseData.currentPage
            }
            dispatch(setPaginateData(data));    
            dispatch(setProducts(responseData.items));
        } catch(e) {
            console.log('errormessage: ', e.error);
        }        
    };
};