var cups = (function() {
	var itemCups = document.getElementById('cups');
	console.log(itemCups)
	function increment() {
		itemCups.innerHTML = parseInt(itemCups.innerHTML) + 1;
	}
	return {
		init : function() {
			setInterval(increment, 5000);
		}
	}
})();

document.getElementById('cups') && cups.init();