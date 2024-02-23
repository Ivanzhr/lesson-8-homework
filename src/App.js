import './App.css';
import CreateFruits from './Fruits';
import CreateNewWork from './NewWork';
import CreteFooter from './Footer';
import arrPic from './Allpic';
import { useState} from 'react';


function App() {

  const [arr, setArr] = useState(arrPic);

  const [jetons, setJetons] = useState(100)

  return (
    <div className='wrepper'>
      <h1>СЛОТ-МАШИНА</h1>
      <CreateFruits fruits={arr}/>
      <CreateNewWork arr = {arr} setArr = {setArr} jetons={jetons} setJetons={setJetons}/>
      <CreteFooter jetons={jetons}/>
    </div>
  );
}

export default App;
