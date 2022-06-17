import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MenuToolbar from './MenuToolbar';
import Routing from './Routing';
import { useWindowSize } from '../utility/useWindowSize';


const Main = () => {

    ////////////// Initialize state ///////////////////////////////////////////////////
    const menuToolbar = useSelector(state => state.ui.menuToolbar);
    const [windowWidth] = useWindowSize();  
    // Row or Column Layout
    const [layoutDirectionClass, setLayoutDirectionClass] = useState(); 

    ////////////// Fetch data from store to modify state ///////////////////////////////
    const setMainLayoutDirectionClass = useCallback(() => {
        let mainLayoutDirection = 'mainlayout__row';

        if (windowWidth >= 900) {
            mainLayoutDirection = 
            menuToolbar.position !== 'TOP' || menuToolbar.position !== 'BOTTOM'
            && 'mainlayout__column';
        }

        setLayoutDirectionClass(mainLayoutDirection);
    }, [menuToolbar, windowWidth]);

    useEffect(() => {
        setMainLayoutDirectionClass(); 
    }, [setMainLayoutDirectionClass]); 
    ///////////////////////////////////////////////////////////////////////////////////

    return (
        <div className={`mainlayout ${layoutDirectionClass}`}>
            <MenuToolbar />      
            <Routing />
         </div>            
    );    
}

export default Main;