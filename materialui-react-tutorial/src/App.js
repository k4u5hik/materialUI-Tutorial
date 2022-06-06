import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

function App() {
  return (
    <div className='App'>
      <header className='App-header'> 
        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          onClick={() => {
            alert("clicked");
          }}
          size='large'
          variant='contained'
          color='secondary'
          style={{ fontSize: 20 }}
        >
          Hello World!
        </Button>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
