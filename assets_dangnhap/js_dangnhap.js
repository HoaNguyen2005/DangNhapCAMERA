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
        } else {
            successMessage(usernameInput);
        }
    }

    function checkPassword() {
        if (passwordInput.value.trim() === '') {
            errorMessage(passwordInput, "Vui lòng không bỏ trống mật khẩu.");
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







// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let isValid = true;

//     // Kiểm tra tên đăng nhập
//     if (usernameInput.value.trim() === '') {
//         messageUser.textContent = 'Tên đăng nhập không được để trống';
//         messageUser.style.color = 'red';
//         isValid = false;
//     } else if (usernameInput.value.length < 5) {
//         messageUser.textContent = 'Tên đăng nhập phải có ít nhất 5 ký tự';
//         messageUser.style.color = 'red';
//         isValid = false;
//     } else {
//         messageUser.textContent = '';
//     }

//     // Kiểm tra mật khẩu
//     if (passwordInput.value.trim() === '') {
//         messagePass.textContent = 'Mật khẩu không được để trống';
//         messagePass.style.color = 'red';
//         isValid = false;
//     } else if (passwordInput.value.length < 8) {
//         messagePass.textContent = 'Mật khẩu phải có ít nhất 8 ký tự';
//         messagePass.style.color = 'red';
//         isValid = false;
//     } else {
//         messagePass.textContent = '';
//     }

//     // Nếu hợp lệ, cho phép form submit
//     if (isValid) {
//         form.submit();
//     }
// });

