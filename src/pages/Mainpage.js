import React, { useState, useEffect } from "react";
import { TextField , MenuItem, Button} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Categories from "../data/Categories";
import ErrorMessage from "../components/ErrorMessage";

const Mainpage = ({name, setName, getQuestions}) => {
    const [category, setCategory] = useState([]);
    const [difficulty,setDifficulty] = useState("");
    const [error, setError] = useState(false);

    

    const navigate = useNavigate();
    const handleSubmit = async () => {
      if (!category || !difficulty || !name) {
        setError(true);
        return;
      } else {
        setError(false);
       await  getQuestions(category,difficulty);
      
        navigate("/quiz");
      }
    };

    
    /*useEffect(() => {
	    const apiUrl = `https://opentdb.com/api_category.php`;
	
	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
	        setCategory(response.trivia_categories);
	      });
	  }, [setCategory]);*/
    return (
        <div className="main-container"> 
        <div className="container">
        
            <span style={{fontSize:30}}> Let's play a Quiz</span>
            <div className="select-category">
              {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                <TextField style={{marginBottom:25}} label="Enter Your Name" variant="outlined"
                 onChange={(e) => setName(e.target.value)}/>
                <TextField select 
                label="Select Quiz Category" variant="outlined"   
                style={{marginBottom:25}} 
                onChange={(e) => setCategory(e.target.value)}>
                {Categories.map((option) => (
            <MenuItem key={option.category} value={option.value}>
              {option.category}
            </MenuItem>
          ))}
               
                </TextField>
                <TextField
            select
            label="Select Difficulty-level"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start 
          </Button>

       
            </div>
        </div>

        </div>

    );

}
export default Mainpage;