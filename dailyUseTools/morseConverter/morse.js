
var converter = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
  ' ': ' ',
  '\n': ' ',
  '\t': ' '
}

    function morseConv(value) { 
    //  console.log(value);
      var output = '';
      for (var i = 0; i < value.length; i++) {
        if(converter[value.charAt(i)]==' ')
          output += '\\';
        else{
          output += converter[value.charAt(i).toLowerCase()];
        
          output += ' ';
        }
      }
        document.getElementById("morse").innerHTML = output;
      }

    function play(){
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      var ctx = new AudioContext();
      var dot = 1.2 / 15;
      var t = ctx.currentTime;

      var oscillator = ctx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = 600;

      var gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0, t);

      document.getElementById("morse").innerHTML.split("").forEach(function(letter) {
          switch(letter) {
              case ".":

                  gainNode.gain.setValueAtTime(1, t);
                  t += dot;
                  gainNode.gain.setValueAtTime(0, t);
                  t += dot;
                  break;
              case "-":
                  gainNode.gain.setValueAtTime(1, t);
                  t += 3 * dot;
                  gainNode.gain.setValueAtTime(0, t);
                  t += dot;
                  break;
              case "\\":
                  t += 7 * dot;
                  break;
              case " ":
                  t += 3 * dot;
          }
      });

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start();

      return false;
    }