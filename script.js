
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var middleName = document.getElementById("middleName");

var addressLine1 = document.getElementById("addressLine1");
var addressLine2 = document.getElementById("addressLine2");
var city = document.getElementById("city");

var state = document.getElementById("state");
var pinCode = document.getElementById("pincode");
var phoneNumber = document.getElementById("phoneNumber");
var email = document.getElementById("email");
var password = document.getElementById("password");


pinCode.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("pinCode event run.....");
                 const value = pinCode.value.trim(); 
                   var res =/^(\d{8})$/.test(value); 
                   console.log("res",res);
                   if(res == false){
                        pinCode.classList.add("error");
                        document.getElementById("error-msg-pin").style.display = "block";
                   } else {
                    pinCode.classList.remove("error");
                    document.getElementById("error-msg-pin").style.display = "none";
                   }
            });

phoneNumber.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("phoneNumber event run...........");
            const value = phoneNumber.value.trim(); 
            var res =/^(\d{10})$/.test(value); 
            console.log("res",res);
            if(res == false){
                phoneNumber.classList.add("error");
                document.getElementById("error-msg-phno").style.display = "block";
            } else {
                phoneNumber.classList.remove("error");
                document.getElementById("error-msg-phno").style.display = "none";
            }
        });                               

email.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("email event run...........");
            const value = email.value.trim(); 
            var res =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value); 
            console.log("res",res);
            if(res == false){
                email.classList.add("error");
                document.getElementById("error-msg-email").style.display = "block";
            } else {
                email.classList.remove("error");
                document.getElementById("error-msg-email").style.display = "none";
            }
    });                               

password.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("password event run...........");
            const value = password.value.trim(); 
            var res =/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/.test(value); 
            console.log("res",res);
            if(res == false){
                password.classList.add("error");
                document.getElementById("error-msg-password").style.display = "block";
            } else {
                password.classList.remove("error");
                document.getElementById("error-msg-password").style.display = "none";
            }
    });                               

function Validate(){
    console.log("validate called");
    
    validateFirstName();
    validateLastName();
    validateAddressLine1() ;
    validateCity();
    validateState();
    validatePinCode();
    validatePhoneNo();
    validateEmail();
    validatePassword();
    

}

function validateFirstName() {

    if(firstName.value.trim() == ''){
        firstName.classList.add('error');
    }
    firstName.addEventListener('input',
        evt => { evt.preventDefault();
                console.log("firstname event run...........");
                const value = firstName.value.trim(); 
                if(value){
                    firstName.classList.remove("error");
                }
        } );
}

function validateLastName() {
    if(lastName.value.trim() == ''){
        lastName.classList.add('error');
    }
    lastName.addEventListener('input',
        evt => { evt.preventDefault();
                console.log("lastName event run...........");
                const value = lastName.value.trim(); 
                if(value){
                    lastName.classList.remove("error");
                }
        } );
}

function validateAddressLine1() {
    if(addressLine1.value.trim() == ''){
        addressLine1.classList.add('error');
    }
    addressLine1.addEventListener('input',
        evt => { evt.preventDefault();
                console.log("addressLine1 event run...........");
                const value = addressLine1.value.trim(); 
                if(value){
                    addressLine1.classList.remove("error");
                }
        } );

}

function validateCity() {
    if(city.value.trim() == ''){
        city.classList.add('error');
    }
    city.addEventListener('input',
        evt => { evt.preventDefault();
                console.log("city event run...........");
                const value = city.value.trim(); 
                if(value){
                    city.classList.remove("error");
                }
        } );
}
function validateState() {
    if(state.value.trim() == ''){
        state.classList.add('error');
    }
    state.addEventListener('input',
        evt => { evt.preventDefault();
                console.log("state event run...........");
                const value = state.value.trim(); 
                if(value){
                    state.classList.remove("error");
                }
        } );
}

function validatePinCode() {
    if(pinCode.value.trim() == ''){
        pinCode.classList.add('error');
        document.getElementById("error-msg-pin").style.display = "block";
    }
    pinCode.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("pinCode event run.....");
                 const value = pinCode.value.trim(); 
                   var res =/^(\d{8})$/.test(value); 
                   console.log("res",res);
                   if(res == false){
                        pinCode.classList.add("error");
                        document.getElementById("error-msg-pin").style.display = "block";
                   } else {
                    pinCode.classList.remove("error");
                    document.getElementById("error-msg-pin").style.display = "none";
                   }
            });
}

function validatePhoneNo() {
    if(phoneNumber.value.trim() == ''){
        phoneNumber.classList.add('error');
        document.getElementById("error-msg-phno").style.display = "block";

    }
    phoneNumber.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("phoneNumber event run...........");
            const value = phoneNumber.value.trim(); 
            var res =/^(\d{10})$/.test(value); 
            console.log("res",res);
            if(res == false){
                phoneNumber.classList.add("error");
                document.getElementById("error-msg-phno").style.display = "block";
            } else {
                phoneNumber.classList.remove("error");
                document.getElementById("error-msg-phno").style.display = "none";
            }
        });  
}

function validatePassword() {
    if(password.value.trim() == ''){
        password.classList.add('error');
        document.getElementById("error-msg-password").style.display = "block";

    }
    password.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("password event run...........");
            const value = password.value.trim(); 
            var res =/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/.test(value); 
            console.log("res",res);
            if(res == false){
                password.classList.add("error");
                document.getElementById("error-msg-password").style.display = "block";
            } else {
                password.classList.remove("error");
                document.getElementById("error-msg-password").style.display = "none";
            }
    });
}

function validateEmail() {
    if(email.value.trim() == ''){
        email.classList.add('error');
        document.getElementById("error-msg-email").style.display = "block";

    }
    email.addEventListener("input", 
    evt => { evt.preventDefault();
            console.log("email event run...........");
            const value = email.value.trim(); 
            var res =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value); 
            console.log("res",res);
            if(res == false){
                email.classList.add("error");
                document.getElementById("error-msg-email").style.display = "block";
            } else {
                email.classList.remove("error");
                document.getElementById("error-msg-email").style.display = "none";
            }
    });
}