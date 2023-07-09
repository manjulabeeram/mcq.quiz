import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Quiz/Quiz';
import { useState } from 'react';
import axios from "axios";
function App() {
  const [questions, setQuestions] = useState();
  const [name,setName ] =useState("");
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }$&type=multiple`
    );

    setQuestions(data.results);
  };
return (
  <BrowserRouter>
  <div classname='app' >

<Header/>
<Routes>
  <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
  <Route path='/quiz' element={<Quiz
  name={name}
  questions={questions}
  score={score}
  setScore={setScore}
  setQuestions={setQuestions}
  />} />
  <Route path='/result' element={<Result/>} />
</Routes>
</div>
  </BrowserRouter>
);
}

export default App;
