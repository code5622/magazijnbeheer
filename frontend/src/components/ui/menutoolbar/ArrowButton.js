export const ArrowButton = ({arrowDirection, onToggle}) => (
    <button className="menutoolbar__arrowbutton" onClick={onToggle}>
        <i className={`fas fa-angle-double-${arrowDirection} menutoolbar__arrowbutton__icon`}></i>              
    </button> 
);

