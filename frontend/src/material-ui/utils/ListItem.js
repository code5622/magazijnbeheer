import React, { useEffect, useRef, useState } from 'react';

import Backdrop from './Backdrop';

export const ListItem = ({options, children, className='listitem__animation'}) => {
    //////// Initialize state //////////////////////////////////////
    const [listItem, setListItem] = useState(null);
    let ref = useRef(null);
    let classes = ['listitem'];
    classes.push(className);

    const inlineStyle = {
        top: options.top,  
        right: options.right,  
        bottom: options.bottom,         
        left: options.left,
        zIndex: 9999,
        overflow: 'auto',
        width: options.width,
        height: options.height, 
        border: options.border,
        padding: options.padding,
        opacity: options.show ? '1' : '0',
        boxShadow: options.boxShadow,              
    }

    ////////////// Create ListItem //////////////////////////////////////////////////////
    useEffect(() => {
        if(options.show) {
            setListItem(
                <React.Fragment>
                    <Backdrop show={options.show} clicked={options.modalClosed} />
                    <div className={classes.join(' ')} ref={ref} style={inlineStyle}>
                        {children}
                    </div>         
                </React.Fragment>
            );
        }
    }, [options.show])
    ////////////////////////////////////////////////////////////////////////////////////

    return listItem;
}

export default ListItem;