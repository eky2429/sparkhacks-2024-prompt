import './App.css';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Button } from 'react-bootstrap';


// Course Buttons //

const lessonNumber = 0; //CHANGE ACCORDING TO BUTTON PRESSED

const columns = [
    {id: 'lesson', label: 'Lesson'},
    {
        field: "lessonButton",
        renderCell: (cellValues) => {
          return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Go To Lesson
            </Button>
          );
        }
    },
    {id: 'completion', label: 'Completion'}
];

function createData(lesson, field, completion) {
    return {lesson, field, completion};
}

const rows = [
    createData('Lesson 1', 'button', 'Incomplete'),
    createData('Lesson 2', 'button', 'Incomplete'),
    createData('Lesson 3', 'button', 'Incomplete'),
    createData('Lesson 4', 'button', 'Incomplete'),
    createData('Lesson 5', 'button','Incomplete'),
    createData('Lesson 6', 'button', 'Incomplete')
];

function handleClick() {

}

function assembleTable2 () { // TODO: make look nice
    
    return (
        <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                My Courses
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                //   style={background-color: 'purple'}
                  component="th"
                  scope="row">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => 
            <TableRow>
                <TableCell>
                    {row.lesson} 
                </TableCell>
                <TableCell>
                    {row.field}
                </TableCell>
                <TableCell>
                    {row.completion}
                </TableCell>
            </TableRow>
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    );
}

export default function HomePage () {
    // menu bar (top)

    // Course list + completion check (left + center)
    return (
        <div>
            {assembleTable2()}
        </div>
    );
    

    //profile (upper right)

    //ship progress (lower left; below course list)

}
