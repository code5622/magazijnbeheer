import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Rnd } from "react-rnd";

import Window from './Window';
import { closeButton, draggableButton, maximizeButton, draggableItem, titleBar, bottomBar, leftBar, rightBar, buttons  } from "./Styles.js";
import "./styles.css";
import "./Styles.js";
import { ADD_DRAG_RESIZE } from "../../../store/actions/actionTypes";
import { useWindowSize } from "../../../utility/useWindowSize";

// size={{ width: dragItem.width, height: dragItem.height }}
// position={{ x: dragItem.x, y: dragItem.y }}

// default={{
//   x: dragItem.x,
//   y: dragItem.y,
//   width: dragItem.width,
//   height: dragItem.height,
// }}

let handleStyles = {
  left: {
    backgroundColor: "blue",
    width: '3px'   
  },
  top: {
    backgroundColor: "blue",
    width: '3px'   
  },  
  right: {
    backgroundColor: "blue",
    width: '3px'   
  },  
  bottom: {
    backgroundColor: "blue",
    width: '3px'   
  }    
  
};



const handleClasses = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
  bottomLeft: 'bottom-left',   
  bottomRight: 'bottom-right', 
  topLeft: 'top-left',   
  topRight: 'top-right', 
};

const resizeHandleWrapperClass = {
  width: '5px',
  backgroundColor: 'purple !important'   
};

const DragResizable = ({id, minWidth, showScrollbar, priority, maxHandler, setDragable, draggable, children, options, onResizeCallback, onDragStopCallback, onReset, onClose}, props) => {

  const dispatch = useDispatch();
  const [windowWidth, windowHeight, innerTabPanelSize] = useWindowSize();
  const dragResizes = useSelector(state => state.ui.dragResizes)
  const [contentHeight, setContentHeight] = useState();
  const [contentWidth, setContentWidth] = useState();

  // const [disableDragging, setDisableDragging] = useState(true);
  // const [isMaximized, setIsmaximize] = useState(false);
  let dragRef = useRef();
  const [zIndex, setZIndex] = useState(300000);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      if(innerTabPanelSize) {
          setContentHeight(innerTabPanelSize.height);
          setContentWidth(innerTabPanelSize.width);          
      }
  }, [innerTabPanelSize])

  useEffect(() => {
    //console.log(contentWidth, contentHeight);
}, [contentHeight, contentWidth])

  useEffect(() => {
    if(dragResizes) {
      //console.log(dragResizes);        
    }
}, [dragResizes])  

  useEffect(() => {
    if(draggable) {
      setZIndex(zIndex => zIndex - 1);
    }
  }, [draggable])

  const setMaximized = () => {
    if (options.menu) {
      dragRef.current.updatePosition ({x: 0, y: window.innerHeight * 0.15});
      dragRef.current.updateSize ({width: window.innerWidth * 1, height: window.innerHeight * 0.85});
    } else {
      dragRef.current.updatePosition ({x: 0, y: window.innerHeight * 0.05});
      dragRef.current.updateSize ({width: window.innerWidth * 1, height: window.innerHeight * 0.95});      
    }


  //       if(dragRef.current) {
  //         dragRef.current.updatePosition ({x: 0, y: 100});
  //         dragRef.current.updateSize ({width: '99vw', height: '85vh'});
          // setEnableDragging(true);    
          // setIsmaximize(true);
          // props.setResizeOptions(prevState => {
          //   return {
          //     ...prevState,
          //     drawer: {
          //       ...prevState.drawer,
          //       visible: false
          //     }
          //   }
          // })
        // }
        // if (type !== 'drawer') {
        //   props.setOptions(prevOptions => {
        //       return {
        //           ...prevOptions,
        //           drawer: {
        //             id: 1,
        //             x: 0,
        //             y: window.innerHeight * 0.03,
        //             width: window.innerWidth * 0.15,
        //             height: window.innerHeight * 0.85,
        //             bgColor: "#23272a",
        //             visible: false 
        //           }  
        //       }           
        //   }); 
        // } else {
        //   props.setOptions(prevOptions => {
        //     return {
        //         ...prevOptions,
        //         products: {
        //           id: 1,
        //           x: 0,
        //           y: window.innerHeight * 0.03,
        //           width: window.innerWidth * 0.15,
        //           height: window.innerHeight * 0.85,
        //           bgColor: "#23272a",
        //           visible: false 
        //         }  
        //     }           
        // });          
        // }
  }

  const dragOverHandler = () => {

    //(e) => e.stopPropagation()
  }

  const menuHandler = (e) => {
      options.setMenuNavbar({position: e.target.value});
      setShowModal(false);
  }


  return (

    <React.Fragment>
      <Rnd
        
        //resizeHandleStyles={handleStyles}
        resizeHandleClasses={handleClasses}
//        style={draggableItem(dragItem.bgcolor), (!enableDragging) && {zIndex: '500'}}        
        //style={draggableItem(options.bgcolor), {...isMaximized && {}}}
        //className={showScrollbar && 'scrollbar'}
        className="fooClassName"
        style={draggableItem(options.bgcolor, priority)}        
        // position={{x: dragItem.x, y: dragItem.y}}
        // size={{width: dragItem.width, height: dragItem.height}}
        // className="top"
        size={{width: options.width, height: options.height}}
        position={{x: options.x, y: options.y}}
        minWidth={minWidth}
        // default={{
        //   x: options.x,
        //   y: options.y,
        //   width: options.width,
        //   height: options.height,
        //   visible: false
        // }}

        bounds={'parent'} // Specifies movement boundaries
        ref={dragRef}
        onDragStop={(e, direction) =>
          onDragStopCallback(e, direction)
        }

        onResize={(e, direction, ref, delta, position, id) =>
          onResizeCallback(
            e,
            direction,
            ref,
            delta,
            position,
            options.id
          )
        }        
        enableResizing={options.enableResizing}
        disableDragging={draggable}

      >
          <div style={titleBar}>
              <button style={draggableButton} onClick={() => setDragable(draggable => !draggable)}>
                <i className={draggable ? "fa fa-arrows-alt notDraggable" : "fa fa-arrows-alt draggable"} style={{fontSize: '10px'}}></i>
              </button>      
              {priority === 0 && options.enableFullscreen &&       
              <button style={maximizeButton} onClick={maxHandler}>
                <i className="far fa-window-maximize" style={{fontSize: '10px'}}></i>
              </button>}   
              {priority === 1 &&       
              <button style={maximizeButton} onClick={onReset}>
                <i className="fas fa-window-restore" style={{fontSize: '10px'}}></i>
              </button>}      
              <button style={closeButton} onClick={() => onClose(options.id)}>
                x
              </button> 
          </div>        
          <Window>{children}</Window>
      </Rnd>
    </React.Fragment>
  );
};

export default DragResizable;
