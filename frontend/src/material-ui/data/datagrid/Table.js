import React from 'react';

const Table = ({children, tableRef}) => {
    return (
    <table className="datagrid__table" ref={tableRef}>
        {children}
    </table>);
}

export default Table;