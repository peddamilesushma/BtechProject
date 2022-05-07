import * as React from 'react';
import { DataGrid, GridActionsCellItem, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton  } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AstmDetails from './astmDetails';
import AstmResult from './astmResult';
import { useRecoilState } from "recoil";
import {astmTableData,astmResultData,astmPlaceData} from "../store"
import { Stack } from '@mui/material';
import Astm from './astm';
import TextField from '@mui/material/TextField';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport printOptions={{
    hideFooter: true,
    hideToolbar: true,
  }} />
    <GridToolbarColumnsButton/>
    <GridToolbarFilterButton/>
    </GridToolbarContainer>
  );
}
export default function AstmTable() {
  const [rows,setRows] = useRecoilState(astmTableData)
  const [count,setCount] = React.useState(0)
  const [open,setOpen] = React.useState(false)
  const [place,setPlace] = useRecoilState(astmPlaceData)
  const [totalResult,setTotalResult] = useRecoilState(astmResultData)
  const [result,setResult] = React.useState()
  const [rOpen,setROpen] = React.useState(false)
  function handleOpen(){
    setOpen(true)
  }
  const handleReset=() =>{
    setRows([])
    setResult()
    setPlace("place")
  }
  const handlePlaceChange = (event) =>{
    setPlace(event.target.value)
  }
  const handleResult = () =>{
    setROpen(true)
    var tData=[];
    for(let i=0; i< rows.length; i++){
      var condition;
      if(result[i] < 10) condition = "Fail";
      else if(result[i] >= 10 && result[i] < 25) condition = "Serious";
      else if(result[i] >= 25 && result[i] < 40) condition = "Very Poor";
      else if(result[i] >= 40 && result[i] < 55) condition = "Poor";
      else if(result[i] >= 55 && result[i] < 70) condition = "Fair";
      else if(result[i] >= 70 && result[i] < 85) condition = "Satisfactory";
      else condition = "Good";
      if(condition) {
          tData.push(
              {
                  id:rows[i].id,
                  sChainage:rows[i].sChainage,
                  eChainage:rows[i].eChainage,
                  lcracks:rows[i].lcracks,
                  mcracks:rows[i].mcracks,
                  hcracks:rows[i].hcracks,
                  mrav:rows[i].mrav,
                  mrav:rows[i].hrav,
                  lpot:rows[i].lpot,
                  mpot:rows[i].mpot,
                  hpot:rows[i].hpot,
                  lpatch:rows[i].lpatch,
                  mpatch:rows[i].mpatch,
                  hpatch:rows[i].hpatch,
                  ldep:rows[i].ldep,
                  mdep:rows[i].mdep,
                  hdep:rows[i].hdep,
                  ledge:rows[i].ledge,
                  medge:rows[i].medge,
                  hedge:rows[i].hedge,
                  shoulder:rows[i].shoulder,
                  remarks:rows[i].remarks,
                  pcrValue:result[i],
                  condition:condition
              }
          )
      }}
    if(tData.length>0){
        var tResult={
            data:tData,
            place:place
        }
        setTotalResult((totalResult) => [...totalResult,tResult])
    }
  }
  console.log("totalresult",totalResult)
  const handleSubmit = async() =>{
    setResult(Astm(rows))
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
    { field: 'lcracks', headerAlign: 'center', headerName: 'Cracks (Low)', editable: true },
    { field: 'mcracks', headerAlign: 'center', headerName: 'Cracks(Medium)', editable: true },
    { field: 'hcracks', headerAlign: 'center', headerName: 'Cracks (High)', editable: true },
    { field: 'mrav', headerAlign: 'center', headerName: 'Ravelling(Medium)',  editable: true },
    { field: 'hrav', headerAlign: 'center', headerName: 'Ravelling(High)',  editable: true },
    { field: 'lpot', headerAlign: 'center', headerName: 'Potholes(Low)',  editable: true },
    { field: 'mpot', headerAlign: 'center', headerName: 'Potholes(Medium)',  editable: true },
    { field: 'hpot', headerAlign: 'center', headerName: 'Potholes(High)',  editable: true },
    { field: 'ledge', headerAlign: 'center',headerName: 'edge(Low)', editable: true },
    { field: 'medge', headerAlign: 'center',headerName: 'edge(Medium)', editable: true },
    { field: 'hedge', headerAlign: 'center',headerName: 'edge(High)', editable: true },
    { field: 'lpatch', headerAlign: 'center', width:150, headerName: 'Patch work(Low)', editable: true },
    { field: 'mpatch', headerAlign: 'center', width:150, headerName: 'Patch work(Medium)', editable: true },
    { field: 'hpatch', headerAlign: 'center', width:150, headerName: 'Patch work(High)', editable: true },
    { field: 'ldep', headerAlign: 'center', headerName: 'Depresssion(Low)', editable: true },
    { field: 'mdep', headerAlign: 'center', headerName: 'Depression(Medium)', editable: true },
    { field: 'hdep', headerAlign: 'center', headerName: 'Depression(High)', editable: true },
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
      <Stack direction="row" style={{justifyContent:"space-between"}}>
      <TextField
          required
          label="Place Name"
          value={place}
          onChange={handlePlaceChange}
        />
      <Button onClick={handleOpen}  variant="contained">
        Add Record
      </Button>
      <AstmDetails count={count} setCount={setCount} open={open} setOpen={setOpen} setRows={setRows}/>
      </Stack>
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
    <Stack direction="row" spacing={3}>
      {!result && <Button onClick={handleSubmit} variant='contained'>
        Submit
      </Button>}
      {result && <Button onClick={handleResult} variant='contained'>
        Result
      </Button>}
      {result && <AstmResult open={rOpen} result={result} setOpen={setROpen} />}
      <Button onClick={handleReset} variant='contained'>
        Reset
      </Button>
    </Stack>
    </>
  );
}

