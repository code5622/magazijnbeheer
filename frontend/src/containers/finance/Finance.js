import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import DragResize from '../../material-ui/layout/DragResize';
import Products from './Products';
import FinancePanel from './FinancePanel';

const Finance = () => {

    /////////// Initialize state //////////////////////////////////////////
    const stateProductSettings = useSelector(state => state.ui.windowSettings.warehouse.warehouse.products);
    const stateOptionsDrawer = useSelector(state => state.ui.windowSettings.warehouse.warehouse.optionsDrawer);    

    const [optionsDrawer, setOptionsDrawer] = useState({
        id: 2,
        initX: 70.25,
        initY: 0,
        initWidth: 29.75,
        initHeight: 50,        
        // bgColor: "#23272a",
        // visible: true, 
        // enableResizing: true,
        // enableFullscreen: true, 
    });

    const [optionsProducts, setOptionsProducts] = useState({
        id: 1,
        initX: 0,
        initY: 0,
        initWidth: 70,
        initHeight: 100,
        enableResizing: false,
        fullScreen: false,
        // bgColor: "#23272a",
        // visible: true,
        // enableResizing: true,
        // enableFullscreen: true       
    });   

    useEffect(() => {
        if(stateProductSettings) {
            setOptionsProducts(stateProductSettings);
        }
    }, [stateProductSettings]);

    useEffect(() => {
        if(stateOptionsDrawer) {
            setOptionsDrawer(stateOptionsDrawer);
        }
    }, [stateOptionsDrawer]);    
    ///////////////////////////////////////////////////////////////////////////////////

    return (
        <FinancePanel>        
            <DragResize minWidth="100px" settings={optionsDrawer} > 
                <div style={{color: '#fff', textAlign: 'center'}}>
                    Finance
                </div>  
            </DragResize>  
            <DragResize minWidth="600px" settings={optionsProducts} showScrollbar={false}> 
                <Products id={2} /> 
            </DragResize >
        </FinancePanel>                                  
    );
};

export default Finance;


        