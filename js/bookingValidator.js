function validator(){
    //get the name tag from the DOM
     var userName = document.getElementById('fullname').value;
    //get the email tag from the DOM
    var userEmail = document.getElementById('email').value;
    //get the number tag from the DOM
     var userNumber = document.getElementById('number').value;
    //get the location tag from the DOM
    var userLocation = document.getElementById('location').value;

    // Define Email Regex based on RFC 5322 Standard 
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/; 
    var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}\d{4}$/ //for a 10-digit number, referenced from stack overflow
    
    var emailArray = ["psabomt@gmail.com", "teosa@tcd.ie", "d21124102@mytudublin.ie"];
    var nameArray = ["Sabrina Teo", "sabrina", "Sabrina"];
    var locArray = ["Dublin", "dublin", "galway", "Galway", "Cork", "cork", "Kildare", "kildare"]

    //Only the above email,locations and names will be found in the database

    //get output DOM tag
    var errorMessage = document.getElementById("errorMessage");
    //Check email not empty AND email and passwords are valid based on the regex
    if(userEmail !== "" && emailRegex.test(userEmail) && phoneRegex.test(userNumber)){
        if (emailArray.includes(userEmail) && nameArray.issncludes(userName) && locArray.includes(userLocation)){
            window.location.href = "success.html";
        }
        else if(emailArray.includes(userEmail)&& !nameArray.includes(userName) && locArray.includes(userLocation)){
            errorMessage.innerHTML = "Both valid but name not found in database";
            errorMessage.style.color = "Green";
        }
        else if(!emailArray.includes(userEmail) && nameArray.includes(userName) && locArray.includes(userLocation)){
            errorMessage.innerHTML = "Both valid but email not found in database";
            errorMessage.style.color = "Green";
        }
        else{
            errorMessage.innerHTML = "Both valid but neither email or name found in db";
            errorMessage.style.color = "Green";
        }
    }
    else if(userEmail === "" || userName === "" || userLocation === "" || userNumber === ""){
        errorMessage.innerHTML = "Some required fields are missing";
        errorMessage.style.color = "Orange";
    }
    else{
        errorMessage.innerHTML = "You did not enter a valid email address or phone number";
        errorMessage.style.color = "Red";
    }
}