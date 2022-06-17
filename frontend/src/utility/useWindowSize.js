import { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

export const useWindowSize = () => {

    const stateMenuToolbar = useSelector(state => state.ui.menuToolbar);
    const stateMenuBar = useSelector(state => state.ui.menuBar);    
    const [windowWidth, setWindowWith] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
    const menuToolbarWidth = 75;
    const menuToolbarHeight = 40;
    const mainBorderTopWidth = 2;
    const tabPanelBorderWidth = 3;   
    const [menuBarSize, setMenuBarSize] = useState({width: 0, height: 30});
    const [menuToolbarSize, setMenuToolbarSize] = useState({width: 0, height: 0}); 
    const [outerTabPanelSize, setOuterTabPanelSize] = useState();
    const [tabsSize] = useState({width: 0, height: 30});
    const [innerTabPanelSize, setInnerTabPanelSize] = useState();

    useEffect(() => {      
        if(stateMenuToolbar !== undefined && Object.keys(stateMenuToolbar).length !== 0) {
            let menuToolbarSizes = {width: menuToolbarWidth, height: 0};
                           
            if (stateMenuToolbar.position === 'BOTTOM' || stateMenuToolbar.position === 'TOP') {
                menuToolbarSizes = {width: 0, height: menuToolbarHeight};
            } 

            if (!stateMenuToolbar.visible) {
                menuToolbarSizes = {width: 0, height: 0};
            }            

            // if (stateMenuToolbar.position === 'LEFT' || stateMenuToolbar.position === 'RIGHT') {
            //     menuToolbarSizes = {width: 0, height: menuToolbarHeight};
            // }             

            setMenuToolbarSize(menuToolbarSizes);    
        }   
    }, [stateMenuToolbar, windowWidth, windowHeight]);

    useEffect(() => {
        setMenuBarSize({width: 0, height: 0});
    }, [stateMenuBar])

    useEffect(() => {
        calculateTabPanelSize();
    }, [menuToolbarSize, menuBarSize, windowHeight, windowWidth]);

    const calculateTabPanelSize = useCallback(() => {
        const tabsSizeHeight = 0;
        const outerTabPanelHeight = windowHeight - menuBarSize.height - mainBorderTopWidth
                                    - menuToolbarSize.height - tabsSizeHeight;
        const innerTabPanelHeight = outerTabPanelHeight - 2 * tabPanelBorderWidth - tabsSize.height;                                
        const outerTabPanelWidth = windowWidth - menuToolbarSize.width; 
        const innerTabPanelWidth = outerTabPanelWidth - 2 * tabPanelBorderWidth;                                                                                       

        setOuterTabPanelSize({width: outerTabPanelWidth, height: outerTabPanelHeight});
        setInnerTabPanelSize({width: innerTabPanelWidth, height: innerTabPanelHeight});
    }, [menuBarSize, windowHeight, windowHeight, tabPanelBorderWidth, menuToolbarSize]); 
    

    /* **************************************************************************** */

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWith(window.innerWidth);
            setWindowHeight(window.innerHeight);            
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);   

    useEffect(() => {
        //console.log(innerTabPanelSize);
    }, [innerTabPanelSize])

      return [
          windowWidth, 
          windowHeight,
          innerTabPanelSize
      ];
}
