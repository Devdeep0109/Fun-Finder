/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = (props) => {

  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1 className="category">{props.category}</h1>
      <p className="setup">{props.setup}</p>
      <button onClick={e => navigate(`/edit?url=${props.body}`)} >See answer</button>
    </div>
  )
}

export default Card;
