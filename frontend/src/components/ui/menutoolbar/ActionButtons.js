export const ActionButtons = ({position, actionButtons}) => {
    return <div className={`menutoolbar__actionbuttons--${position}`}>
        {actionButtons}
    </div>
};
