document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-id');
    const userEmail = emailField.value;
    console.log(userEmail);
    //user password check
    const passlField = document.getElementById('user-password');
    const userPass = passlField.value;

    if (userEmail == 'shahariar@gmail.com' && userPass == 'hello') {
        window.location.href = "file:///J:/project/baper-bank/bank_homepage.html";

    }
    else {
        window.location.href = "www.error.com";
    }
})