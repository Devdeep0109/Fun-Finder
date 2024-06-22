import  { useEffect, useState} from 'react';
import {getAllfunIdea} from "../api/joke";
import Card from "../components/Card"

const Home = () => {
    
    const [jokes , setJokes] = useState();


    //use effect to load jokes.....
    useEffect( () =>{
        getAllfunIdea().then( (jokes) => setJokes(jokes.jokes) );
    },[])
    console.log(jokes);

  return (
    <div>
      <div><input type="search" placeholder='enetr the category like dark ,programming....'/></div>
      {
        !jokes ? <p>no jokes available</p> : 
        <>
        {jokes.map((item) => 
        (<Card key={item.id} category={item.category}  setup={item.setup} body ={item.delivery}   /> ) )}
        </>
      }
    </div>
  )
}

export default Home;
