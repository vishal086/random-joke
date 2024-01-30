//PROMISES
// GET https://icanhazdadjoke.com/

/* Promises */
const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn')




const generateJokes = () =>
{


const setHeader = {
    headers :{
        Accept : "application/json"
    }

}


     let z = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
     
     let p = fetch(z,setHeader);
     p.then((res) =>{
        return res.json();
     }).then((data) =>{
        console.log(data.joke)
        jokes.innerHTML = data.joke;
     })
     .catch((error) =>{
        console.log(error);
     })

}

jokeBtn.addEventListener('click' ,()=>{
    generateJokes();
})






/* Async Await method */


// const generateJokes = async () => {

//     try
//     {
//         const setHeader = {
//             headers: {
//                 Accept : "application/json"
//             }
//         }
      
    
    
//         const res = await fetch('https://icanhazdadjoke.com',setHeader);
    
//         const data = await res.json();
       
//         jokes.innerHTML = data.joke;
//     }catch(err)
//     {
//         console.log(`The error is ${err}`)
//     }
 
// }


// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();  
