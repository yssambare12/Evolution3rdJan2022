import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { Showing } from './components/showrecipe';
function App() {
  return (
    <div className="App">
      <h1>Receipe Book</h1>
      <div className='griding'>
      <div className='left_form'> 
      <h3>Enter reciepe details</h3>
      <Form className="lef"/></div>
      <div><Showing/></div>
      </div>
     
    </div>
  );
}

export default App;