/* Web Audio API - Experiment 2
 * 
 * This experiment shows how to use the GainNode and AudioBufferSourceNode.
 * - Create an AudioContext
 * - Create a GainNode
 * - Dial the Gain value
 * - Create an AudioBufferSourceNode
 * - Connect it all together
 * - Set the buffer
 * - Play the buffer at a random time within 10 seconds
 */

var ctx = new AudioContext();

var gain = ctx.createGain();
gain.gain.value = 0.5;	// gain value is from 0(mute) to 1(full)

var source = ctx.createBufferSource();

source.connect(gain);
gain.connect(ctx.destination);

source.setBuffer(WebAudioEtudes.randomVibraphoneSample()).then(
function(){
	var startTime = ctx.currentTime + (Math.random() * 10);
	source.start(startTime);
}, 
function(error){
	console.error(error);
});