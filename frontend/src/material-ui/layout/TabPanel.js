import React, { useEffect, useState } from 'react';

import Tabs from './tabpanel/Tabs';
import { useWindowSize } from '../../utility/useWindowSize';

const TabPanel = ({tabList, children}) => {

    const [windowWidth, windowHeight, innerTabPanelSize] = useWindowSize();
    const [contentWidth, setContentWidth] = useState(windowWidth); 
    const [contentHeight, setContentHeight] = useState(windowHeight);

    useEffect(() => {
        innerTabPanelSize && setContentWidth(innerTabPanelSize.width);
        innerTabPanelSize && setContentHeight(innerTabPanelSize.height);        
    }, [innerTabPanelSize])

    //const [tabs, setTabs] = useState(true);
    
    return (
        <div className="tabpanel">
            <Tabs tabList={tabList} />
            <div className="tabpanel__main">
                <div 
                    className="tabpanel__content" 
                    style={{
                        width: `calc(${contentWidth}px)`, 
                        height: `calc(${contentHeight}px)`,
                    }}    
                >           
                    {children}
                </div>
            </div>              
        </div>
    );
}

export default TabPanel;