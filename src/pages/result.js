import { DialogActions } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Button from 'src/theme/overrides/Button';

export default function Result(props){
    const data = props.data;
    const type = props.type;
    const result = props.result;
    const setOpen=props.setOpen;
    const open=props.open;
    const rows = []
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
        if(condition) {rows.push(
            {
                sChainage: data[i].sChainage,
                eChainage: data[i].eChainage,
                pcrValue: result[i],
                condition: condition,
                shoulder: data[i].shoulder,
                remarks: data[i].remarks
            }
        )}
        console.log(rows)
    }
    const columns =[
        { field: 'sChainage', headerAlign: 'center', headerName: 'Start Chainage'},
        { field: 'eChainage', headerAlign: 'center', headerName: 'End chainage'},
        { field: 'pcrValue', headerAlign: 'center', headerName: 'PCR Value'},
        { field: 'condition', headerAlign: 'center',headerName: 'Pavement Condition'},
        { field: 'shoulder', headerAlign: 'center', width:150, headerName: 'Shoulder condition'},
        { field: 'remarks', headerAlign: 'center', headerName: 'Remarks'},
    ]
    return(
        columns && rows &&  (rows.length==data.length) && <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}>
            <DialogContent>
                <DataGrid rows={rows} columns={columns} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}