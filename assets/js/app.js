let birthday, today = new Date()
birthday.setFullYear(2001, 05, 20);
// today.setFullYear(2020, 05, 20);

document.write(Math.round(today - birthday)/(1000 * 60 * 60 * 24));