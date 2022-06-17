export const Navigation = ({children, position}) => (
    <div className={`menutoolbar__navigation menutoolbar__navigation--${position}`}>
        {children}
    </div>  
); 

