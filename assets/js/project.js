var MonoSynth = require("Tone").MonoSynth;
var synth = new MonoSynth();

function generateSound() {
  alert("Someday we will make a noise!");
  
  //create a synth and connect it to the main output (your speakers)
  const synth1 = new Tone.Synth().toDestination();
  
  //play a middle 'C' for the duration of an 8th note
  synth1.triggerAttackRelease("C4", "8n");
}
