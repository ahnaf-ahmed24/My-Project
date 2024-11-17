const singInBtnLink = document.querySelector('signInBtn-link');
const signUpBtnLink = document.querySelector('SignUpBtn-link');
const wrapper = document.querySelector('wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
singInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('activve');
});