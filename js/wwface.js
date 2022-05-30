document.addEventListener('DOMContentLoaded', function() {

	function turn(event) {
		var x = event.clientX;
		var half = (window.innerWidth / 2);
		var rot = (45 + (half - x) / 50);
		var trans = (-50 + (half - x) / 75);
		var opac = ((half - x) / half);

		var cube = document.getElementsByClassName('cube');
		var wrap = document.getElementsByClassName('wrap');

		for (var i = 0; i < cube.length; i++) {
			cube[i].style.transform = 'rotateY(' + rot + 'deg)';
		}

		for (var i = 0; i < wrap.length; i++) {
			wrap[i].style.transform = 'translate(' + trans + '%, -50%)';
		}

		var bill2 = document.getElementById('bill2');
		var will2 = document.getElementById('will2');

		if (opac < 0) {
			bill2.style.opacity = -opac;
		} else if (opac > 0) {
			will2.style.opacity = opac;
		}

		var parallax = document.getElementById('parallax');
		var mtns3 = (50 + (x - half) * 0.001);
		var mtns2 = (50 + (x - half) * 0.002);
		var mtns1 = (50 + (x - half) * 0.003);
		var ground = (50 + (x - half) * 0.006);
		var depth = ground + '% 100%,' + mtns1 + '% 100%,' + mtns2 + '% 100%,' + mtns3 + '% 100%';

		parallax.style.backgroundPosition = depth;
	}

	document.addEventListener('mousemove', turn, false);

	function touchTurn(event) {
		var touch = event.targetTouches[0];
		var x = touch.clientX;
		var half = (window.innerWidth / 2);
		var rot = (45 + (half - x) / 45);
		var trans = (-50 + (half - x) / 75);
		var opac = ((half - x) / half);

		var cube = document.getElementsByClassName('cube');
		var wrap = document.getElementsByClassName('wrap');

		if (event.targetTouches.length == 1) {
			event.preventDefault();

			for (var i = 0; i < cube.length; i++) {
				cube[i].style.transform = 'rotateY(' + rot + 'deg)';
			}

			for (var i = 0; i < wrap.length; i++) {
				wrap[i].style.transform = 'translate(' + trans + '%, -50%)'
			}

			var bill2 = document.getElementById('bill2');
			var will2 = document.getElementById('will2');
	
			if (opac < 0) {
				bill2.style.opacity = -opac;
			} else if (opac > 0) {
				will2.style.opacity = opac;
			}

			var parallax = document.getElementById('parallax');
			var mtns3 = (50 - (x - half) * 0.001);
			var mtns2 = (50 - (x - half) * 0.002);
			var mtns1 = (50 - (x - half) * 0.003);
			var ground = (50 - (x - half) * 0.006);
			var depth = ground + '% 100%,' + mtns1 + '% 100%,' + mtns2 + '% 100%,' + mtns3 + '% 100%';

			parallax.style.backgroundPosition = depth;
		}
	}

	document.addEventListener('touchmove', touchTurn, false);

});