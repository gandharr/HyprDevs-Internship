// User storage key
const USERS_KEY = 'users';

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
}
function setUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Modal logic
const signupModal = document.getElementById('signupModal');
const openSignUp = document.getElementById('openSignUp');
const closeSignUp = document.getElementById('closeSignUp');

openSignUp.addEventListener('click', e => {
  e.preventDefault();
  signupModal.setAttribute('aria-hidden', 'false');
  document.getElementById('signupEmail').focus();
});
closeSignUp.addEventListener('click', () => {
  signupModal.setAttribute('aria-hidden', 'true');
  clearSignUpForm();
});
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && signupModal.getAttribute('aria-hidden') === 'false') {
    signupModal.setAttribute('aria-hidden', 'true');
    clearSignUpForm();
  }
});
signupModal.addEventListener('mousedown', e => {
  if (e.target === signupModal) {
    signupModal.setAttribute('aria-hidden', 'true');
    clearSignUpForm();
  }
});

function clearSignUpForm() {
  document.getElementById('signupForm').reset();
  document.getElementById('signupEmailError').textContent = '';
  document.getElementById('signupPasswordError').textContent = '';
  document.getElementById('signupConfirmError').textContent = '';
}

// Password strength checker
function isStrongPassword(pw) {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(pw);
}

// Sign up logic
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
  let valid = true;

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('signupEmailError').textContent = 'Enter a valid email address.';
    valid = false;
  } else {
    document.getElementById('signupEmailError').textContent = '';
  }

  // Password validation
  if (!isStrongPassword(password)) {
    document.getElementById('signupPasswordError').textContent = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
    valid = false;
  } else {
    document.getElementById('signupPasswordError').textContent = '';
  }

  // Confirm password
  if (password !== confirm) {
    document.getElementById('signupConfirmError').textContent = 'Passwords do not match.';
    valid = false;
  } else {
    document.getElementById('signupConfirmError').textContent = '';
  }

  if (!valid) return;

  // Check if user exists
  const users = getUsers();
  if (users[email]) {
    document.getElementById('signupEmailError').textContent = 'Account already exists with this email.';
    return;
  }

  // Save user
  users[email] = { password };
  setUsers(users);
  alert('Account created successfully! You can now log in.');
  signupModal.setAttribute('aria-hidden', 'true');
  clearSignUpForm();
});

// Login logic
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const users = getUsers();
  if (!users[email]) {
    alert('No account found with this email. Please sign up.');
    return;
  }
  if (users[email].password !== password) {
    alert('Invalid password. Please try again.');
    return;
  }
  alert('Login successful! Welcome back.');
}); 