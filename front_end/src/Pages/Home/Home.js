import React, { useState } from 'react'
import { TextField ,Button ,MenuItem } from "@material-ui/core";
import './Home.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from "react-router";
import Categories from '../../Data/Categories';

const Home = ({name,setName,fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handlesubmit =()=> {
    if (!category || !name) {
      setError(true);
      return;
    } 
    else {
      setError(false);
      fetchQuestions(category);
      navigate("/quiz");}
  };
  return (
    <div className='content'>
      <div className='settings'>
      <div style={{fontSize: 50}}>
        quiz setter
      </div>
      <div className='settings_select'>
      {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
        <div style={{marginBottom: 45}}>
      <TextField label="enter the name" variant='outlined' onChange={(e) => setName(e.target.value)}/>
      </div>
      <div style={{marginBottom: 40}}>
      <TextField 
      select
            label="Select Category"
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined">
             {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
            </TextField>
            </div>
      <Button variant='contained' color='primary' size='large' onClick={handlesubmit}>
       submit
      </Button>
      </div>

      </div>
      <img src='/undraw_questions_re_1fy7.svg' className='banner' alt="quizimage"/>
    </div>
  )
}

export default Home