export const OpenMenuToolbarButton = props => { 

    const {
        showOpenMenuToolbarButton, 
        buttonPosition, 
        openMenuToolbarHandler
    } = props;

    const buttonPositionClass = buttonPosition.toLowerCase();

    const openMenuToolbarButton = showOpenMenuToolbarButton ? (
        <button 
            onClick={openMenuToolbarHandler} 
            className={`tabpanel__menutoolbarbutton tabpanel__menutoolbarbutton--${buttonPositionClass}`}
        > 
            <i className="fa fa-bars tabpanel__menutoolbarbutton__icon"></i>
        </button>  
    ) : null;
    
    return openMenuToolbarButton;
};
