var swMusic = 1;
		var audio = $('audio#audio');
		$('div#music-logo').click(function() {
			if (swMusic == 1) {
				$('div#music-logo').css('background', 'url(images/audio-off.png) no-repeat');
				swMusic = 0;
				audio.prop("muted",1);
			} else {
				$('div#music-logo').css('background', 'url(images/audio-on.png) no-repeat');
				swMusic = 1;
				audio.prop("muted",0);
			}
		});