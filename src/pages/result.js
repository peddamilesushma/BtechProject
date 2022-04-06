import { DialogActions } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRecoilValue,useRecoilState } from "recoil";
import { tableData,typeData,placeData,resultData } from 'src/store';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Result(props){
    const data = useRecoilValue(tableData);
    const type = useRecoilValue(typeData);
    const place = useRecoilValue(placeData);
    const [totalResult,setTotalResult] = useRecoilState(resultData)
    const result = props.result;
    const setOpen=props.setOpen;
    const open=props.open;
    const rows = []
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    console.log(props)
    function handleClose(){
        setOpen(false)
    }
    for(let i=0; i< data.length; i++){
        console.log("result",result)
        var condition;
        if(result[i] < 1.1) condition = "Poor";
        else if(result[i] >= 1.1 && result[i] <=2.1) condition = "Fair";
        else condition = "Good";
        if(condition) {
            rows.push(
            {
                sChainage:data[i].sChainage,
                eChainage:data[i].eChainage,
                type:type,
                place:place,
                pcrValue:result[i],
                condition:condition,
                shoulder:data[i].shoulder,
                remarks:data[i].remarks
            }
        )}
    }
    const columns =[
        { id: 'sChainage', label: 'Start Chainage'},
        { id: 'eChainage', label: 'End chainage'},
        {id: 'type', label:"Type of road"},
        {id: 'place', label:"place Name"},
        { id: 'pcrValue', label: 'PCR Value'},
        { id: 'condition',label: 'Pavement Condition'},
        { id: 'shoulder', label: 'Shoulder condition'},
        { id: 'remarks', label: 'Remarks'},
    ]
    return(
        columns && rows.length>0 &&  (rows.length==data.length) && 
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}>
            <DialogTitle><Typography align="center" component="div" variant="h3">Result</Typography></DialogTitle>
            <DialogContent>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                <TableRow>
                    <TableCell>Start Chainage</TableCell>
                    <TableCell align="right">End chainage</TableCell>
                    <TableCell align="right">Type of Road</TableCell>
                    <TableCell align="right">Place Name</TableCell>
                    <TableCell align="right">PCR Value</TableCell>
                    <TableCell align="right">Pavement Condition</TableCell>
                    <TableCell align="right">Shoulder condition</TableCell>
                    <TableCell align="right">Remarks</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row,index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.sChainage}
                    </TableCell>
                    <TableCell align="right">{row.eChainage}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.place}</TableCell>
                    <TableCell align="right">{row.pcrValue}</TableCell>
                    <TableCell align="right">{row.condition}</TableCell>
                    <TableCell align="right">{row.shoulder}</TableCell>
                    <TableCell align="right">{row.remarks}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}