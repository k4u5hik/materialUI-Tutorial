import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from "@material-ui/icons/Delete";
// import { Checkbox } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    }
})

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return (
    <Button variant='contained' className={classes.root}>
      Custom Styled Button
    </Button>
  );
}

function CheckboxExample ( ) {
  const [checked, setChecked] = React.useState(true);
return (
  <FormControlLabel
    control={<Checkbox
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    icon={<DeleteIcon />}
    checkedIcon={<SaveIcon/>}
    color='primary'
    value='checkedA'
    inputProps={{
      "aria-label": "primary checkbox",
    }}
    />}
    label='Testing Checkbox'
    />
);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <header className='App-header'>
        <ButtonStyled />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color='secondary' type='email' label='The Email' placeholder='test@test.com'/>
        <CheckboxExample />
        <ButtonGroup
          variant='contained'
          size='large'
          color='primary'
          style={{ fontSize: 20 }}
          >
          <Button
            startIcon={<SaveIcon />}
            onClick={() => {
              alert("Save Clicked");
            }}
            >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => {
              alert("Discard Clicked");
            }}
            color='secondary'
            >
            Discard
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
          >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
