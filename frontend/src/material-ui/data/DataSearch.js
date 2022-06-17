import React, { useRef  } from 'react';

export const SearchContext = React.createContext({id: null});

const DataSearch = props => {

    const {
        setFilterModal,        
        setSortModal,
        setAggregateModal,
        setGroupModal
    } = props;

    let {children} = props;

    const searchButtonRef = useRef(null); 

    // children = React.Children.map(children, child => {
    //     return React.cloneElement(child, {
    //         data,
    //         columns,
    //         id
    //     });
    // }); 
    const resetButtonColor = () => {
        searchButtonRef.current.style.backgroundColor = '#23272a';
    }

    const transformButtonColor = () => {
        searchButtonRef.current.style.backgroundColor = '#E6007E';
    }
    
    const showFilterModal = () => {
        setSortModal(false);
        setAggregateModal(false)
        setFilterModal(true);
    }

    const showSortModal = () => {
        setFilterModal(false);
        setAggregateModal(false);
        setGroupModal(false);        
        setSortModal(true);
    }

    const showAggregateModal = () => {
        setFilterModal(false);
        setSortModal(false);
        setGroupModal(false);
        setAggregateModal(true)        
    }   
    
    const showGroupModal = () => {
        setFilterModal(false);
        setSortModal(false);
        setAggregateModal(false);
        setGroupModal(true);                
    }        
    
    return ( 
        <div className="Container" style={{minWidth: '20rem'}}>    
            <button className="Button" onClick={showFilterModal}><i className="fas fa-filter" style={{'marginRight': '4px'}}></i>Filter</button>
            <button className="SortButton Button" onClick={showSortModal}><i className='fas fa-sort-alpha-up' style={{'marginRight': '4px'}}></i>Sort</button>        
            <button type="submit" ref={searchButtonRef} className="SearchButton"><i className="fa fa-search"></i></button><input className="SearchInputText" type="text" size="4" placeholder="Search" onFocus={transformButtonColor} onBlur={resetButtonColor} /> 
            <ul>
                <li className="dropdown">
                    {/* <a href="javascript:void(0)" class="dropbtn">Dropdown</a> */}
                    <button className="Button"><div><i className="fa fa-ellipsis-h" style={{fontSize: '12px', color: '#E6007E'}}></i></div></button>
                    <div className="dropdown-content">
                    
                    <a onClick={showFilterModal}><i className="fas fa-filter" style={{'marginRight': '6px', fontSize: '12px'}}></i>Filter</a>
                    <a onClick={showSortModal}><i className="fas fa-sort-alpha-up" style={{'marginRight': '6px', fontSize: '12px'}}></i>Sort</a>
                    <a onClick={showAggregateModal}><i className='fas fa-calculator' style={{'marginRight': '6px', fontSize: '12px'}}></i>Aggregate</a>
                    <a onClick={showGroupModal}><i className='fas fa-sitemap' style={{'marginRight': '6px', fontSize: '12px'}}></i>Group</a>                    
                    </div>
                </li> 
            </ul> 
            {children}
        </div>
    );
}

export default DataSearch;