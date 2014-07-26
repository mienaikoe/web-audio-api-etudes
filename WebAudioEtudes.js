var WebAudioEtudes = {
	randomVibraphoneSample: function(){
		var index = Math.floor(WebAudioEtudes.VIBE_SAMPLE_URLS.length * Math.random());
		return WebAudioEtudes.VIBE_SAMPLE_URLS[index];
	}
};

WebAudioEtudes.VIBE_SAMPLE_URLS = [
	"https://api.soundcloud.com/tracks/160381437/download?client_id=b45b1aa10f1ac2941910a7f0d10f8e28&oauth_token=1-16343-1542396-934ec26229cd36d4",
	"https://api.soundcloud.com/tracks/160381438/download?client_id=b45b1aa10f1ac2941910a7f0d10f8e28&oauth_token=1-16343-1542396-934ec26229cd36d4",
	"https://api.soundcloud.com/tracks/160381440/download?client_id=b45b1aa10f1ac2941910a7f0d10f8e28&oauth_token=1-16343-1542396-934ec26229cd36d4",
	"https://api.soundcloud.com/tracks/160381441/download?client_id=b45b1aa10f1ac2941910a7f0d10f8e28&oauth_token=1-16343-1542396-934ec26229cd36d4",
];