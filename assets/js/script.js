var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var combinationSpeechObject = {
  f1:['f1','i want','avalon','step one','buffalo','revlon','of war','at 1','1:30'],
  f2:['f2','a poll','app to','have to','i have to','to'],
  f3:['f3','a free','ivory','every','3'],
  f4:['f4','a full','a fall','app for','how far','fo'],
  f5:['f5','i`ve','fbi','afar','at 5'],
  f6:['f6','epic','abscess','6:30'],
  f7:['f7','ff7','of 7','57','7:30','7'],
  f8:['f8','update','8:30'],
  f9:['f9','9:30','if not','59','9']
}

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.start();

recognition.onresult = function(event) {
  const field = event.results[0][0].transcript.toLowerCase();
  console.log('---------------------------')
  console.log('field found: ',field);
  console.log('---------------------------')
  for(const key of Object.keys(combinationSpeechObject)){
      if(combinationSpeechObject[key].indexOf(field) != -1){
        if(endFlag == false){
          setField(key);
        }
        break;
      }
      console.log('Error: key not found.')
  }
}

recognition.onend= function(event){
 /* setTimeout(function(){
    recognition.start();
  }, 300);*/
  recognition.start();
  console.log("Ende")
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  console.log("not found",event);
  //diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  console.log("Error",event.error);
  //diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
