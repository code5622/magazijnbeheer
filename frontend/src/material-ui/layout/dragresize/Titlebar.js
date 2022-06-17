import React, { useState, useRef, useEffect } from "react";

import { closeButton, draggableButton, maximizeButton, draggableItem, titleBar, bottomBar, leftBar, rightBar, buttons  } from "./dragresize/Styles.js";
import "./styles.css";
import "./dragresize/Styles.js";

const Titlebar = ({setDragable, onClose, onReset, maxHandler, options, priority, draggable}) => {
  return (
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
  );
}

export default Titlebar;