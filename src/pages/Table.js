import * as React from 'react';
import { DataGrid, GridActionsCellItem, GridToolbarContainer, GridToolbarExport  } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Details from './Details';
import Calculation from "./calculation"
import Result from './result';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport printOptions={{
    hideFooter: true,
    hideToolbar: true,
  }} />
    </GridToolbarContainer>
  );
}
export default function AskConfirmationBeforeSave() {
  const [rows,setRows] = React.useState([{
                                            id: 1,
                                            sChainage:'1,2,3',
                                            eChainage:"1,7,0",
                                            cracks:"1,7,0",
                                            rav:'1,2,3',
                                            pot:"1,7,0",
                                            shov:'1,2,3',
                                            patch:'1,2,3',
                                            dep:"1,7,0",
                                            rut:"1,7,0",
                                            shoulder:"good",
                                            remarks:"remarks",
                                        }])
  const [count,setCount] = React.useState(1)
  const [open,setOpen] = React.useState(false)
  const [type,setType] = React.useState("rural")
  const [result,setResult] = React.useState()
  const [rOpen,setROpen] = React.useState(false)
  function handleOpen(){
    setOpen(true)
  }
  const handleResult = () =>{
    // console.log(result)
    setROpen(true)
  }
  const handleSubmit = async() =>{
    console.log("hello");
    setResult(Calculation(rows,type))
  }
  const [snackbar, setSnackbar] = React.useState(null);
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const columns =React.useMemo(
    () => [
    { field: 'sChainage', headerAlign: 'center', width:150, headerName: 'Start Chainage',type: 'number', editable: true },
    { field: 'eChainage', headerAlign: 'center', width:150, headerName: 'End Chainage', type: 'number', editable: true },
    { field: 'cracks', headerAlign: 'center', headerName: 'Cracks (%)', editable: true },
    { field: 'rav', headerAlign: 'center', headerName: 'Ravelling (%)',  editable: true },
    { field: 'pot', headerAlign: 'center', headerName: 'Potholes (%)',  editable: true },
    { field: 'shov', headerAlign: 'center',headerName: 'Shoving (%)', editable: true },
    { field: 'patch', headerAlign: 'center', width:150, headerName: 'Patch work (%)', editable: true },
    { field: 'dep', headerAlign: 'center', headerName: 'Cracks (%)', editable: true },
    { field: 'rut', headerAlign: 'center', headerName: 'Rut depth (%)', editable: true },
    { field: 'shoulder', headerAlign: 'center', width:150, headerName: 'Shoulder condition', editable: true },
    { field: 'remarks', headerAlign: 'center', headerName: 'Remarks', editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Delete',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,],
    },
  ],[deleteUser],
  );
  console.log("row init", rows);
  
  const handleCloseSnackbar = () => setSnackbar(null);
  
  const processRowUpdate = async (newRow, oldRow) => {
      try {
        const index = rows.indexOf(oldRow);
        var data = [...rows];
        data[index] = newRow;
        setRows(data);
        console.log("old", oldRow);
        console.log("new", newRow);
        console.log("rows", rows);
        const response = newRow;
        setSnackbar({ children: 'User successfully saved', severity: 'success' });
        return response;
      } catch (error) {
        setSnackbar({ children: 'Error while saving user', severity: 'error' });
        throw error;
      }
    }
    console.log("rows", rows);
  return (
    <>
      <div  style={{ display: "flex" }}>
      <Button style={{ marginLeft: "auto" }} onClick={handleOpen}  variant="contained">
        Add Record
      </Button>
      <Details count={count} setCount={setCount} rows={rows} open={open} setOpen={setOpen} setRows={setRows}/>
      </div>
      <br />
    {(rows != [])?
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        getRowId={(row) => row.id}
        processRowUpdate={processRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
      />
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>:
    <p>No Record</p>}
    <Button onClick={handleSubmit} variant='contained'>
      Submit
    </Button>
    <Button onClick={handleResult} variant='contained'>
      Result
    </Button>
    {result && <Result open={rOpen} setOpen={setROpen} data={rows} type={type} reult={result} />}
    </>
  );
}

