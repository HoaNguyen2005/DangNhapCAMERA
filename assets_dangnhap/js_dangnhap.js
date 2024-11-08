$(document).ready(function(){
    $('.toggle').click(function(){
        $('nav').slideToggle();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const form = document.querySelector('.form-login');

    function errorMessage(elmt, message) {
        const formRow = elmt.parentElement; // <div class="form-group"></div>
        formRow.classList.remove('success');
        formRow.classList.add('error');
        formRow.querySelector('.message').textContent = message;
        formRow.querySelector('.message').style.visibility = 'visible';
        formRow.querySelector('.message').style.display = 'block';
    }

    function successMessage(elmt) {
        const formRow = elmt.parentElement; // <div class="form-group"></div>
        formRow.classList.remove('error');
        formRow.classList.add('success');
        formRow.querySelector('.message').textContent = "✓ Hợp lệ";
        formRow.querySelector('.message').style.visibility = 'visible';
        formRow.querySelector('.message').style.display = 'block';
    }

    function checkUsername() {
        if (usernameInput.value.trim() === '') {
            errorMessage(usernameInput, "Vui lòng không bỏ trống tên đăng nhập.");
        } else if(usernameInput.value.length < 6) {
            errorMessage(usernameInput, "Tên đăng nhập phải nhiều hơn 6 ký tự.");
        } else {
            successMessage(usernameInput);
        }
    }

    function checkPassword() {
        if (passwordInput.value.trim() === '') {
            errorMessage(passwordInput, "Vui lòng không bỏ trống mật khẩu.");
        } else if(passwordInput.value.length < 6) {
            errorMessage(passwordInput, "Mật khẩu phải nhiều hơn 6 ký tự")
        } else {
            successMessage(passwordInput);
        }
    }


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        checkUsername();
        checkPassword();

    
        if (usernameInput.parentElement.classList.contains('success') &&
            passwordInput.parentElement.classList.contains('success')) {
            alert("Đăng nhập thành công!");
        }
    });
    usernameInput.addEventListener('blur', checkUsername, false);
    passwordInput.addEventListener('blur', checkPassword, false);
});
