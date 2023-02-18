document.getElementById('date').valueAsDate = new Date();

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);