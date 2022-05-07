import { useState } from 'react';
import * as React from 'react';
import { useRecoilValue } from "recoil";
import { resultData, astmResultData } from 'src/store';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton  } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CardContent from '@mui/material/CardContent';

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
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
export default function History(){
    const datas = useRecoilValue(resultData)
    const [expanded, setExpanded] = React.useState(0);
    const handleChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };
    const datas1 = useRecoilValue(astmResultData)
    const [expanded1, setExpanded1] = React.useState(0);
    const handleChange1 = (panel) => (event, newExpanded) => {
            setExpanded1(newExpanded ? panel : false);
        };
    const columns = [
        { field: 'sChainage', headerAlign: 'center', width:150, headerName: 'Start Chainage',type: 'number' },
        { field: 'eChainage', headerAlign: 'center', width:150, headerName: 'End Chainage', type: 'number' },
        { field: 'cracks', headerAlign: 'center', headerName: 'Cracks (%)' },
        { field: 'rav', headerAlign: 'center', headerName: 'Ravelling (%)'},
        { field: 'pot', headerAlign: 'center', headerName: 'Potholes (%)'},
        { field: 'shov', headerAlign: 'center',headerName: 'Shoving (%)' },
        { field: 'patch', headerAlign: 'center', width:150, headerName: 'Patch work (%)'},
        { field: 'dep', headerAlign: 'center', headerName: 'Depression (%)' },
        { field: 'rut', headerAlign: 'center', headerName: 'Rut depth (%)', editable: true },
        { field: 'shoulder', headerAlign: 'center', width:150, headerName: 'Shoulder condition'},
        { field: 'remarks', headerAlign: 'center', headerName: 'Remarks' },
        { field: 'pcrValue', headerAlign: 'center', headerName: 'Pcr Value' },
        { field: 'condition', headerAlign: 'center', headerName: 'Condition'},
    ]
    const columns1 = [
      { field: 'sChainage', headerAlign: 'center', width:150, headerName: 'Start Chainage',type: 'number', editable: true },
    { field: 'eChainage', headerAlign: 'center', width:150, headerName: 'End Chainage', type: 'number', editable: true },
    { field: 'lcracks', headerAlign: 'center', headerName: 'Low severity Cracks', editable: true },
    { field: 'mcracks', headerAlign: 'center', headerName: 'Medium severity Cracks', editable: true },
    { field: 'hcracks', headerAlign: 'center', headerName: 'High severity Cracks', editable: true },
    { field: 'mrav', headerAlign: 'center', headerName: 'Medium severity Ravelling',  editable: true },
    { field: 'hrav', headerAlign: 'center', headerName: 'High severity Ravelling',  editable: true },
    { field: 'lpot', headerAlign: 'center', headerName: 'Low severity Potholes',  editable: true },
    { field: 'mpot', headerAlign: 'center', headerName: 'Medium severity Potholes',  editable: true },
    { field: 'hpot', headerAlign: 'center', headerName: 'High severity Potholes',  editable: true },
    { field: 'ledge', headerAlign: 'center',headerName: 'Low severity edge', editable: true },
    { field: 'medge', headerAlign: 'center',headerName: 'Medium severity edge', editable: true },
    { field: 'hedge', headerAlign: 'center',headerName: 'High severity edge', editable: true },
    { field: 'lpatch', headerAlign: 'center', width:150, headerName: 'Low severity Patch work', editable: true },
    { field: 'mpatch', headerAlign: 'center', width:150, headerName: 'Medium severity Patch work', editable: true },
    { field: 'hpatch', headerAlign: 'center', width:150, headerName: 'High severity Patch work', editable: true },
    { field: 'ldep', headerAlign: 'center', headerName: 'Low severity Depresssion', editable: true },
    { field: 'mdep', headerAlign: 'center', headerName: 'Medium severity Depression', editable: true },
    { field: 'hdep', headerAlign: 'center', headerName: 'High severity Depression', editable: true },
    { field: 'shoulder', headerAlign: 'center', width:150, headerName: 'Shoulder condition', editable: true },
    { field: 'remarks', headerAlign: 'center', headerName: 'Remarks', editable: true },
  ]
    return(
        <>
          <Card style={{ padding:30, width: '100%' }}>
            <CardContent>
              <Typography color='primary' gutterBottom variant="h5" component="div">
                PCR through IRC
              </Typography>
            </CardContent>
            {datas.length ==0 ? <Typography style={{ paddingLeft:"40%"}}>No Record Found</Typography>:
            datas.map((main,index)=>(
                <Accordion key={index}  expanded={expanded === index} onChange={handleChange(index)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>{main.type} road in {main.place}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{height:400}}>
                <DataGrid
                    sx={{padding:2}}
                    rows={main.data}
                    columns={columns}
                    components={{
                    Toolbar: CustomToolbar,
                    }}
                    getRowId={(row) => row.id}
                />
                </AccordionDetails>
                </Accordion>
            ))}
          </Card>
          <br />
          <Card style={{ padding:30, width: '100%' }}>
            <CardContent>
              <Typography color='primary' gutterBottom variant="h5" component="div">
                PCR through ASTM
              </Typography>
            </CardContent>
            {datas1.length ==0 ? <Typography style={{ paddingLeft:"40%"}}>No Record Found</Typography>:
            datas1.map((main,index)=>(
                <Accordion key={index}  expanded={expanded1 === index} onChange={handleChange1(index)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Road in {main.place}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{height:400}}>
                <DataGrid
                    sx={{padding:2}}
                    rows={main.data}
                    columns={columns1}
                    components={{
                    Toolbar: CustomToolbar,
                    }}
                    getRowId={(row) => row.id}
                />
                </AccordionDetails>
                </Accordion>
            ))}
          </Card>
        </>
    )
}