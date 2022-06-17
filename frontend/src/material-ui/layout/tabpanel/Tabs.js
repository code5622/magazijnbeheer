import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Tab from './Tab';
import { OpenMenuToolbarButton } from '../../../components/ui/menutoolbar';
import { SET_MENU } from '../../../store/actions/actionTypes';
import { useWindowSize } from '../../../utility/useWindowSize';

const Tabs = ({tabList, addOpenMenuToolbarHandler=true}) => {
    /////////// Initialize state //////////////////////////////////////////
    const dispatch = useDispatch();
    const location = useLocation();
    const stateMenuToolbar = useSelector(state => state.ui.menuToolbar);
    const [windowWidth] = useWindowSize();
    const [tabsRight, setTabsRight] = useState(false);
    const [showOpenMenuToolbarButton, setShowOpenMenuToolbarButton] = useState(false);

    ////////////// Modify State ////////////////////////////////////////////////////////
    useEffect(() => {
        if (stateMenuToolbar && stateMenuToolbar.position === 'RIGHT') {
            setTabsRight(true);
        } else {
            setTabsRight(false);
        }    
    }, [stateMenuToolbar, stateMenuToolbar.position]) 

    useEffect(() => {
        let showButton = false;
        if (windowWidth && windowWidth >= 900) {           
            if (addOpenMenuToolbarHandler && !stateMenuToolbar.visible) {
                showButton = true;    
            }
        }
        
        setShowOpenMenuToolbarButton(showButton);
    }, [addOpenMenuToolbarHandler, stateMenuToolbar.visible, windowWidth]) 
  
    ///////////// Create tabs ///////////////////////////////////////////////////
    const tabs = tabList.map(tab => {
        const activeTab = '';
        const isActive = location.pathname === tab.url; 

        return (
            <li key={tab.id} className={`tabpanel__tab ${activeTab}`}>
                <Tab url={tab.url} tabValue={tab.tabValue} isActive={isActive} />
            </li>
        );    
    })

    ////////////// Action Handlers //////////////////////////////////////////////
    function openMenuToolbarHandler() {
        dispatch({type: SET_MENU, payload: {...stateMenuToolbar, visible: true}})
    }    
    /////////////////////////////////////////////////////////////////////////////
    
    return (
        <div  className={!tabsRight ? "tabpanel__tabs tabpanel__tabs--left" :  "tabpanel__tabs tabpanel__tabs--right"} style={{position: 'relative'}}>        
            <OpenMenuToolbarButton 
                showOpenMenuToolbarButton={showOpenMenuToolbarButton}
                buttonPosition={stateMenuToolbar.position} 
                openMenuToolbarHandler={openMenuToolbarHandler}
            />
            {tabs}                                         
        </div>        
    );
}

export default Tabs;
