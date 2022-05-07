import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRecoilState } from "recoil";
import {astmTableData} from "../store"
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AstmDetails(props){
    const [add,setAdd] = useState(false);
    const [rows,setRows] = useRecoilState(astmTableData)
    const count = props.count;
    const setCount = props.setCount;
    const setOpen=props.setOpen;
    const open=props.open;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClose = () => {
        setAdd(false);
        setOpen(false);
      };
    const formik = useFormik({
        initialValues: {
            sChainage:0,
            eChainage:0,
            lcracks:'0',
            mcracks:'0',
            hcracks:'0',
            mrav:'0',
            hrav:'0',
            lpot:'0',
            mpot:'0',
            hpot:'0',
            ledge:'0',
            medge:'0',
            hedge:'0',
            lpatch:'0',
            mpatch:'0',
            hpatch:'0',
            ldep:'0',
            mdep:'0',
            hdep:'0',
            shoulder:"",
            remarks:"",
        },
        validationSchema: Yup.object({
        sChainage: Yup
            .number()
            .required(
              'Start Chainage is required'),
          eChainage: Yup
            .number()
            .required(
                'end Chainage is required'),
          lcracks: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            mcracks: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            hcracks: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            mrav: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            hrav: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
          lpot: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            mpot: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            hpot: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
          ledge : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            medge : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            hedge : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
        lpatch : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            mpatch : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            hpatch : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
        ldep : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            mdep : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
            hdep : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
        shoulder : Yup
            .string()
            .max(255),
        remarks : Yup
            .string()
            .max(255),
        }),
        onSubmit: (values)=>{
        setAdd(true)
        const num = count+1
        setCount(count+1)
        const row={
            id: num,
            sChainage:values.sChainage,
            eChainage:values.eChainage,
            lcracks:values.lcracks,
            mcracks:values.mcracks,
            hcracks:values.hcracks,
            mrav:values.mrav,
            hrav:values.hrav,
            lpot:values.lpot,
            mpot:values.mpot,
            hpot:values.hpot,
            ledge:values.ledge,
            medge:values.medge,
            hedge:values.hedge,
            lpatch:values.lpatch,
            mpatch:values.mpatch,
            hpatch:values.hpatch,
            ldep:values.ldep,
            mdep:values.mdep,
            hdep:values.hdep,
            shoulder:values.shoulder,
            remarks:values.remarks,
        }
        console.log(rows)
        setRows((rows) => [...rows,row])
        }
      });
  
    return(
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
            <DialogTitle><Typography align="center" component="div" variant="h3">Details</Typography></DialogTitle>
            <form onSubmit={formik.handleSubmit}>
            <DialogContent>
                <Grid sx={{pb:2}} container spacing={2}>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.sChainage)}
                            helperText={formik.errors.sChainage}
                            value={formik.values.sChainage}
                            onChange={formik.handleChange}
                            name="sChainage"
                            required
                            type="number"
                            label="Start Chainage"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>m</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.eChainage)}
                            helperText={formik.errors.eChainage}
                            value={formik.values.eChainage}
                            onChange={formik.handleChange}
                            name="eChainage"
                            required
                            type="number"
                            label= "End Chainage"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>m</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{pb:2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.lcracks)}
                            helperText={formik.errors.lcracks}
                            value={formik.values.lcracks}
                            onChange={formik.handleChange}
                            name="lcracks"
                            label="Low severity Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.mcracks)}
                            helperText={formik.errors.mcracks}
                            value={formik.values.mcracks}
                            onChange={formik.handleChange}
                            name="mcracks"
                            label="Medium severity Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.hcracks)}
                            helperText={formik.errors.hcracks}
                            value={formik.values.hcracks}
                            onChange={formik.handleChange}
                            name="hcracks"
                            label="High severity Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.mrav)}
                            helperText={formik.errors.mrav}
                            value={formik.values.mrav}
                            onChange={formik.handleChange}
                            name="mrav"
                            label="Medium severity Ravelling"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.hrav)}
                            helperText={formik.errors.hrav}
                            value={formik.values.hrav}
                            onChange={formik.handleChange}
                            name="hrav"
                            label="High Severity Ravelling"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.lpot)}
                            helperText={formik.errors.lpot}
                            value={formik.values.lpot}
                            onChange={formik.handleChange}
                            name="lpot"
                            label="Low severity Potholes"
                            
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.mpot)}
                            helperText={formik.errors.mpot}
                            value={formik.values.mpot}
                            onChange={formik.handleChange}
                            name="mpot"
                            label="Medium Severity Potholes"
                            
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.hpot)}
                            helperText={formik.errors.hpot}
                            value={formik.values.hpot}
                            onChange={formik.handleChange}
                            name="hpot"
                            label="High severity Potholes"
                            
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.ledge)}
                            helperText={formik.errors.ledge}
                            value={formik.values.ledge}
                            onChange={formik.handleChange}
                            name="ledge"
                            label="Low severity Edge Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>m</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.medge)}
                            helperText={formik.errors.medge}
                            value={formik.values.medge}
                            onChange={formik.handleChange}
                            name="medge"
                            label="Medium Severity Edge Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>m</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.hedge)}
                            helperText={formik.errors.hedge}
                            value={formik.values.hedge}
                            onChange={formik.handleChange}
                            name="hedge"
                            label="High Severity Edge Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>m</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.lpatch)}
                            helperText={formik.errors.lpatch}
                            value={formik.values.lpatch}
                            onChange={formik.handleChange}
                            name="lpatch"
                            label="Low severity Patching"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.mpatch)}
                            helperText={formik.errors.mpatch}
                            value={formik.values.mpatch}
                            onChange={formik.handleChange}
                            name="mpatch"
                            label="Medium Severity Patching"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.hpatch)}
                            helperText={formik.errors.hpatch}
                            value={formik.values.hpatch}
                            onChange={formik.handleChange}
                            name="hpatch"
                            label="High Sevrity Patching"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.ldep)}
                            helperText={formik.errors.ldep}
                            value={formik.values.ldep}
                            onChange={formik.handleChange}
                            name="ldep"
                            label="Low severity Depression and settlement"
                            sx={{width:270}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.mdep)}
                            helperText={formik.errors.mdep}
                            value={formik.values.mdep}
                            onChange={formik.handleChange}
                            name="mdep"
                            label="Medium Severity Depression and settlement"
                            sx={{width:270}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.hdep)}
                            helperText={formik.errors.hdep}
                            value={formik.values.hdep}
                            onChange={formik.handleChange}
                            name="hdep"
                            label="High Severity Depression and settlement"
                            sx={{width:270}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><b>&#13217;</b></InputAdornment>,
                              }}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{pb:2}} container spacing={2}>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.shoulder)}
                            helperText={formik.errors.shoulder}
                            value={formik.values.shoulder}
                            onChange={formik.handleChange}
                            name="shoulder"
                            type="text"
                            label="Shoulder condition"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.remarks)}
                            helperText={formik.errors.remarks}
                            value={formik.values.remarks}
                            onChange={formik.handleChange}
                            name="remarks"
                            type="text"
                            multiline
                            label= "Remarks"
                        />
                    </Grid>
                </Grid>
                </DialogContent>
                <DialogActions sx={{justifyContent:"center"}}>
                <Button type='submit' disabled={add} variant="contained" >
                    Save
                </Button>
                <Button type="reset"  onClick={ e => {
                                                    setAdd(false);
                                                     formik.resetForm()}} disabled={!add} variant="contained">
                    Add
                </Button>
                <Button type="reset"  onClick={ e => formik.resetForm()} disabled={add} variant="contained">
                    Reset
                </Button>
                <Button onClick={ e => {
                                        setAdd(false);
                                        setOpen(false);
                                        formik.resetForm()}} variant="contained">
                    Close
                </Button>
                </DialogActions>
                </form>
                </Dialog>
    )

}