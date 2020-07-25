const form = document.getElementById('formData');
const usernameMsg = document.getElementById('usernameMsg');
const passwordMsg = document.getElementById('passwordMsg');

function data(formData) {

    form.addEventListener('submit', function(e) {

        e.preventDefault();
        const data = new FormData(form);
        const username = data.get('username')
        const password = data.get('password')

        validationUsername(username);
        validationPassword(password);

        fetch("../src/controller/modules/login.php", {

                method: 'POST',
                body: data
            })
            .then(res => res.json())
            .then(res => {

                console.log(res);
                if (!res.status) {

                    alert('El usuario no existe');
                }else {
                    
                    window.location = res.url;
                }

            });

          

    })
}

data(form);

function validationUsername(username) {

    usernameMsg.innerHTML = 'El campo username esta vacío.'
    usernameMsg.setAttribute("class", "form--validator");
    if (username === '') {

        usernameMsg.style.display = '';
    } else {

        usernameMsg.style.display = 'none';
    }
}

function validationPassword(password) {

    passwordMsg.innerHTML = 'El campo password esta vacío.'
    passwordMsg.setAttribute("class", "form--validator");
    if (password === '') {

        passwordMsg.style.display = '';
    } else {

        passwordMsg.style.display = 'none';
    }
}