
export const getAllfunIdea = async() =>{

    const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=50");
    return await response.json();
}

