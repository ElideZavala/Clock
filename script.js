const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const hourEl = document.querySelector('.hour');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const dias = ["Domingo", "Lunes", "Marte", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimbre", "Obtubre", "Noviembre", "Diciembre"];

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.inneHTML = 'Modo Oscuro';
	} else {
		html.classList.remove('dark');
		e.target.inneHTML = 'Modo Claro';
	}
})