import './App.css';
export default App;
import { useTable } from 'react-table';

// Course Buttons //

//Table Data //
const data = React.useMemo(() =>
 [
 {
    lesson: 'Week 1: topic 1',
    completion: 'Incomplete', // MUST UPDATE
 },
 {
    lesson: 'Week 2: topic 2',
    completion: 'Incomplete', //MUST UPDATE
 },
 {
    lesson: 'Week 3: topic 3',
    completion: 'Incomplete', // MUST UPDATE
 },
 {
    lesson: 'Week 4: topic 4',
    completion: 'Incomplete', //MUST UPDATE
 },
])

// useTable Hook //
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
} = useTable({ columns, data })

// Table Columns //
const columns = React.useMemo(
    () => [
        {
        Header: 'My Lessons',
        columns: [ 
                { // Week 1: topic 1
                    Header: 'Lesson',
                    accessor: 'lesson',
                },
                { // if the section is complete, mark completion
                    Header: 'Completion',
                    accessor: 'completion',
                },
            ], 
        },
        // { // Maybe fit profile information?
        //     Header: 'My Profile',
        //     columns: [
        //         {
        //             Header: 'ProfilePicture',
        //             accessor: 'picture',
        //         },
        //         {
        //             Header: 'Order #',
        //             accessor: 'order',
        //         },
        //     ],
        // },
    ],
    []
)

function assembleTable () {
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
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
    )
}

// menu bar //


// courses //
// progress
// points/parts
// account info
// 
function HomePage () {
    <div>
        <assembleTable/>
    </div>
}
