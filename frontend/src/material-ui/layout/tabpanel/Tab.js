import { NavLink } from 'react-router-dom';

const Tab = ({url, tabValue, isActive}) => {
    
    const activeTab = isActive ? ' tabpanel__activetab' : '';

    return (
        <NavLink 
            to={url} 
            className={`tabpanel__link ${activeTab}`}
        >
            {tabValue}
        </NavLink>
    );
}

export default Tab;