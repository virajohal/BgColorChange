/**
 * 
 */

const boxEle = document.querySelectorAll('.box');
const bodyEle = document.querySelector("body");

boxEle.forEach(function(box) {
	box.addEventListener('click', function(color) {
		if (color.target.id === 'box1') {
			bodyEle.style.backgroundColor = '#93c29e';
		}
		if (color.target.id === 'box2') {
			bodyEle.style.backgroundColor = '#f2b78a';
		}
		if (color.target.id === 'box3') {
			bodyEle.style.backgroundColor = '#a1a092';
		}
		if (color.target.id === 'box4') {
			bodyEle.style.backgroundColor = '#e65e89';
		}
		if (color.target.id === 'box5') {
			bodyEle.style.backgroundColor = '#79b6bd';
		}
	})


})
/*
const boxEle = document.querySelectorAll('.box');
const bodyEle = document.querySelector("body");

boxEle.forEach(function(box) {
	box.addEventListener('click', function(event) {
		if (event.target.id === 'box1') {
			bodyEle.style.backgroundColor = 'red';
		}
	});
});
*/