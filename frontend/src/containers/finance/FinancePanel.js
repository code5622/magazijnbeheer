import React from "react";

import TabPanel from '../../material-ui/layout/TabPanel';

const FinancePanel = ({children}) => {
    const tabList = [
        {id: 1, url: '/finance', tabValue: 'Finance'},
        {id: 2, url: '/finance/options', tabValue: 'Options'},
        {id: 3, url: '/finance/settings', tabValue: 'Settings'}                  
    ];

    return <TabPanel tabList={tabList}>{children}</TabPanel>                               
};

export default FinancePanel;

        