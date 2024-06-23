import  { useEffect, useState} from 'react';
import {getAllfunIdea} from "../api/joke";
import Card from "../components/Card";
import "./Home.css"

const Home = () => {
    
    const [jokes , setJokes] = useState();
    const [search ,setSearch] = useState("");



    //use effect to load jokes.....
    useEffect( () =>{
        getAllfunIdea().then( (jokes) => setJokes(jokes.jokes) );
    },[])
    console.log(jokes);

  return (
    <div className='home-container'>
      <h1 className='heading'>Lightened your mood with a joke</h1>
      <div className='home-input'><input type="search" placeholder='Search category...'
        value={search} onChange={(e) => setSearch(e.target.value)}
      /></div>
      <div className='home-card'>
      {
        !jokes ? <p>no jokes available</p> : 
        <>
        {jokes.filter((item) => item.category.toLowerCase().includes(search.toLocaleLowerCase())).map(
          (item) => {
          if (!item.setup) return null;
          return (
          <Card 
            key={item.id} 
            category={item.category} 
            setup={item.setup} 
            body={item.delivery} 
          />
          );
        })}

        </>
      }
      </div>
    </div>
  )
}

export default Home;
