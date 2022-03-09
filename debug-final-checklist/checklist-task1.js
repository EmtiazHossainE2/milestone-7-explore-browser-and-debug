const infoBox = (id, text) => {
    const alertInfo = document.getElementById(id)
    const h3 = document.createElement('h3')
    h3.innerText = text
    alertInfo.appendChild(h3)
    return
}

const ValidateEmail = () => {
    const emailText = document.getElementById('email-text')
    const emailAddr = emailText.value;
    emailText.value = ''
    const pass = document.getElementById('pass')
    const passValue = pass.value;
    pass.value = ''
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (emailAddr.match(mailformat) && passValue.match(passformat)) {
        // alert("Successfully Login!");
        // document.getElementById('alert-info').textContent = ''
        infoBox('alert-info', 'Successfully Login!')
        return true
    }
    else {
        // alert("You have entered an invalid email address! or password");
        infoBox('alert-info2', 'Invalid email address! or password')
        return false;
    }
}
