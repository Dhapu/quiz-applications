import React, { useEffect, useState } from "react";
import Questionpage from "../components/Questionpage";
import { Button, CircularProgress } from "@mui/material";
import "./Question.css";


const Question = ({name, questions, score, setScore, setQuestions}) => {
    const [option, setOption] = useState();
    const [presentQues, setPresentQues] = useState(0);
  
    

    useEffect(() => {
        console.log(questions);
        //console.log(questions[presentQues].question);
        setOption(questions && handleShuffle([questions[presentQues]?.correct_answer,
            ...questions[presentQues]?.incorrect_answers])
            );
    },[presentQues,questions]);
    
    console.log(option);
    const handleShuffle = (options) => {
        return options.sort(() => Math.random()-0.5);
    }
    console.log("-----------",questions);
      
    return (

    <div className="Question">
        <span className="subtitle">Welcome, {name}</span>
        
        
        
        {questions ? (
        <>
          <div className="quizInfo">
         
          <span>{questions[presentQues]?.category}</span>
          
            <span>
              
              Score : {score}/10
            </span>
          </div>
          <Questionpage
           presentQues={presentQues}
           setPresentQues={setPresentQues}
           questions={questions}
           option={option}
           correct={questions[presentQues]?.correct_answer}
           score={score}
           setScore={setScore}
           setQuestions={setQuestions}
           
          />
          
        </>
      ) : (
       <CircularProgress    
       style={{ margin: 100 }}
       color="inherit"
       size={150}
       thickness={1}/>
      )}
          

    </div>
    );


        




}
export default Question;