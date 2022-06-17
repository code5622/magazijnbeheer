import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../store/actions/actionTypes';
import { useWindowSize } from '../utility/useWindowSize';

const MenuBar = () => {

    const dispatch = useDispatch();
    const ref = useRef();
    const menuBar = useSelector(state => state.ui.menuBar);
    const [windowWidth] = useWindowSize(); 

    let menuItems = null;
    if (windowWidth >= 900) {
        let menuList = [
            {id: 1, label: 'File'},
            {id: 2, label: 'Edit'},
            {id: 3, label: 'View'},                                                     
        ];
    
        menuList = menuList.map(menu => {
            return <li key={menu.id} className="menubar menubar__menu">{menu.label}</li>                
        });
        dispatch({type: actionTypes.SET_MENUBAR, payload: true});
        menuItems = <div className="menubar" ref={ref}>{menuList}</div>; 
    } else {
        if (ref.style) {
            ref.style.display = 'none';
        }           
        dispatch({type: actionTypes.SET_MENUBAR, payload: false});
 
        //menuItems = null;
    }

    return menuItems; 
}

export default MenuBar;