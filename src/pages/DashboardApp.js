import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const matter=["Calculations which are done using this calculator are based on IRC 82 - 2015 guidelines"]
const heights=[100]
export default function DashboardApp() {
  const navigate = useNavigate();
  function handleClick(){
    navigate({pathname: '/dashboard/user'})
  }
  return (
    <div justifyContent="center">
      <Typography color="primary" align="center" variant='h1'>PCR CALCULATOR</Typography>
      <Grid container sx={{paddingTop:3, justifyContent:"center"}}>
        <Button variant='contained' onClick={handleClick} style={{justifyContent:"center"}}>Start Calculation</Button>
      </Grid>
      <Grid container sx={{paddingTop:5,paddingLeft:3}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 2 }}>
        {heights.map((height, index) => (
          <Grid item key={index} xs={2} sm={4} md={4}>
           <Typography align="center"variant='h5'>{matter[index]}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
