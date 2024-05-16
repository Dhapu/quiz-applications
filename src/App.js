import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Question from './pages/Question';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './pages/Result';

function App() {
  const[name, setName] = useState();
  const[questions,setQuestions] = useState();
  const[score, setScore] = useState(0);

  
  
  const getQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
console.log("===============",data.results)
    setQuestions(data.results);
    
  };
  
  
  return (
    <div className="App">
  
    
      <Header/>
      
      <Routes>
        <Route path='/' element={<Mainpage name={name}
              setName={setName}
              getQuestions={getQuestions}
              
            />}/>
        <Route path='/quiz' element={<Question name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              />}/>
              <Route path='/result' element={<Result name={name} score={score} />}/>
      </Routes>
 
   
    </div>
   
  );
}

export default App;
