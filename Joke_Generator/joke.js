const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage=document.querySelector(".meme-generator img");
const memeTitle=document.querySelector(".meme-generator .meme-title");
const memeAuthor=document.querySelector(".meme-generator .meme-author");


const result=document.querySelector(".result");

const updateDetails = (category,type,delivery) => {
    memeImage.setAttribute("src",category);
    memeTitle.innerHTML = type;
    memeAuthor.innerHTML = delivery;


}
// https://v2.jokeapi.dev/joke/Any
const generateJoke=()=>{
    fetch("https://v2.jokeapi.dev/joke/Any")               
    .then( (response) => response.json())
    .then(data => {
            updateDetails(data.category, data.type, data.delivery)

        });
    

};
generateMemeBtn.addEventListener("click",generateJoke);

result.innerHTML=generateJoke();



