import React, { useEffect, useRef, useState } from 'react';

import Backdrop from './Backdrop';

const Modal = props => {
    
    let modalRef = useRef(null);
    const [modal, setModal] = useState(null);

    if(modalRef && props.setFilterModalRef) {
        props.setFilterModalRef(modalRef);
    }

    console.log(props.show);

    let classes = ['Modal'];

    if (props.boxShadow && modalRef.current) {
        modalRef.current.style.boxShadow = props.boxShadow;
    } 
    if (props.border && modalRef.current) {
        modalRef.current.style.border = props.border;
    } 
    if (props.padding && modalRef.current) {
        modalRef.current.style.padding = props.padding;
    }      
    if (props.top && modalRef.current) {
        modalRef.current.style.top = props.top;
    }   
    if (props.right && modalRef.current) {
        modalRef.current.style.right = props.right; 
    }
    if (props.bottom && modalRef.current) {
        modalRef.current.style.bottom = props.bottom; 
    }
    if (props.left && modalRef.current) {
        modalRef.current.style.left = props.left; 
    }  
    if (props.width && modalRef.current) {
        modalRef.current.style.width = props.width; 
    }  
    if (props.height && modalRef.current) {
        modalRef.current.style.height = props.height; 
    }  
    
    if (props.backgroundColor && modalRef.current) {
        modalRef.current.style.backgroundColor = props.backgroundColor;
    }

    if(modalRef.current) {
        if (props.show) {
            modalRef.current.style.display = 'block';
        } else {
            modalRef.current.style.display = 'none';        
        }
    }

    useEffect(() => {    
        if(props) {
            setModal(
                <React.Fragment>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div
                    className={classes.join(' ')}
                    ref={modalRef}
                    style={
                        {
                        //transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0',
                        zIndex: 999999999999999999999999999999999,
                        width: props.width,
                        padding: props.padding,
                        top: '4rem',    
                        left: '-7rem',
                        bottom: props.bottom,
                        right: props.right, 
                        border: props.border,
                        boxShadow: props.boxShadow, 
                        overflow: 'hidden'                                                                                        
                        }
                    }>
                    {props.children}
                </div>          
            </React.Fragment>
            );
        }
    }, [props])

    return modal;
}

export default Modal;