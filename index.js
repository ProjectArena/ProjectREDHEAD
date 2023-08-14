const loginForm = document.getElementById('login-form');
const createForm = document.getElementById('create-form');

function toggleForm() {
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    createForm.style.display = createForm.style.display === 'none' ? 'block' : 'none';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Perform validation and authentication here
    console.log(`Logged in as ${username}`);
}

function createAccount() {
    const username = document.getElementById('create-username').value;
    const password = document.getElementById('create-password').value;

    // Perform account creation and data storage here
    console.log(`Account created for ${username}`);
}
