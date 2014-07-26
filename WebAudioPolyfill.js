window.AudioContext = 
		window.AudioContext || 
		window.webkitAudioContext;

if( !window.AudioContext ){
	alert("It looks like your browser doesn't support this application. Please try a more modern Browser.");
}

window.AudioContext.prototype.createGain =
		window.AudioContext.prototype.createGain || 
		window.AudioContext.prototype.createGainNode;



AudioNode.prototype.connectSuper = AudioNode.prototype.connect;
AudioNode.prototype.connect = function(target){
   console.log("Connecting "+this.toString()+" to "+target.toString());
   if( this.forwardConnections ){
	   this.forwardConnections.push(target);
   } else {
	   this.forwardConnections = [target];
   }
   if( target.backwardConnections ){
	   target.backwardConnections.push(this);
   } else {
	   target.backwardConnections = [this];
   }
   AudioNode.prototype.connectSuper.call(this, target);
};



AudioBufferSourceNode.prototype.setBuffer = function(bufferUrl){
	return new Promise( function(good, bad){
		var request = new XMLHttpRequest();
		request.open("GET", bufferUrl, true);
		request.responseType = "arraybuffer";
		request.onload = function() {
			this.context.decodeAudioData( request.response,
				function(buffer) {
					this.buffer = buffer;
					good();
				}.bind(this),
				function() {
					bad("Error decoding Buffer Source wth URL: "+this.bufferUrl);
				}
			);
		}.bind(this);
		try{
			request.send();
		} catch(err) { // Not working...
			console.error(err);
			bad("Error fetching Buffer Source with URL: "+bufferUrl);
		}
	}.bind(this));
};