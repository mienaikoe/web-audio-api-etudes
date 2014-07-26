/* Web Audio API - Experiment 2
 * 
 * This experiment shows how to use the GainNode and AudioBufferSourceNode.
 * - Create an AudioContext
 * - Create a GainNode
 * - Dial the Gain value
 * - Create an AudioBufferSourceNode
 * - Connect it all together
 * - Set the buffer
 * - Play the buffer
 */

var ctx = new AudioContext();

var gain = ctx.createGain();
gain.gain.value = 0.5;	// gain value is from 0(mute) to 1(full)

var source = ctx.createBufferSource();

source.connect(gain);
gain.connect(ctx.destination);

source.setBuffer("http://mienaikoe.github.io/web-audio-api-etudes/sounds/Vibe_A3.wav").then(
function(){
	this.start(0);
}, function(error){
	console.error(error);
});