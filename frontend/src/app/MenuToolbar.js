import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../store/actions/actionTypes'
import { 
    ArrowButton, 
    ActionButton, 
    ActionButtons,
    DropDown,
    DropDownItem, 
    MenuButton,
    Navigation 
} from '../components/ui/menutoolbar';
import { useWindowSize } from '../utility/useWindowSize';

const MenuToolbar = () => {
    //////// Initialize state //////////////////////////////////////
    const dispatch = useDispatch();
    const location = useLocation();
    const stateMenuToolbar = useSelector(state => state.ui.menuToolbar);
    const [windowWidth] = useWindowSize();
    const [showMenuButton, setShowMenuButton] = useState();
    const [arrowDirection, setArrowDirection] = useState();
    const [menuToolbar, setMenuToolbar] = useState({
        position: 'LEFT',
        positionClass: 'menutoolbar__left',        
        animationClass: 'menutoolbar__left--open',
        visible: true
    });      
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef();    

    /////////////// Fetch data from store to modify state ///////////////////
    useEffect(() => {
        stateMenuToolbar !== menuToolbar && setMenuToolbar(stateMenuToolbar)
    }, [stateMenuToolbar, menuToolbar]) 

    ////////////// Modify State and add CSS classes ///////////////////////////////////////////
    useEffect(() => {
        const positionClass = getPositionClass(menuToolbar.position, windowWidth); 
        const animationClass = getAnimationClass(menuToolbar, windowWidth); 
        const updatedMenuToolbar = { 
            position: menuToolbar.position, 
            positionClass, 
            animationClass,
            visible: menuToolbar.visible
        };
        dispatch({type: actionTypes.SET_MENU, payload: updatedMenuToolbar});
        //setMenuToolbar(updatedMenuToolbar);
    }, [windowWidth, menuToolbar.position, menuToolbar.visible, dispatch])

    const menuToolbarClasses = `menutoolbar ${menuToolbar.positionClass} ${menuToolbar.animationClass}`;    
    
    useEffect(() => {
        let menuButton = true;

        if (windowWidth && windowWidth < 900) {
             menuButton = false;
        }

        setShowMenuButton(menuButton);     
    }, [windowWidth])

    ///////////////// Create MenuToolbar ActionButtons //////////////////////
    const actionButtonList = [
        {id: 1, url: '/warehouse', className: `fas fa-warehouse icon}`}, 
        {id: 2, url: '/stockcontrol', className: 'fas fa-chart-line icon'},             
        {id: 3, url: '/purchase', className: 'fas fa-dolly icon'},
        {id: 4, url: '/sales', className: 'fas fa-dolly icon'},     
        {id: 5, url: '/finance', className: `fas fa-calculator icon`},   
        {id: 6, url: '/customerservice', className: 'fas fa-dolly icon'},                                    
    ];

    useEffect(() => {
        if (windowWidth >= 900) {
            dispatch({type: actionTypes.SET_MENU, payload: {...menuToolbar, visible: true}})
        } else { 
            dispatch({type: actionTypes.SET_MENU, payload: {...menuToolbar, visible: false}})
        }     
    }, [windowWidth]);

    
    let actionButtons = actionButtonList.map(actionButton => {
        const locationPath = fetchLocationPath(location.pathname);

        if (locationPath === actionButton.url) {
            actionButton.className += ' menutoolbar__actionbutton__isactive'; 
        }
        
        return (
            <li key={actionButton.id} className={`menutoolbar__actionbutton menutoolbar__actionbutton--${stateMenuToolbar.position.toLowerCase()}`}>
                <ActionButton actionButton={actionButton} />
            </li>    
        );                    
    }) 

    ///////////////////// Define navigation ArrowButton direction //////////////////////
    useEffect(() => {
        if (stateMenuToolbar && windowWidth >= 900) {
            let arrowButtonDirection = stateMenuToolbar.position.toLowerCase();

            arrowButtonDirection = arrowButtonDirection === 'top' ? 'up' : arrowButtonDirection;
            arrowButtonDirection = arrowButtonDirection === 'bottom' ? 'down' : arrowButtonDirection;

            setArrowDirection(arrowButtonDirection);
        }
    }, [dispatch, windowWidth, stateMenuToolbar])

    //////////////////// Create DropDownMenu /////////////////////////////////////////
    let dropDownList = [
        {id: 1, value: 'Left'},
        {id: 2, value: 'Right'},     
        {id: 3, value: 'Top'},  
        {id: 4, value: 'Bottom'},                     
    ];

    dropDownList = dropDownList.map(dropDownItem => {
        return (  
            <li key={dropDownItem.id} className="menutoolbar__dropdown__item">                                 
                <DropDownItem 
                    dropDownItem={dropDownItem}
                    menuToolbarPosition={stateMenuToolbar.position.toLowerCase()}
                    menuHandler={menuHandler}
                />
            </li>
        );        
    });

    let rightPosition;

    switch(stateMenuToolbar.position) {
        case 'RIGHT': {
            rightPosition = '0rem'
            break;
        }
        case 'LEFT': {
            rightPosition = '-4.5rem'
            break;
        }
        default: {
            rightPosition = '1rem'
        }                  
    }

    const listItemOptions = {
        show: showMenu, 
        modalClosed: () => setShowMenu(false),
        top: stateMenuToolbar.position === 'BOTTOM' ? '-11rem': '2rem',
        right: rightPosition,
        width: '10rem',
        padding: '0', 
        border: '2px solid #30454b',
        boxShadow: 'none' 
    }

    const animationClass = stateMenuToolbar.position !== 'BOTTOM' ? 'listitem__animation' : 'listitem__animation__bottom';

    ////////////////// Show or hide MenuToolbar ////////////////////////////////////////
    const displayMenuToolbar = useCallback(() => {
        if (ref.current !== null) {
            setTimeout(() => {
                ref.current.style.display = menuToolbar.visible ? 'flex' : 'none';
            }, 600); 
        }
    }, [menuToolbar.visible]);
    
    useEffect(() => {
        displayMenuToolbar(); 
    }, [menuToolbar.visible, displayMenuToolbar])

    /////////////////// Action Handlers ////////////////////////////////////////////////
    function menuHandler(e) {
        const updatedMenuToolbar = {...menuToolbar, position: e.target.value};
        setMenuToolbar(updatedMenuToolbar);
        dispatch({type: actionTypes.SET_MENU, payload: updatedMenuToolbar});
        setShowMenu(false);
    };

    function toggleHandler() {   
        setMenuToolbar({...menuToolbar, visible: false});
        dispatch({type: actionTypes.SET_MENU, payload: {...menuToolbar, visible: false}})
    }
    //////////////////////////////////////////////////////////////////////////////////// 

    return (
         <div ref={ref} className={menuToolbarClasses}>
             <Navigation position={stateMenuToolbar.position}> 
                 <ArrowButton 
                    arrowDirection={arrowDirection} 
                    onToggle={toggleHandler}
                />       
                <MenuButton 
                    showMenuButton={showMenuButton}
                    position={stateMenuToolbar.position} 
                    onShowMenu={setShowMenu} 
                />        
                <DropDown
                    animationClass={animationClass}
                    options={listItemOptions}
                    dropDownList={dropDownList}
                    showMenu={showMenu} 
                />                    
             </Navigation>   
             <ActionButtons 
                position={stateMenuToolbar.position}
                actionButtons={actionButtons}
            />     
        </div>                                    
     );
}

export default MenuToolbar;

function getPositionClass(position, windowWidth) {
    let positionClass = 'menutoolbar__top';

    if (windowWidth >= 900) {
        switch(position) {  
            case 'LEFT': {
                positionClass = 'menutoolbar__left';         
                break;
            }
            case 'RIGHT': {
                positionClass = 'menutoolbar__right';
                break;
            } 
            case 'TOP': {
                positionClass = 'menutoolbar__top';          
                break;
            } 
            case 'BOTTOM': {
                positionClass = 'menutoolbar__bottom';          
                break;
            }                       
            default: {
                positionClass = 'menutoolbar__left';
            }   
        }   
    } 
    
    return positionClass;
}

function getAnimationClass(menutoolbar, windowWidth) {
    let animationClass = 'menutoolbar__top--center menutoolbar__top--open';
    const position = menutoolbar.position;

    if(menutoolbar.visible && windowWidth >= 900) {
        if(menutoolbar.position === 'LEFT') {
            animationClass = 'menutoolbar__left--open';
        } else if(menutoolbar.position === 'RIGHT') {
            animationClass = 'menutoolbar__right--open';            
        } else if(menutoolbar.position === 'TOP') {
            animationClass = 'menutoolbar__top--open';            
        } else if(menutoolbar.position === 'BOTTOM') {
            animationClass = 'menutoolbar__bottom--open';            
        }
    } else if (windowWidth > 900) {
        if(position === 'LEFT') {
            animationClass = 'menutoolbar__left--close';
        } else if(position === 'RIGHT') {
            animationClass = 'menutoolbar__right--close';            
        } else if(menutoolbar.position === 'TOP') {
            animationClass = 'menutoolbar__top--close';            
        } else if(menutoolbar.position === 'BOTTOM') {
            animationClass = 'menutoolbar__bottom--close';            
        }            
    } else if (!menutoolbar.visible) {
        animationClass = 'menutoolbar__top--close'; 
    }

    return animationClass;
}

function fetchLocationPath(url) {
    const index = url.indexOf('/', 1);
    let locationPath = url;
    
    if (index > 0) {
        locationPath = url.substr(0, index);    
    }

    return locationPath;
}