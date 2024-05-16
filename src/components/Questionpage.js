import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { useEffect, useState } from "react";
import "./Questionpage.css";
import { Button } from "@mui/material";

const Questionpage = ({
    presentQues,
    setPresentQues,
    questions,
    option,
    correct,
    setScore,
    score,
    setQuestions,
    
  }) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
const [color,setColor] = useState();
    const [secondsLeft,setSecondsLeft] = useState(5);
    const [timerActive,setTimerActive] = useState(true);
    const [inter,setInter]=useState()
    
    useEffect(() => {
      
      let interval;
  
      if (timerActive && secondsLeft > 0) {
        interval = setInterval(() => {
          console.log("hereeeeeeee")

          setSecondsLeft((prevSeconds) => prevSeconds - 1);
        }, 1000);
        setInter(interval)
      } else if (timerActive && secondsLeft === 0 ) {
        
        handleNext();
      }
  
      return () => clearInterval(interval);
    }, [secondsLeft, timerActive]);
    useEffect(() => {
      
      setSecondsLeft(5); 
      setTimerActive(true); 
    }, [presentQues]);
 
 
    

   const handleSelect = (i) => {
      if (selected === i && selected === correct) return "select";
      else if (selected === i && selected !== correct) return "wrong";
      else if (i === correct)  return "select";
    };
  
    const handleCheck = (i) => {
      setSelected(i);
      if (i === correct) setScore(score + 1);
      setError(false);
      setSecondsLeft(1)
      // handleNext()
      // setSelected();
      //setTimerActive(false);
      
  
    };
    const handleNext = () => {
      if (presentQues > 8) {
        navigate("/result");
      } 
      else if(selected){
        setPresentQues(presentQues + 1);
        setTimerActive(false); 
        setSelected();
        clearInterval(inter)
      }
      else {
        setPresentQues(presentQues + 1);
        setTimerActive(false); 
        //setSelected();
        clearInterval(inter)
      }
    };
  
    const handleQuit = () => {
      setPresentQues(0);
      setQuestions();
    };
  
    
    return (
      <div className="question">
        <h1>Question {presentQues + 1} :</h1>
        {/*<Button onClick={handleStartTimer}>Set Timer</Button>*/}
        <span className="timer">Time remaining : {secondsLeft}</span>
        <div className="singleQuestion">
        <h2>{questions[presentQues]?.question}</h2>
        <div className="options">
        {error && <ErrorMessage>{error}</ErrorMessage>}
          {option &&
            option.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {presentQues > 8 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
        
      </div>
    );
  };
  
  export default Questionpage;