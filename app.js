//form variables
var form = document.getElementById('data');
var formName = document.getElementById('name');
var formEmail = document.getElementById('email');
var formPostal = document.getElementById('postal-code');
var formDate = document.getElementById('date');
var formText = document.getElementById('feedback');
var error = document.getElementById('error');
var formWage = document.getElementById('wage');
var wageTitle = document.getElementById('wageTitle');
var formCompany = document.getElementById('company');
//setting default displays for wage
formWage.style.display = 'none';
wageTitle.style.display = 'none';
//valid variable names
var wageSelect = false;
//regex definitions
var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
var postalRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
//main validation
form.addEventListener('submit', (e) => {
    let errorMsg = [];

    if (!formName.value.match(nameRegex)) {
        errorMsg.push('Valid Name Required')
    }

    if (!formEmail.value.match(emailRegex)) {
        errorMsg.push("Valid Email Required")
    }

    if (!formDate.value.match(dateRegex)) {
        errorMsg.push("Valid Date Required")
    }

    if (!formPostal.value.match(postalRegex)) {
        errorMsg.push("Valid Postal Code Required")
    }

    if (formCompany.value == "") {
        errorMsg.push("Valid Company Name Required")
    }

    if (formText.value == "") {
        errorMsg.push("Valid Feedback Required")
    }

    if (formWage.value < 0 || formWage.value == '' && wageSelect == true) {
        errorMsg.push("Valid Wage Required");
    }

    if (errorMsg.length > 0) {
        e.preventDefault();
        error.innerText = errorMsg.join(', ');
    }
});

function hiringClick(value) {
    if (value == 1) {
        wageTitle.style.display = 'initial';
        formWage.style.display = 'initial';
        wageSelect = true;
    }
    else {
        wageTitle.style.display = 'none';
        formWage.style.display = 'none';
        wageSelect = false;
    }
}