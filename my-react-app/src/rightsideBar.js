import './App.css';
import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';

function AssembleTable({ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }) {
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}

function UserDropdownMenu() {
    const returnMain = () => {};
    const changePass = () => {}; 
    const signOut = () => {};

    return (
      <div className="user-dropdown-menu">
        <span className="username">Email address</span>
        <div className="dropdown-options">
          <div className="dropdown-option" onClick={returnMain}>Return to Main Menu</div>
          <div className="dropdown-option" onClick={changePass}>Change Password</div>
          <div className="dropdown-option" onClick={signOut}>Sign Out</div>
        </div>
      </div>
    );
}

export default function RightSideBar() {
    const data = useMemo(() => [], []);
    const columns = useMemo(() => [], []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="app">
      <div className="left-sidebar">
        <AssembleTable getTableProps={getTableProps} getTableBodyProps={getTableBodyProps} headerGroups={headerGroups} rows={rows} prepareRow={prepareRow} />
      </div>
      <div className="right-sidebar">
        <div className="user-heading" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          User Settings
          {showDropdown && <UserDropdownMenu />}
        </div>
      </div>
    </div>
  );
}
