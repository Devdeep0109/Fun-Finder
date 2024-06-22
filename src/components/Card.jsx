
const Card = (props) => {
  return (
    <div className="main-container">
      <h1>{props.category}</h1>
      <p>{props.setup}</p>
      <p> {props.body}</p>
    </div>
  )
}

export default Card;
