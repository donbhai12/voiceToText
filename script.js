let button = document.querySelector(".btn");
let textInput = document.querySelector(".input");
button.addEventListener("click",()=>{
    let speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const rec = new SpeechRecognition();
    rec.interimResult = true;

    rec.addEventListener("result",(e)=>{
        const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript);
        textInput.innerHTML = transcript;
    })
    if(speech == true){
        rec.start();
    }
})