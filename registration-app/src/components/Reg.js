import React from "react";
import {TextField, Button, FormControlLabel, Checkbox, Paper, Grid, Avatar} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpIcon from '@mui/icons-material/Help';
import EmailIcon from '@mui/icons-material/Email';
import NumbersIcon from '@mui/icons-material/Numbers';


function Reg(){
        const avatStyle={
            color: "black",
        }
        const gridStyle={
            padding:"50px",
            indent:"100px"
        }
    
    const btnstyle={
        margin: "10px",
        borderRadius: "100%"
    }
    const paperStyle={
        padding: "20px",
    }
    
        
    return(
        <div className = "Reg">
            
            <Grid align="center">
            <Paper Paper elevation={7}style={paperStyle}>
            <Grid align="left">
                <ArrowBackIcon></ArrowBackIcon>
            </Grid>
            <h1>
                Registration
            </h1>
            <TextField label="First Name" placeholder=""></TextField>
            <p></p>
            <TextField label="Last Name" placeholder="" ></TextField>
            <p></p>
            <TextField label="Email Adress" placeholder=""></TextField>
            <p></p>
            <TextField className="number" label="Phone Number" placeholder=""></TextField>
            <p></p>
            <TextField label="Password" placeholder="" type="password"></TextField>
            <p></p>
            <TextField label="Confirm Password" type="password"></TextField>
            <p></p>
            <img src="https://www.newcastlede.gov/ImageRepository/Document?documentID=46217" alt="NCC" width="300" height="200" />
            <br></br>
            <img src="https://th.bing.com/th/id/OIP.u5qmxDb0AksJD2N-qm070wHaDf?w=341&h=165&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="NCC3" width="300" height="200"/>
        
            <img src="https://th.bing.com/th/id/OIP.Ip8HLLLK7WwcEo2qP4f-QgHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="NCC2" width="300" height="200"/>
            <p></p>

            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                >
                Donor
            </Button>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                >
               NCC Staff 
            </Button>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                >
                Case Manager
            </Button>
            <p></p>
            <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
             />}
             label = "Show Password"
             />
             <Button
             type="submit"
            color="inherit"
            variant="contained"
            >
                Next
             </Button>
             </Paper>
             </Grid>
             <Paper Paper elevation={7}style={paperStyle}>
            <Grid align="left'">
            <ArrowBackIcon></ArrowBackIcon>
            </Grid>
            <Grid align= "center">
            <h1>Verification</h1>
            
            <Avatar style={avatStyle}><EmailIcon></EmailIcon></Avatar>
            <h>********</h>
            <Avatar style={avatStyle}><NumbersIcon></NumbersIcon></Avatar>
            <h>********</h>
            <div class="flex-container">
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>  
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>  
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>
            </div>
            <FormControlLabel
            control={
            <Checkbox
            name="Checked"
            color="primary"
             />}
             label = "Show Number"
             />
            <Grid align="right" style={gridStyle}>
            <Button
            type="submit"
            color="inherit"
             variant="contained"
            >
               Next
             </Button>
             <p></p>
             <HelpIcon></HelpIcon>
             </Grid>
             
            </Grid>
            </Paper>

        </div>

    )
    }
export default Reg;


