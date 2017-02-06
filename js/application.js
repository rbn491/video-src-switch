function init()
{
	var var_ = false;
	var video_ = document.getElementById('video-file');
	var videoSrc_ = video_.querySelector('source').getAttribute('data-video-src');


	if(!var_)
	{
		video_.querySelector('source').removeAttribute('data-video-src');
		video_.querySelector('source').setAttribute('src', videoSrc_);

		setTimeout(function()
		{
			video_.load();
			video_.play();
		},1500);

		console.log('src attr set');
	}
	else
	{
		console.log('data-video-src attr set');
	}


	// console.log(video_);
	// console.log(videoSrc_);
}

window.onload = init;