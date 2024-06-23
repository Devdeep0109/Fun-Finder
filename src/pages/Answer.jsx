import { useSearchParams } from "react-router-dom";
import "./Answer.css";

const Answer = () => {

  const [params] = useSearchParams(); 
  console.log(params.get("url")); 
  return (
    <div className="answer-container">
      <h1>{params.get("url")}</h1>
    </div>
  )
}

export default Answer;
