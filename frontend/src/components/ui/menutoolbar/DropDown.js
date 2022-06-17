import { ListItem } from '../../../material-ui/utils/ListItem'; 

export const DropDown = ({options, dropDownList, showMenu, animationClass}) => (
    showMenu && 
    <ListItem options={options} className={animationClass}>
        <ul className="menutoolbar__dropdown">{dropDownList}</ul>
    </ListItem> 
);

