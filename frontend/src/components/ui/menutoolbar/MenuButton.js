export const MenuButton = ({position, onShowMenu, showMenuButton}) => {
    return showMenuButton ? (        
        <button 
            onClick={() => onShowMenu(true)} 
            className={`menutoolbar__menubutton menutoolbar__menubutton--${position}`}
        >
            <i className='fa fa-ellipsis-h menutoolbar__menubutton__icon'></i>              
        </button> 
    ) : null;
};
