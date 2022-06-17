import React from "react";

import TabPanel from '../../material-ui/layout/TabPanel';

const WarehousePanel = ({children}) => {
    const tabList = [
        {id: 1, url: '/warehouse', tabValue: 'Warehouse'},
        {id: 2, url: '/warehouse/options', tabValue: 'Options'},
        {id: 3, url: '/warehouse/settings', tabValue: 'Settings'}                  
    ];

    return <TabPanel tabList={tabList}>{children}</TabPanel>                               
};

export default WarehousePanel;

        