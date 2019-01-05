(function(){

	var animateTarget = document.getElementById('animateTarget');
	var kingLink = document.getElementById('kingLink');

	var buttons = document.getElementsByTagName('button');

	document.addEventListener('click', function(e){
		if(e.target.tagName == 'BUTTON'){

			// TODO: might need to be active
			var active = document.getElementsByClassName('btn-dark')[0]
			animateTarget.classList.remove(active.getAttribute('data-value'));
			kingLink.classList.remove(active.getAttribute('data-value'))

			for(var i=0; i < buttons.length; i++){
				buttons[i].classList.remove('btn-dark')
				buttons[i].classList.add('btn-light')
			}

			e.target.classList.remove('btn-light')
			e.target.classList.add('btn-dark');
			animateTarget.classList.add(e.target.getAttribute('data-value'))
			kingLink.classList.add(e.target.getAttribute('data-value'))
		}
	})
})();