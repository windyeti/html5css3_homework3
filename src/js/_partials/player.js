var player = (function() {

var video = document.getElementById('video');
var playStop = document.getElementById('playStop');
var timer;

	return {
		init : function() {
			playStop.onclick = function() {
			var self = this;

			function changeOpacity(any) {
				console.log(any);
				any.style.opacity = '0';
			}
			video.play();
			self.style.backgroundImage = 'url(../images/iconStop.svg)';
			timer = setTimeout(function(){
					changeOpacity(self)
				}, 1000);
			};
			video.onended = function() {
				playStop.style.backgroundImage = '';
				timer = null;
				playStop.style.opacity = '';
			};
		}
	}
})();

document.getElementById('video') && player.init();