function formValidation(event) {
    event.preventDefault();
    var nameValue = document.myform.name.value.trim();
    var password = document.myform.password.value.trim();
    var confirm = document.myform.confirm.value.trim();
    var phone = document.myform.phone.value.trim();
    var selcity = myform.selAccount.value;
    var array = [];

    console.log(selAccount);
    if (selcity == "-1") {
        alert("Select city");
        //return false;
    }



    if (nameValue == null || nameValue == "") {

        alert("Please enter your name");
        //return false;
    }

    if (password == null || password == "") {
        alert("Please enter your password");
        // return false;
    }

    if (password.length < 8) {
        alert("Password must be of 8 characters");
    }

    if (confirm.length < 8) {
        alert("Password must be of 8 characters");
    }

    if (confirm == null || confirm == "") {
        alert("Please enter your confirmPassword");
        //return false;
    }

    if (password != confirm) {
        alert("Enter correct password");
        //return false;
    }

    if (phone.length != 10) {
        alert("Enter correct phone no");
        //return false;
    }

    //  var email = myfoil.value;rm.ma
    // atpos = email.indexOf("@");
    // dopos = email.lastIndexOf(".");
    // if (email == "" || atpos < 1 || (dopos - atpos > 2)) {
    //     alert("Enter correct email");
    //     myform.mail.focus();
    //     //return false;
    // }



    const formData = {
        nameValue,
        password,
        confirm,
        phone,
        selAccount
    };
    // array.push(formData);

    if (localStorage.getItem("user_data") === null) {
        array.push(formData);
        var stringArray = JSON.stringify(array);
        localStorage.setItem("user_data", stringArray);
        console.log(stringArray);
    }

    else {
        var storage = localStorage.getItem("user_data");
        var data = JSON.parse(storage);
        data.push(formData);
        var stringArray = JSON.stringify(data);
        localStorage.setItem("user+data", stringArray);
        console.log(stringArray);
    }

    //return false;
}