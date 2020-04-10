import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import up1 from '../styling/up1.png'
import down1 from '../styling/down1.png'

const columns = [
  { id: 'duration', label: 'Duration:', minWidth: 140 },
  { id: 'feelings', label: 'Feelings Score:', minWidth: 100 },
  { id: 'status', label: 'Status:', minWidth: 10}
];

function createData(duration, feelings, status) {
    return {duration, feelings, status}
}

// const rows = [
//     createData('Today', 0.8, <img style={{height: '50px', width: '50px'}}src={up1}></img>),
//     createData('This Week', 0.6, <img style={{height: '50px', width: '50px'}}src={down1}></img>),
//     createData('This Month', 0.7, <img style={{height: '50px', width: '50px'}}src={down1}></img>),
//     createData('All Time', 0.5, <img style={{height: '50px', width: '50px'}}src={up1}></img>)


// ]



const useStyles = makeStyles({
  root: {
    position: 'absolute', 
    left: '300px',
    width: '60%',
    boxShadow: '5px 5px #4B7095',

  },
  container: {
    maxHeight: 500,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  


  const rows = [
    createData('Today', 
        Math.round(props.time.daily * 100) / 100, 
        <img style={{height: '50px', width: '50px'}}src={props.time.daily >= props.time.weekly ? up1 : down1}></img>
        ),
    createData('Yesterday',
        Math.round(props.time.yesterday * 100) / 100,  
        <img style={{height: '50px', width: '50px'}}src={props.time.yesterday >= props.time.monthly ? up1 : down1}></img>),
    createData('This Week', 
        Math.round(props.time.weekly * 100) / 100, 
        <img style={{height: '50px', width: '50px'}}src={props.time.weekly >= props.time.allTime ? up1 : down1}></img>),
    createData('All Time', 
        Math.round(props.time.allTime * 100) / 100, 
        <img style={{height: '50px', width: '50px'}}src={up1}></img>
        )


]

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
    // console.log(props)
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,backgroundColor: "#FFED87", fontSize: "35px", textAlign: 'center',fontFamily: 'Noto Sans' + "sans-serif"
                }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell light={true} key={column.id} align={column.align} style={{backgroundColor: '#6699CC', color: 'white', fontSize: '25px', textAlign: 'center',fontFamily: 'Noto Sans' + "sans-serif"
                    }}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    
    </Paper>
  );
}
