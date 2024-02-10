import './App.css';
export default App;
import { useTable } from 'react-table';

// Course Buttons //

    // Table Data //
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
                    Cell: ({ cell }) => (
                    <button value={cell.row.values.name} onClick={props.handleClick}>
                    Button
                    </button>)
                },
                { // if the section is complete, mark completion (must be able to change)
                    Header: 'Completion',
                    accessor: 'completion',
                },
            ], 
        },
        // { // Maybe fit profile information?
        //     Header: 'My Profile',
        //     columns: [
        //         {
        //             Header: '',
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

function assembleTable () { // TODO: make look nice
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

// MY SHIP //
// TODO: display progress/percentage complete
// TODO: List "parts" acquired


// MY PROFILE //

function assembleProfile() {
    // TODO: Display username, profile picture
    // TODO: Settings and other potential user abilities
    // TODO: My quizzes: Go back and review quiz questions?
}


function HomePage () {
    // menu bar (top)

    // Course list + completion check (left + center)
    <div>
        <assembleTable/>
    </div>

    //profile (upper right)

    //ship progress (lower right)

}
