import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrent } from '../../redux/slices/todoSlice';
import Button from '@mui/material/Button';

const columns = [
  { id: 'dateOfCreation', label: 'date of creation', minWidth: 100 }, 
  { id: 'todo', label: 'todo', minWidth: '75vw' },
];



export const Todos = () => {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.todos);  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [id, setId ] = React.useState('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id)
  };

  const handleClose = () => {    
    setOpen(false);
  };
 const deleteCurrenTodo =(id)=>{
    dispatch(deleteCurrent(id))
    return setOpen(false)
 }

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {data.map((row) => {
              return (
              <TableRow 
              tabIndex={-1}
              hover role="checkbox"  
              key={row.id}
              >
                {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {value}
                  </TableCell>
                        
                  );
                 })}
                  <TableCell>
                    <IconButton
                    onClick={()=>navigate(`/edit/${row.id}`)}
                    > <EditNoteIcon/>
                    </IconButton>
                    
                    <IconButton
                    onClick={()=>handleClickOpen(row.id)}
                    sx={{marginTop:1}}aria-label="delete">
                      <DeleteIcon/>
                    </IconButton>
                    
                  </TableCell>
     
              </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Dialog                
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirm
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={()=>deleteCurrenTodo(id)}
          >Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}