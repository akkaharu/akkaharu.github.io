const userName = document.getElementById('welcomeUser');
const welcomeUserForm = document.getElementById('welcomeUserForm');
let nameForm = '';

document.addEventListener("DOMContentLoaded", function() {
    if (!userName.value) {
        nameForm += `
        <p>Еще не зарегистрированы? Давайте знакомиться!</p>
        <input type="text" placeholder="Ваше имя" id="newUserName" class="saveUserName" required >
        <button id="saveUserName">Сохранить!</button>`
        welcomeUserForm.innerHTML = nameForm;
        let saveUserName = document.querySelector(".saveUserName")
    }
})



const Chart = require('chart.js');
var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var popCanvas = document.getElementById("popChart");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: {
    labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
    datasets: [{
      label: 'Population',
      data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ]
    }]
  }
});