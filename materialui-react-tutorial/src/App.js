import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from "@material-ui/icons/Delete";
// import { Checkbox } from '@material-ui/core';

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
    <div className='App'>
      <header className='App-header'>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color='secondary' type='date' />
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
  );
}

export default App;
