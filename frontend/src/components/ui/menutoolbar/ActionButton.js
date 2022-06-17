import { NavLink } from 'react-router-dom';

export const ActionButton = ({actionButton}) => (   
    <NavLink to={actionButton.url} className="menutoolbar__actionbutton__link">
        <i className={actionButton.className}></i>  
    </NavLink>     
);
