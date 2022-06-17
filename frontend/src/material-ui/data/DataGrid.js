import React, { useCallback, useEffect, useRef, useState } from 'react';

import Table from './datagrid/Table';
import TableCell from './datagrid/TableCell';
import TableHeader from './datagrid/TableHeader';
import TableBody from './datagrid/TableBody';
import { useWindowSize } from '../../utility/useWindowSize';

const createHeaders = (columnHeaders, tableRef, rows) => {
    return columnHeaders.map((columnHeader) => ({
      id: columnHeader.id,
      label: columnHeader.label,
      dataType: columnHeader.dataType,
      columnWidth: columnHeader.width,
      tableHeight: '400px',
      ref: useRef()
    }));
};

const DataGrid = ({isResizing, rows, data, minColumnWidth, columnHeaders}) => {
  
    const [tableHeight, setTableHeight] = useState(100);
    const [activeIndex, setActiveIndex] = useState(null);
    const [windowWidth] = useWindowSize();
    const [width, setWidth] = useState();
    const tableRef = useRef(null);
    const [columns] = useState(createHeaders(columnHeaders, tableRef));
    const [classes, setClasses] = useState('datagrid__row datagrid__row--selected');

    useEffect(() => {
      if(data) {
        //const height = (data.length + parseInt(1)) * 10
        setTableHeight(10);
      }
    }, [rows, data]); 

    const mouseDown = (index) => {
      setActiveIndex(index);
      setClasses('datagrid__row resizeColumn');
    };    
    
    const mouseMove = useCallback(
        (e) => {

          if(activeIndex !==null) {
            const gridColumns = columns.map((col, i) => {
              if (i === activeIndex) {
                //const width = e.clientX - col.ref.current.offsetLeft;
                const width = e.clientX - col.ref.current.offsetLeft - 214.5 - 50;
                //const width = e.clientX - col.ref.current.getBoundingClientRect().width;
                //const viewportOffset = tableRef.current.getBoundingClientRect().left;  
                // const width = e.clientX - viewportOffset;                      
                if (width >= minColumnWidth) {
                  return `${width}px`;
                }
              }
              
              return col.ref.current.offsetWidth;
              //return `${col.ref.current.offsetWidth}px`;
            });

            columns[activeIndex].ref.current.style.width = gridColumns[activeIndex];
            // setColumns(prevColumns => {
            //   let columns = [...prevColumns]
            //   columns[activeIndex].columnWidth = gridColumns[activeIndex];
            //   return columns;
              // prevColumns[activeIndex].columnWidth = gridColumns[activeIndex];  
            //});
          }
          // columns[activeIndex].columnWidth = gridColumns[activeIndex];  
          // tableRef.current.style.gridTemplateColumns = `${gridColumns.join(
          //   " "
          // )}`;
        },
        [activeIndex, columns, minColumnWidth]
      );  
 
    const removeListeners = useCallback(() => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', removeListeners);
    }, [mouseMove]);

    const mouseUp = useCallback(() => {
      setActiveIndex(null);
      removeListeners();
      setClasses('datagrid__row datagrid__row--selected');
    }, [setActiveIndex, removeListeners]);         

    
    useEffect(() => {
        if (activeIndex !== null) {
          window.addEventListener("mousemove", mouseMove);
          window.addEventListener("mouseup", mouseUp);
        }
    
        return () => {
          removeListeners();
        };
    }, [activeIndex, mouseMove, mouseUp, removeListeners]);     

    let tableRows = null;

    useEffect(() => {
        windowWidth && setWidth(windowWidth);
    }, [windowWidth])

    if (width >= 500 && data != null && data.length > 0) {
        tableRows = data.map(row => {
            return (           
                    <TableCell
                        styleClasses={classes}
                        id={row.id}
                        state={row}     
                    />
            );   
        });
    } else {
        tableRows = data.map(row => {
          return (
            <table style={{marginBottom: '1.5rem', border: '1px solid #fff', width: '100%'}}>
              <tr>
                <td style={{padding: '1rem'}}>{columnHeaders[0].label}</td>
                <td style={{padding: '1rem'}}>{row.id}</td>
              </tr>
              <tr>
                <td valign="top" style={{padding: '1rem'}}>{columnHeaders[1].label}</td>
                <td style={{padding: '1rem'}}>{row.naam}</td>
              </tr>
              <tr >
                <td valign="top" style={{padding: '1rem'}}>{columnHeaders[2].label}</td>
                <td style={{padding: '1rem'}}>{row.verpakkingseenheid}</td>
              </tr>
              <tr>
                <td style={{padding: '1rem'}}>{columnHeaders[3].label}</td>
                <td style={{padding: '1rem'}}>{row.datum}</td> 
              </tr>                                                              
            </table>              
          );  
        });      
    }

    return (
        <div className="datagrid" style={{marginTop: '5rem', width: '100%'}}>
            <Table tableRef={tableRef}>
                <TableHeader columnHeaders={columns} mouseDown={mouseDown} tableHeight={tableHeight} activeIndex={activeIndex} />
                <TableBody>{tableRows}</TableBody>
            </Table>          
        </div>
    );
};

export default DataGrid;