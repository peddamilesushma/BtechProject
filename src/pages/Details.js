import Page from '../components/Page';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function Details(props){
    const [add,setAdd] = useState(false);
    const [sChainage,setSChainage]=useState(0);
    const [eChainage,setEChainage]=useState(0);
    const [cracks,setCracks]=useState('0');
    const [patch,setPatch]=useState('0');
    const [pot,setPot] = useState('0');
    const [dep,setDep] = useState('0');
    const [rav,setRav] = useState('0');
    const [shov,setShov] = useState('0');
    const [rut, setRut] = useState('0');
    const[shoulder, setShoulder] = useState("");
    const [remarks,setRemarks] = useState("");
    const rows = props.rows;
    const count = props.count;
    const setCount = props.setCount;
    const setOpen=props.setOpen;
    const open=props.open;
    const setRows=props.setRows;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClose = () => {
        setOpen(false);
      };
    function handleAdd(){
        setAdd(false)
    }
    function handleSubmit(){
        setAdd(true)
        const num = count+1
        setCount(count+1)
        const row={
            id: num,
            sChainage:sChainage,
            eChainage:eChainage,
            cracks:cracks,
            rav:rav,
            pot:pot,
            shov:shov,
            patch:patch,
            dep:dep,
            rut:rut,
            shoulder:shoulder,
            remarks:remarks,
        }
        console.log(rows)
        setRows((rows) => [...rows,row])
    }
    return(
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
            <DialogContent>
                <Grid sx={{pb:2}} container spacing={2}>
                    <Grid item sm={6}>
                        <TextField
                            required
                            value= {sChainage}
                            type="number"
                            onChange={(e)=>setSChainage(e.target.value)}
                            label="Start Chainage"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">m</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            type="number"
                            label= "End Chainage"
                            value= {eChainage}
                            onChange={(e)=>setEChainage(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">m</InputAdornment>,
                              }}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{pb:2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Cracking"
                            value= {cracks}
                            onChange={(e)=>setCracks(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Ravelling"
                            value= {rav}
                            onChange={(e)=>setRav(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Potholes"
                            value= {pot}
                            onChange={(e)=>setPot(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Shoving"
                            value= {shov}
                            onChange={(e)=>setShov(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Patching"
                            value= {patch}
                            onChange={(e)=>setPatch(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Depression and settlement"
                            value= {dep}
                            onChange={(e)=>setDep(e.target.value)}
                            sx={{width:270}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            label="Rut depth"
                            value= {rut}
                            onChange={(e)=>setRut(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                              }}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{pb:2}} container spacing={2}>
                    <Grid item sm={6}>
                        <TextField
                            required
                            type="text"
                            label="Shoulder condition"
                            value= {shoulder}
                            onChange={(e)=>setShoulder(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required
                            type="text"
                            value= {remarks}
                            onChange={(e)=>setRemarks(e.target.value)}
                            multiline
                            label= "Remarks"
                        />
                    </Grid>
                </Grid>
                </DialogContent>
                <DialogActions sx={{justifyContent:"center"}}>
                <Button onClick={handleAdd} disabled={!add} variant="contained">
                    Add
                </Button>
                <Button variant="contained">
                    Reset
                </Button>
                <Button type='submit' onClick={handleSubmit} variant="contained" >
                    Save
                </Button>
                </DialogActions>
                </Dialog>
    )

}