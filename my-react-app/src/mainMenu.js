import './App.css';
export default App;
import { useTable } from 'react-table';

// Course Buttons //

    // Table Data //
const data = React.useMemo(() =>
 [
 {
    lesson: 'Lesson 1: Money Management',
    completion: 'Incomplete', // MUST UPDATE
 },
 {
    lesson: 'Lesson 2: Budget and Expenses',
    completion: 'Incomplete', //MUST UPDATE
 },
 {
    lesson: 'Lesson 3: Retirement Planning',
    completion: 'Incomplete', // MUST UPDATE
 },
 {
    lesson: 'Lesson 4: Investments, Stocks, Bonds',
    completion: 'Incomplete', //MUST UPDATE
 },
 {
    lesson: 'Lesson 5: topic 5',
    completion: 'Incomplete', //MUST UPDATE
 },
 {
  lesson: 'Lesson 6: topic 6',
  completion: 'Incomplete', //MUST UPDATE
 },
 {
  lesson: 'Lesson 7: topic 7',
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