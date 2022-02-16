window.onload = function() {
  // AOS.init();
  calcYearsWorking();
}


function calcYearsWorking() {
  const startDate = new Date("10/05/2017");
  const currentDate = new Date();
  const diff = ((currentDate.getTime() - startDate.getTime()) / 1000) / (60 * 60 * 24 * 7 * 4);

  document.getElementById('years-working').innerHTML = Math.floor(diff / 12);
}
