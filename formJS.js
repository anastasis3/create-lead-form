// Form Validation

function checkStuff() {
    var email = document.form1.email;
    var company = document.form1.company;
    var first_name = document.form1.first_name;
    var last_name = document.form1.last_name;
    var phone = document.form1.phone;
    var msg = document.getElementById('msg');
    var optvalue = document.form1.select;
    var v = grecaptcha.getResponse();



    if (company.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your company name ";
        company.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }

    if (first_name.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your first name ";
        first_name.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }

    var re4 = /[^0-9]/;
    if (!re4.test(first_name.value)) {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter a valid first name";
        first_name.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }

    if (last_name.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your last name ";
        last_name.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }

    var re3 = /[^0-9+]/;
    if (!re3.test(last_name.value)) {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter a valid last name";
        last_name.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }


    if (optvalue == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please select product";
        email.focus();
        return false;
    }

    if (email.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your email";
        email.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }

    var re = /^[-\w.]+@([-A-z0-9]+\.)+[com]{3}$/;
    if (!re.test(email.value)) {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter a valid email (.com)";
        email.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }


    if (phone.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your phone ";
        phone.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }
    var re2 = /[^0-9+]/;
    if (re2.test(phone.value)) {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter a valid phone number";
        phone.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }
    if (v.length == 0) {
        msg.style.display = 'block';
        msg.innerHTML = "You can't leave Captcha Code empty";
        return false;
    } else {
        msg.innerHTML = "";
    }
}