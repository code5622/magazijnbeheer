import React, { useRef } from 'react';

const TableHeader = ({dimensions, columnHeaders, mouseDown, activeIndex, tableHeight}) => {

    let resizeRef = useRef();

    //const { cells } = props.headerCells;

    const headers = columnHeaders.map(({id, label, dataType, columnWidth, ref}, index) => {
            const sortUpVisible = false;
            const sortDownVisible = false;
            const filterVisible = false;
            // <i className='fas fa-sort-alpha-up-alt'>        
            // <i className='fas fa-sort-alpha-down-alt'>
            // <i className='fas fa-sort-alpha-up'>
            // <i className='fas fa-sort-alpha-down'>
            // <i className='fas fa-user-alt'></i>
            // <i className='fas fa-user-plus'></i>
            // <i className='fas fa-hashtag'>
            // <i className='fas fa-calculator'>
            // <i className='fas fa-search'>
            // <i className='fas fa-plus'>
            // <i className='fas fa-phone'></i>
            // <i className='far fa-image'>
            // <i className='fas fa-home'>
            // key => <i className='fas fa-key'></i>
            // text => <i className='fas fa-font'></i>
            let icon = null;
            if (dataType === 'number') {
                icon = <i className='fas fa-hashtag datagrid__icon'></i>;
            } else if (dataType === 'date') {
                icon = <i className='fas fa-calendar-alt datagrid__icon'></i>;            
            } else if (dataType === 'key') {
                icon = <i className='fas fa-key datagrid__icon'></i>;            
            } else {
                icon = <span className='datagrid__icon' style={{textDecoration: 'underline'}}>Aa</span>;              
            }

            return (
                <th className="datagrid__th" ref={ref} key={id} style={{width: columnWidth}}>
                    <div className="datagrid__header">
                        <div>    
                            <span className="datagrid__iconwrapper">{icon}</span>
                            <span>{label}</span>
                        </div> 
                        <div>
                            {sortUpVisible &&
                                <a onClick={() => {}}>
                                <i className="fas fa-arrow-up" 
                                style={{position: 'absolute', right: '10%', fontSize: '12px', marginTop: '3px', marginRight: '5px'}}>
                                </i></a>                
                            }  
                            {sortDownVisible &&
                                <a onClick={() => {}}>
                                <i className="fas fa-arrow-down" 
                                style={{fontSize: '12px', marginTop: '3px', marginRight: '5px'}}>
                                </i></a>                
                            }                               
                            {filterVisible &&
                                <a onClick={() => {}}>
                                <i className="fas fa-filter" 
                                style={{fontSize: '12px', marginLeft: '5px', marginRight: '5px', marginTop: '3px'}}>
                                </i></a>                
                            }
                            <div
                                ref={resizeRef}
                                style={{height: tableHeight + 'px', minHeight: '100%'}}
                                onMouseDown={() => mouseDown(index)}
                                className={(activeIndex === index) ? 'resize-handle active' : 'resize-handle idele'}
                                // className={`resize-handle ${
                                //   activeIndex === index ? "active" : "idle"
                                // }`}
                            ></div> 
                        </div>                             
                    </div>           
                </th>
            );
    })

    if(resizeRef.current !== undefined)
        resizeRef.current.style.height = tableHeight + 'px';

    return (
        <thead className="datagrid__thead">
            <tr className="datagrid__rowheader">
                {headers}                  
            </tr> 
        </thead>           
    );
};

export default TableHeader;