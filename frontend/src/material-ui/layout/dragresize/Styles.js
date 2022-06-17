export const closeButton = {
  padding: '0 .5rem',
  border: "none",
  backgroundColor: "#2c2f33",
  color: "white",
  fontSize: "16px", 
};

export const menuButton = {
  padding: '0 .5rem',
  border: "none",
  backgroundColor: "#2c2f33",
  color: "#fff",
  fontSize: "1.6rem" 
};

export const draggableButton = {
  padding: '0 .5rem',
  border: "none",
  backgroundColor: "#2c2f33",
  color: "white",
  fontSize: "1.6rem" 
};

export const maximizeButton = {
  padding: '0 .5rem',
  border: "none",
  backgroundColor: "#2c2f33",  
  color: "white",
  fontSize: "1.6rem", 
};

export const draggableItem = (bgcolor, priority) => {
  return {
    /*outline: "10px solid black",*/
    // borderLeft: "10px solid #2c2f33",
    //borderRight: "10px solid #2c2f33",
    borderBottom: "10px solid #2c2f33",

    paddingTop: '4px',
    //padding: '25px',
    
    //paddingLeft: '1rem',
    height: '100%',
    //overflow: "auto",
    scrollbarColor: "darkgrey #30454b", // #E6007E
    scrollbarWidth: "thin",
    backgroundColor: "#23272a",
    zIndex: priority,
    boxSizing: 'border-box',

  };
};

export const titleBar = {
  position: 'sticky',
  top: 0,
  left: 0,
  display: 'flex',
  zIndex: 9999999999999999999999999999999999999999999999999999999999999999999999999999999,
  //marginBottom: '1rem',
  justifyContent: 'flex-end',
  paddingRight: '1rem',
  alignItems: 'center',
  // marginBottom: "1.5rem",
  height: "2rem",
  backgroundColor: "#2c2f33",

};

export const leftBar = {
  //marginBottom: "1.5rem",
  width: '3px',
  //height: "86vh",
  // marginTop: "-30px",
  backgroundColor: "#2c2f33",
};

export const rightBar = {
  //marginBottom: "1.5rem",
  width: '3px',
  //height: "86vh",
  // marginTop: "-30px",
  backgroundColor: "#2c2f33",
};

export const bottomBar = {
  //marginBottom: "1.5rem",
  // width: '100%',
  // height: "3px",
  backgroundColor: "#2c2f33",
};
