import React, { useState, useRef, useEffect } from "react";

const Window = ({children}) => {
  return (
    <React.Fragment>   
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <div style={{display: 'flex', height: '100%', overflow: 'auto', scrollbarColor: "#E6007E #30454b"}}>
                <div style={{borderLeft: '10px solid #2c2f33'}}></div>
                <div style={{width: '100vw', padding: '10px'}}>{children}</div>
                <div style={{minWidth: '10px', overflow: 'hidden', borderRight: '10px solid #2c2f33'}}></div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Window;