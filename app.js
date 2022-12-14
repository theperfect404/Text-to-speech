let btn = document.querySelector(".btn");

btn.onclick = () => {
  let txt = document.querySelector(".input_txt").value;
  let voice = new SpeechSynthesisUtterance(txt);
  voice.lang = "en-GB";
  voice.rate = 0.9;
  voice.volume = 1;
  console.log(voice);
  speechSynthesis.speak(voice);
};
