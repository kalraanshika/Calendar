const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curDate = new Date();
const curYear = curDate.getFullYear();
const curMonth = curDate.getMonth();
const curDay = curDate.getDate();

document.querySelector('.month').innerText = months[curDate.getMonth()];
document.querySelector('.year').innerText = curYear;

let daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();
let week = document.createElement('div');
week.classList.add('days_number-row');

for (i = 1; i <= daysInMonth; i++) {
	let day = document.createElement('span');
	day.classList.add('day_num');
	day.innerText = i;
	(i == curDay) && day.classList.add('currentDate');
	week.append(day);

	if (new Date(curYear, curMonth, i).getDay() == 6 || i == daysInMonth) {
		document.querySelector('.days_number').append(week);

		if (i != daysInMonth) {
			week = document.createElement('div');
			week.classList.add('days_number-row');
		}
	}
}