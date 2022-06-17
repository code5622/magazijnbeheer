import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import DragResize from '../../material-ui/layout/DragResize';
import { useWindowSize } from "../../utility/useWindowSize";
import Products from './Products';
import WarehousePanel from './WarehousePanel';

const Warehouse = () => {

    /////////// Initialize state //////////////////////////////////////////
    const [windowWidth] = useWindowSize();
    const [width, setWidth] = useState();
    const stateProductSettings = useSelector(state => state.ui.windowSettings.warehouse.warehouse.products);
    const stateOptionsDrawer = useSelector(state => state.ui.windowSettings.warehouse.warehouse.optionsDrawer);    
    const stateOptionsDrawer2 = useSelector(state => state.ui.windowSettings.warehouse.warehouse.optionsDrawer2);   

    const [optionsDrawer, setOptionsDrawer] = useState({
        id: 2,
        initX: 70.25,
        initY: 0,
        initWidth: 29.75,
        initHeight: 50,        
        bgColor: "#23272a",
        visible: true, 
        enableResizing: true,
        enableFullscreen: true, 
    });

    const [optionsDrawer2, setOptionsDrawer2] = useState({
        id: 3,
        initX: 70.25,
        initY: 50.25,
        initWidth: 29.75,
        initHeight: 50,        
        bgColor: "#23272a",
        visible: true, 
        enableResizing: true,
        enableFullscreen: true, 
    });    

    const [optionsProducts, setOptionsProducts] = useState({
        id: 1,
        initX: 0,
        initY: 0,
        initWidth: 50,
        initHeight: 100,
        enableResizing: false,
        fullScreen: false,
        bgColor: "#23272a",
        visible: true,
        enableResizing: true,
        enableFullscreen: true       
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
    
    useEffect(() => {
        if(stateOptionsDrawer2) {
            setOptionsDrawer2(stateOptionsDrawer2);
        }
    }, [stateOptionsDrawer2]);  
    
    useEffect(() => {
        windowWidth && setWidth(windowWidth);
    }, [windowWidth])
    ///////////////////////////////////////////////////////////////////////////////////


    return width < 900 ? (
            <WarehousePanel>   
                <Products id={2} />
            </WarehousePanel>)
        :   ( 
        <WarehousePanel>        
            <DragResize id={2} settings={optionsDrawer} > 
                <div style={{color: '#fff', textAlign: 'center'}}>
                    Navigation
                </div>  
            </DragResize>  
            <DragResize id={3} settings={optionsDrawer2} > 
                <div style={{color: '#fff', textAlign: 'center'}}>
                    Navigation2
                </div>  
            </DragResize>            
            <DragResize id={1} minWidth={800} settings={optionsProducts} showScrollbar={false}> 
                <Products id={2} /> 
            </DragResize >
        </WarehousePanel>);                                 
};

export default Warehouse;


        