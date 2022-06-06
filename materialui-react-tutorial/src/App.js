import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ButtonGroup>
          <Button
          startIcon={<SaveIcon />}
          onClick={() => {
            alert("Save Clicked");
          }}
          size='large'
          variant='contained'
          color='primary'
          style={{ fontSize: 20 }}
          >
          Save
          </Button>
          <Button
          startIcon={<DeleteIcon />}
          onClick={() => {
            alert("Discard Clicked");
          }}
          size='large'
          variant='contained'
          color='secondary'
          style={{ fontSize: 20 }}
          >
          Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
