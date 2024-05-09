

const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysChekbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
 audio = new Audio("tunes/a.wav");
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key parssed
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked element
    clickedKey.classList.add("active");
    setTimeout(()=>{ // remove active class after 150 ms form the clicked element
        clickedKey.classList.remove("active") 
    },150)
    console.log(allKeys)

}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key); // adding data-key value to the AllKey array
    key.addEventListener('click',()=> playTune(key.dataset.key))
})
const handleVolume = (e) =>{
  audio.volume = e.target.value;
}
const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const  pressdKey = (e) =>{
    if(allKeys.includes(e.key)) playTune =(e.key);
}

keysChekbox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener("input",handleVolume)
document.addEventListener("keydown", pressdKey)