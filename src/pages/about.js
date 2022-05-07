import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Logo from "./iitpLogo.jpg";
export default function About() {
  return (
    <div justifyContent="center">
      <Typography color="primary" align="center" variant='h2'>About</Typography>
      <Grid container sx={{paddingTop:5,paddingLeft:3}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 2 }}>
          <Grid align="center" item xs={2} sm={4} md={4}>
              <Typography align="center"variant='h5'>This PCR calculatore is based on IRC 82 - 2015 and ASTM D6433-20 guidelines </Typography>
           <br />
           <img width="200" src={Logo} alt="Logo" />
           <Typography align="center"variant='h7'>PCR calculator is developed in Indian Institute Of Technology Patna <br /> by Peddamile Sushma and Dr Sudhir Varma</Typography>
          </Grid>
      </Grid>
    </div>
  );
}
