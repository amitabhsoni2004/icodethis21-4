let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let fnameLabel = document.querySelector(".fname");
let lnameLabel = document.querySelector(".lname");
let emailLabel = document.querySelector(".email");
let passwordLabel = document.querySelector(".password");

fname.addEventListener("click", () => {
    fnameLabel.style.top = '-30px';
    fnameLabel.style.left = '-10px';
    fnameLabel.style.color = 'black';

    // Reset lname label to original position and color
    // lnameLabel.style.top = '11px';
    // lnameLabel.style.right = '60px';
    // lnameLabel.style.color = 'gray';

    // passwordLabel.style.top = '82px';
    // passwordLabel.style.left = '15px';
    // passwordLabel.style.color = 'gray';

    // emailLabel.style.top = '11px';
    // emailLabel.style.left = '15px';
    // emailLabel.style.color = 'gray';
});

lname.addEventListener("click", () => {
    lnameLabel.style.top = '-30px';
    lnameLabel.style.right = '80px';
    lnameLabel.style.color = 'black';

    // Reset fname label to original position and color
    // fnameLabel.style.top = '11px';
    // fnameLabel.style.left = '14px';
    // fnameLabel.style.color = 'gray';


    // passwordLabel.style.top = '82px';
    // passwordLabel.style.left = '15px';
    // passwordLabel.style.color = 'gray';

    // emailLabel.style.top = '11px';
    // emailLabel.style.left = '15px';
    // emailLabel.style.color = 'gray';
});

email.addEventListener("click", () => {
    emailLabel.style.top = '-25px';
    emailLabel.style.left = '0px';
    emailLabel.style.color = 'black';


    // passwordLabel.style.top = '82px';
    // passwordLabel.style.left = '15px';
    // passwordLabel.style.color = 'gray';

    // fnameLabel.style.top = '11px';
    // fnameLabel.style.left = '14px';
    // fnameLabel.style.color = 'gray';


    // lnameLabel.style.top = '11px';
    // lnameLabel.style.right = '60px';
    // lnameLabel.style.color = 'gray';
});
password.addEventListener("click", () => {
    passwordLabel.style.top = '45px';
    passwordLabel.style.left = '0px';
    passwordLabel.style.color = 'black';

    // emailLabel.style.top = '11px';
    // emailLabel.style.left = '15px';
    // emailLabel.style.color = 'gray';

    // fnameLabel.style.top = '11px';
    // fnameLabel.style.left = '14px';
    // fnameLabel.style.color = 'gray';


    // lnameLabel.style.top = '11px';
    // lnameLabel.style.right = '60px';
    // lnameLabel.style.color = 'gray';
});
document.addEventListener("DOMContentLoaded", function() {
    let submit2 = document.querySelector(".submit2");
    submit2.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        let inputs = document.querySelectorAll("input");
        let allFilled = true;

        inputs.forEach(function(input) {
            if (input.value.trim() === "") { // Check if input value is empty
                allFilled = false;
            }
        });

        if (allFilled) {
            alert("Account Successfully Created");
            location.reload(); // Refresh the page
        } else {
            alert("Please fill in all fields.");
        }
    });
});


