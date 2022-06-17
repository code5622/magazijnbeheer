import React from 'react';

const TableCell = props => (
    <tr className="datagrid__row" key={props.state.id}>
        <td className="datagrid__td">{props.state.id}</td>
        <td className="datagrid__td">{props.state.naam}</td>
        <td className="datagrid__td">{props.state.verpakkingseenheid}</td>
        <td className="datagrid__td">{props.state.datum}</td>  
    </tr>
);

export default TableCell;