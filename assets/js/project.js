//attach a click listener to a play button
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

function generateSound() {

  //create a synth and connect it to the main output (your speakers)
  //const synth1 = new Tone.Synth().toDestination();
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now()
  
  //play a middle 'C' for the duration of an 8th note
  //synth1.triggerAttackRelease("C4", "8n");
  synth.triggerAttack("D4", now);
  synth.triggerAttack("F4", now + 0.5);
  synth.triggerAttack("A4", now + 1);
  synth.triggerAttack("C5", now + 1.5);
  synth.triggerAttack("E5", now + 2);
  synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
}
