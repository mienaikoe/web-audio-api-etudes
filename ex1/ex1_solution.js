/* Web Audio API - Experiment 1
 * 
 * This experiment is the most basic setup you can have to hear a real sound from the Web Audio API.
 * - Create an AudioContext
 * - Create an Oscillator
 * - Connect the Oscillator to the Context's destination
 * - Start playing the oscillator
 * 
 */


var ctx = new AudioContext(); // Instantiates an AudioContext for the Web Audio API, and starts counting up.

var oscillator = ctx.createOscillator(); // creates a new Audio Node which produces an oscillating signal.

oscillator.connect(ctx.destination); // creates a connection from the oscillating signal generator to the Computer Speakers.

oscillator.start(0); // starts the oscillator immediately.