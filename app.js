let navbar = document.querySelector('.navbar'),
	 burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	navbar.classList.toggle('open');
})
