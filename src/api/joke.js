
export const getAllfunIdea = async() =>{

    const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=1000");
    return await response.json();
}

