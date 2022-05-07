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
import {tableData} from "../store"
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Details(props){
    const [add,setAdd] = useState(false);
    const [rows,setRows] = useRecoilState(tableData)
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
            cracks:'0',
            rav:'0',
            pot:'0',
            shov:'0',
            patch:'0',
            dep:'0',
            rut:'0',
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
          cracks: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
          rav: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
          pot: Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
          shov : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
        patch : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
        dep : Yup
            .string()
            .max(255)
            .min(1,'please reset to zero if the field is not required')
            .test(/[a-z]/,'The password  should not contain lowercase letters',(value)=>{if(!(/[a-z]/.test(value)))return true})
            .test(/[A-Z]/,'The password should not contain uppercase letters',(value)=>{if(!(/[A-Z]/.test(value)))return true})
            .test(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/,"The password should contain special characters except comma(,)",(value)=>{if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(value)))return true}),
        rut : Yup
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
            cracks:values.cracks,
            rav:values.rav,
            pot:values.pot,
            shov:values.shov,
            patch:values.patch,
            dep:values.dep,
            rut:values.rut,
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
                                endAdornment: <InputAdornment position="end">m</InputAdornment>,
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
                                endAdornment: <InputAdornment position="end">m</InputAdornment>,
                              }}
                        />
                    </Grid>
                </Grid>
                <Grid sx={{pb:2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.cracks)}
                            helperText={formik.errors.cracks}
                            value={formik.values.cracks}
                            onChange={formik.handleChange}
                            name="cracks"
                            label="Cracking"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.rav)}
                            helperText={formik.errors.rav}
                            value={formik.values.rav}
                            onChange={formik.handleChange}
                            name="rav"
                            label="Ravelling"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.pot)}
                            helperText={formik.errors.pot}
                            value={formik.values.pot}
                            onChange={formik.handleChange}
                            name="pot"
                            label="Potholes"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.shov)}
                            helperText={formik.errors.shov}
                            value={formik.values.shov}
                            onChange={formik.handleChange}
                            name="shov"
                            label="Shoving"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.patch)}
                            helperText={formik.errors.patch}
                            value={formik.values.patch}
                            onChange={formik.handleChange}
                            name="patch"
                            label="Patching"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.dep)}
                            helperText={formik.errors.dep}
                            value={formik.values.dep}
                            onChange={formik.handleChange}
                            name="dep"
                            label="Depression and settlement"
                            sx={{width:270}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            error={Boolean(formik.errors.rut)}
                            helperText={formik.errors.rut}
                            value={formik.values.rut}
                            onChange={formik.handleChange}
                            name="rut"
                            label="Rut depth"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
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