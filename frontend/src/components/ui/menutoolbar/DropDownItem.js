export const DropDownItem = ({dropDownItem, menuToolbarPosition, menuHandler}) => (
    <>
        <button className="menutoolbar__dropdown__button" value={dropDownItem.value.toUpperCase()} onClick={(e) => menuHandler(e)}>{dropDownItem.value}</button>
        {menuToolbarPosition.toUpperCase() === dropDownItem.value.toUpperCase() && (
            <i className='fa fa-check menutoolbar__dropdown__icon'></i>
        )} 
    </>    
);
