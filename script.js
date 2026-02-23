function showCalc(id) {

  document.querySelectorAll('.calc').forEach(c => c.style.display = 'none');

  document.getElementById(id).style.display = 'block';

}

function add() {

  let n1 = Number(document.getElementById("num1").value);

  let n2 = Number(document.getElementById("num2").value);

  document.getElementById("basicResult").innerText = "Result: " + (n1 + n2);

}

function calculatePercentage() {

  let percent = Number(document.getElementById("percent").value);

  let number = Number(document.getElementById("number").value);

  let result = (percent / 100) * number;

  document.getElementById("percentResult").innerText = "Result: " + result;

}

function calculateSI() {

  let p = Number(document.getElementById("p").value);

  let r = Number(document.getElementById("r").value);

  let t = Number(document.getElementById("t").value);

  let si = (p * r * t) / 100;

  document.getElementById("siResult").innerText = "Result: " + si;

}
function calculateBMI() {

  let w = Number(document.getElementById("weight").value);

  let h = Number(document.getElementById("height").value);

  let bmi = w / (h * h);

  document.getElementById("bmiResult").innerText = "Your BMI: " + bmi.toFixed(2);

}

function calculateCI() {

  let p = Number(document.getElementById("cp").value);

  let r = Number(document.getElementById("cr").value) / 100;

  let t = Number(document.getElementById("ct").value);
  let n = Number(document.getElementById("cn").value);

  let amount = p * Math.pow((1 + r/n), n*t);

  document.getElementById("ciResult").innerText = 

    "Total Amount: " + amount.toFixed(2);

}
function calculateAge() {

  let dob = new Date(document.getElementById("dob").value);

  let today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  let m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {

    age--;

  }

  document.getElementById("ageResult").innerText =

    "Your Age: " + age + " years";

}
result.style.opacity = "0";

setTimeout(() => {

  result.innerText = "Your Result: " + value;

  result.style.opacity = "1";

}, 200);
function toggleDark() {

  document.body.classList.toggle("dark");

}
function calculateEMI() {
    let P = document.getElementById("loanAmount").value;

  let annualRate = document.getElementById("interestRate").value;

  let years = document.getElementById("loanTenure").value;

  if(P === "" || annualRate === "" || years === "") {

    alert("Please fill all fields");

    return;

  }

  let r = annualRate / 12 / 100;

  let n = years * 12;

  let emi = (P * r * Math.pow(1 + r, n)) / 

            (Math.pow(1 + r, n) - 1);

  emi = emi.toFixed(2);

  document.getElementById("emiResult").innerHTML =

    "Monthly EMI: ₹ " + emi;

}
function calculateCI() {

  let P = parseFloat(document.getElementById("ciPrincipal").value);

  let r = parseFloat(document.getElementById("ciRate").value)/100;

  let t = parseFloat(document.getElementById("ciTime").value);

  let n = parseFloat(document.getElementById("ciFreq").value);

  if(!P || !r || !t || !n) {

    alert("Please fill all fields");

    return;

  }

  let A = P * Math.pow(1 + r/n, n*t);

  let CI = A - P;

  document.getElementById("ciResult").innerHTML = 

    "Compound Interest: ₹ " + CI.toFixed(2) + 

    " <br> Total Amount: ₹ " + A.toFixed(2);

}
function calculateEMI() {

  let P = parseFloat(document.getElementById("loanAmount").value);

  let annualRate = parseFloat(document.getElementById("interestRate").value)/100;

  let years = parseFloat(document.getElementById("loanTenure").value);

  if(!P || !annualRate || !years) {

    alert("Please fill all fields");

    return;

  }

  let r = annualRate/12; // monthly rate

  let n = years*12;      // total months

  let emi = (P*r*Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);

  document.getElementById("emiResult").innerHTML =

    "Monthly EMI: ₹ " + emi.toFixed(2) +

    "<br> Total Payment: ₹ " + (emi*n).toFixed(2) +

    "<br> Total Interest: ₹ " + ((emi*n)-P).toFixed(2);

}
