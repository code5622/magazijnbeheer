import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

import { useWindowSize } from '../../utility/useWindowSize';
import DragResizable from "./dragresize/DragResizable";
import { SearchContext } from "../data/DataSearch";
import * as actions from '../../store/actions/index';

const DragResize = ({minWidth, showScrollbar, settings, children, id=1}) => {
  //const [dragItems, setDragItems] = useState();
    const { menu } = useSelector(state => state.ui);
    const stateMenuToolbar = useSelector(state => state.ui.menuToolbar);
    const stateDragResizes = useSelector(state => state.ui.dragResizes);   
    const [position, setPosition] = useState(null);

    const [windowWidth, windowHeight, innerTabPanelSize] = useWindowSize();
    // 84 => 7.5rem (menuToolbar) + .3rem (borderRight) + .6rem (borderLeft)
    let initialWidth = windowWidth - 86; 
    const [contentWidth, setContentWidth] = useState(); 
    // 66 => 3rem (menubar) + 3rem (tabs) + borderTop .3rem +  borderBottom .3rem + 2rem outline
    const initialHeight = windowHeight - 68;
    const [contentHeight, setContentHeight] = useState();
    

 

  useEffect(() => {
      if (innerTabPanelSize) {
          setContentHeight(innerTabPanelSize.height);
          setContentWidth(innerTabPanelSize.width);
      }
  }, [innerTabPanelSize]);  

  const [storedDragItems, setStoredDragItems] = useState();
  const [isFetching, setFetching] = useState(false);
  //const initialDraggableItems = initialDragItems();
  const [draggable, setDragable] = useState(true);

  const [options, setOptions] = useState(() => {
      return {
        ...settings,
        x: 0, y: 0, width: 0, height: 0,
        bgColor: "#23272a",
        visible: true, 
        enableResizing: true,
        enableFullscreen: true,         
      }
  })

  const [priority, setPriority] = useState(0);
  const [menuOptions, setMenuOptions] = useState();

    useEffect(() => {  
      setOptions(options => {
          const initX = settings.initX / 100;
          const initY = settings.initY / 100;
          const initWidth = settings.initWidth / 100;
          const initHeight = settings.initHeight / 100;
          const width = initWidth * contentWidth < minWidth ? Number(minWidth) : initWidth * contentWidth;

          const updatedOptions = {
              ...settings,
              x: initX * contentWidth,
              y: initY * contentHeight,
              width: width,
              height: initHeight * contentHeight,  
              bgColor: "#23272a",
              visible: true, 
              enableResizing: true,
              enableFullscreen: true,                         
          };

          return updatedOptions;
      });
  }, [contentWidth, contentHeight, settings]);

  useEffect(() => {
    if(menu) {
      setMenuOptions(menu);
    }
  }, [menu])
  // const saveHandler = () => {
  //   for (const [key, dragItem] of dragItems.entries()) {
  //     storeComponents(dragItem);
  //   }
  // };

  const findItem = (items, id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };
  
  const findIndexNumber = (items, item) => {
    const index = items.findIndex((dragItem) => dragItem.id === item.id);
    return index;
  };  

  const fetchComponents = () => {
    axios
      .get("https://dashboard-95c40-default-rtdb.firebaseio.com/dragItems.json")
      .then((response) => {
        const dataSet = [];
        const fetchData = response.data;
        Object.keys(fetchData).map((key) => {
          let component = {
            ...fetchData[key],
            key: key,
          };
          return dataSet.push(component);
        });
        setStoredDragItems(dataSet);
      })
      .catch((error) => console.log(error));
  };

  const storeComponents = (data) => {
    deleteComponents();
    setTimeout(() => {
      axios
        .post(
          "https://dashboard-95c40-default-rtdb.firebaseio.com/dragItems.json",
          data
        )
        .catch((error) => console.log(error));
    }, 200);
  };

  const deleteComponents = () => {
    axios
      .delete(
        "https://dashboard-95c40-default-rtdb.firebaseio.com/dragItems.json"
      )
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   if (isFetching) {
  //     setDragItems(storedDragItems);
  //     setFetching(false);
  //   }
  // }, [storedDragItems]);


  // const fetchChildren = (children) => {

  //   const items = children.map(child => {
  //       return child.props.options;
  //     });

  //   return items;
  // };

  useEffect(() => {
    //console.log(children[1].props.options);
    //console.log(fetchChildren(children));
    // const childs = fetchChildren(children);
    // setDragItems(childs);
    //fetchComponents();
    //setFetching(true);   
  }, []);

  // useEffect(() => {
  // }, [dragItems]); 

  const closeHandler = useCallback(() => {
    // (id) => {
    //   const updatedDragItems = [...dragItems];
    //   let dragItem = findItem(updatedDragItems, id);
    //   dragItem.visible = false;

    //   const index = findIndexNumber(updatedDragItems, dragItem);
    //   updatedDragItems.splice(index, 1);
    //   setDragItems(updatedDragItems);
    // },
    // [dragItems]

    setOptions(options => {
      return {
        ...options,
        visible: false
      }
    })    
  });

  const dragStopHandler = (e, direction) => {

    let y = direction.y;
    let x = direction.x;       

    setOptions(options => {
      return {
        ...options,
        x: x,
        y: y
      }
    });


    





    // e.stopPropagation();    
    // let updatedDragItems = [...dragItems];
    // let dragItem = findItem(updatedDragItems, id); // Find Current DragItem
    // dragItem.x = direction.x;
    // dragItem.y = direction.y;
    // const index = findIndexNumber(dragItems, dragItem);
    // updatedDragItems.splice(index, 1); // Remove Old DragItem
    // updatedDragItems.push(dragItem); // Add Updated DragItem
    // setDragItems(updatedDragItems);
  };

  const resizeHandler = (e, direction, ref, delta, position, id) => {
    setDragable(true);
    // let updatedDragItems = [...dragItems];
    // let dragItem = findItem(updatedDragItems, id); // Find Current DragItem
    // dragItem.width = ref.style.width;
    // dragItem.height = ref.style.height;
    // dragItem.x = position.x;
    // dragItem.y = position.y;
    // const index = findIndexNumber(dragItems, dragItem);
    // updatedDragItems.splice(index, 1); // Remove Old DragItem
    // updatedDragItems.push(dragItem); // Add Updated DragItem
    // setDragItems(updatedDragItems);

    /****************************** */

    let y = position.y;
    let x = position.x;

    let widthSize = ref.style.width;
    let index = widthSize.search('px');
    widthSize = widthSize.substr(0, index);

    let heightSize = ref.style.height;
    index = heightSize.search('px');
    heightSize = heightSize.substr(0, index);   
    
    // let width = ref.style.width;                    
    // if (!overlap) {
    //   x = rect2.right + 2;
    //   width = options.width;
    // }     

    setOptions(options => {
      return {
        ...options,
        x: x,          
        y: y,
        width: widthSize,
        height: heightSize
      }
    })
  };

    useEffect(() => {
      const timer = setTimeout( () => {
          setPosition(options);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }, [options]);    

    useEffect(() => {
        const timer = setTimeout( () => {
            if (position === options) {
              
            }
        }, 2000);
        

        return () => {
          clearTimeout(timer);
        };
    }, [position, options]);

  const resetHandler = () => {
    //let items = JSON.stringify(initialDraggableItems);
    // setDragItems([]);
    // setTimeout(() => {
    //   setDragItems(JSON.parse(items));
    // }, 0);

    setOptions(() => {
        const updatedOptions = {
          ...settings,
          x: settings.initX / 100 * contentWidth,
          y: settings.initY / 100 * contentHeight,
          width: settings.initWidth / 100 * contentWidth,
          height: settings.initHeight / 100 * contentHeight
        }   

        return updatedOptions;      
    });
    setPriority(0);
  };

  const maxHandler = () => {
      setOptions(options => {
        return {
          ...options,
          x: 0,          
          y: 0,
          width: contentWidth,          
          height: contentHeight        
        }
      }) 
      setPriority(1);   
  }  

  let updatedChildren = React.Children.map(children,
    (child) => {
      return React.cloneElement(child, { 
        //onResizeCallback: resizeHandler,
        //onDragStopCallback: dragStopHandler,
        onReset: resetHandler,
        onClose: closeHandler ,
        //setDragable, 
        //maxHandler,
        options, 
        priority, 
        draggable           
      });
  });

  let dragResizable = null;

  if(options) {
    dragResizable = options.visible &&
      <DragResizable
            options={options}
            //onDragCallback={dragHandler}
            onResizeCallback={resizeHandler}
            onDragStopCallback={dragStopHandler}
            onReset={resetHandler}
            onClose={closeHandler}
            draggable={draggable}
            setDragable={setDragable}
            maxHandler={maxHandler}
            priority={priority} 
            showScrollbar={showScrollbar}
            minWidth={minWidth}
            id={id}
            //setResizeOptions={setResizeOptions}        
      >{updatedChildren}</DragResizable>
  }

  return dragResizable;
};

export default DragResize;
