import { Button } from "@mui/material";
import React , {  useEffect }from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!name) {
        navigate("/");
      }
    }, [name, navigate]);
  
    return (
      <div className="result">
        <h2 className="title-new">Final Score : {score}/10</h2>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20, marginBottom:20 }}
          href="/"
        >
          Go to homepage
        </Button>
        <div className="feedback-new">
            <span className="feedback">Feedback</span>
     </div>
     <div>{
        score>5 ? (
            <p className="review">Good!</p>
        ) : (
            <p className="review">Oops Poor! </p>
        )
     }</div>
      </div>
      
    );
  };
  
  
export default Result;