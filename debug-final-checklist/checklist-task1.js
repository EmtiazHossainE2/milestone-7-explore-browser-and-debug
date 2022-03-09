
const ValidateEmail = () => {
    const emailText = document.getElementById('email-text')
    const emailAddr = emailText.value;
    const pass = document.getElementById('pass')
    const passValue = pass.value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (emailAddr.match(mailformat) && passValue.match(passformat)) {
        alert("Successfully Login!");
        return true
    }
    else {
        alert("You have entered an invalid email address! or password");
        return false;
    }
}
