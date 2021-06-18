const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
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
		html.classList.add('dark');
		e.target.innerHTML = 'Modo Claro';
	}
});


function setTime() {
	const time = new Date();
	const mes = time.getMonth();
	const dia = time.getDay();
	const date = time.getDate();
	const horas = time.getHours();
	const hoursForClock = horas % 12; //Para reloj de 12 Horas. volvera a contar a partir de 12
	const minutos = time.getMinutes();
	const segundos = time.getSeconds();
	const ampm = horas >= 12 ? 'PM' : 'AM';

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutos, 0, 59, 0, 360)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(segundos, 0, 59, 0, 360)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${minutos < 10 ? `0${minutos}`: minutos} ${ampm}`;
	dateEl.innerHTML = `${dias[dia]}, ${meses[mes]} <span class="circle">${date}</span>`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);