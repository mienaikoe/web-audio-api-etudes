/* Web Audio API - Experiment 3
 * 
 * This experiment shows how to use an OscillatorNode to modulate an AudioParam on a Filter.
 * - Create an AudioContext
 * - Create a sound Oscillator
 * - Create a BiquadFilter
 * - Set the BiquadFilter Frequency to a middletone frequency like 300 Hz
 * - Create an LF Oscillator
 * - Set the frequency on the LF Oscillator to 3Hz and start it
 * - Create a Multiplier Gain Node.
 * - Connect the LFO to the detune AudioParam on the Biquad Filter
 * - connect the main sound pathways
 * - Start the sound oscillator
 * 
 */

var ctx = new AudioContext();

var soundOscillator = ctx.createOscillator();

var filter = ctx.createBiquadFilter();
filter.frequency.value = 300;

var lfo = ctx.createOscillator();
lfo.frequency.value = 3;
lfo.start(0);

var lfoMultiplier = ctx.createGain();
lfoMultiplier.gain.value = 1000;

lfo.connect(lfoMultiplier); 
lfoMultiplier.connect(filter.detune); // This is where the lfo is connected to the detune AudioParam

soundOscillator.connect(filter);
filter.connect(ctx.destination);

soundOscillator.start(0);