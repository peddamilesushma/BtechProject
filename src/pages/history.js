import { useState } from 'react';
import * as React from 'react';
import { useRecoilValue } from "recoil";
import { resultData } from 'src/store';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton  } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


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
    const columns = [
        { field: 'sChainage', headerAlign: 'center', width:150, headerName: 'Start Chainage',type: 'number' },
        { field: 'eChainage', headerAlign: 'center', width:150, headerName: 'End Chainage', type: 'number' },
        { field: 'cracks', headerAlign: 'center', headerName: 'Cracks (%)' },
        { field: 'rav', headerAlign: 'center', headerName: 'Ravelling (%)'},
        { field: 'pot', headerAlign: 'center', headerName: 'Potholes (%)'},
        { field: 'shov', headerAlign: 'center',headerName: 'Shoving (%)' },
        { field: 'patch', headerAlign: 'center', width:150, headerName: 'Patch work (%)'},
        { field: 'dep', headerAlign: 'center', headerName: 'Cracks (%)' },
        { field: 'rut', headerAlign: 'center', headerName: 'Rut depth (%)', editable: true },
        { field: 'shoulder', headerAlign: 'center', width:150, headerName: 'Shoulder condition'},
        { field: 'remarks', headerAlign: 'center', headerName: 'Remarks' },
        { field: 'pcrValue', headerAlign: 'center', headerName: 'Pcr Value' },
        { field: 'condition', headerAlign: 'center', headerName: 'Condition'},
    ]
    return(<Card style={{ padding:30, width: '100%' }}>
            {datas.length ==0 ? <Typography>No Record Found</Typography>:
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
    )
}