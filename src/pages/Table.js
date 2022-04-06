import * as React from 'react';
import { DataGrid, GridActionsCellItem, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton  } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Details from './Details';
import CalculationRural from "./calculationRural"
import Result from './result';
import { useRecoilState } from "recoil";
import {tableData,typeData,resultData,placeData} from "../store"
import { Stack } from '@mui/material';
import CalculationHighway from './CalculationHighway';
import CalculationUrban from './CalculationUrban';
import MenuItem from '@mui/material/MenuItem';
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
export default function AskConfirmationBeforeSave() {
  const [rows,setRows] = useRecoilState(tableData)
  const [count,setCount] = React.useState(0)
  const [open,setOpen] = React.useState(false)
  const [type,setType] = useRecoilState(typeData)
  const [place,setPlace] = useRecoilState(placeData)
  const [totalResult,setTotalResult] = useRecoilState(resultData)
  const [result,setResult] = React.useState()
  const [rOpen,setROpen] = React.useState(false)
  function handleOpen(){
    setOpen(true)
  }
  const handleReset=() =>{
    setRows([])
    setResult()
    setType("Rural")
    setPlace("place")
  }
  const handlePlaceChange = (event) =>{
    setPlace(event.target.value)
  }
  const handleTypeChange=(event)=>{
    setType(event.target.value)
  }
  const handleResult = () =>{
    setROpen(true)
    var tData=[];
    for(let i=0; i< rows.length; i++){
      var condition;
      if(result[i] < 1.1) condition = "Poor";
      else if(result[i] >= 1.1 && result[i] <=2.1) condition = "Fair";
      else condition = "Good";
      if(condition) {
          tData.push(
              {
                  id:rows[i].id,
                  sChainage:rows[i].sChainage,
                  eChainage:rows[i].eChainage,
                  cracks:rows[i].cracks,
                  rav:rows[i].rav,
                  pot:rows[i].pot,
                  shov:rows[i].shov,
                  patch:rows[i].patch,
                  dep:rows[i].dep,
                  rut:rows[i].rut,
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
            type:type,
            place:place
        }
        setTotalResult((totalResult) => [...totalResult,tResult])
    }
  }
  console.log("totalresult",totalResult)
  const handleSubmit = async() =>{
    if(type=='Rural')setResult(CalculationRural(rows))
    else if(type=='Highway')setResult(CalculationHighway(rows))
    else setResult(CalculationUrban(rows))
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
      <Stack spacing={{ xs:3, sm: 2, md: 4 }} direction={{ xs: 'column', sm: 'row' }} style={{justifyContent:"space-between"}}>
      <TextField
          select
          required
          label="Type of road"
          value={type}
          onChange={handleTypeChange}
          sx={{width:200}}
        >
        <MenuItem  key="Rural" value="Rural">Rural</MenuItem >
        <MenuItem  key="Highway" value="Highway">Highway</MenuItem >
        <MenuItem  key="Urban" value="Urban">Urban</MenuItem>
      </TextField>
      <TextField
          required
          label="Place Name"
          value={place}
          onChange={handlePlaceChange}
        />
      <Button onClick={handleOpen}  variant="contained">
        Add Record
      </Button>
      <Details count={count} setCount={setCount} open={open} setOpen={setOpen} setRows={setRows}/>
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
      {result && <Result open={rOpen} result={result} setOpen={setROpen} />}
      <Button onClick={handleReset} variant='contained'>
        Reset
      </Button>
    </Stack>
    </>
  );
}

