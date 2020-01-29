import {
    createUserFirebase,
    logInUserFirebase
} from "../model/firebase.js";

export const authenticationFirebase = {
  triggerLogInFirebase: () => {
      document.querySelector('#LogIn').addEventListener('click', () => {
      const email = document.getElementById('emailInput').value;
      console.log(email);
      const password = document.getElementById('passwordInput').value;
      console.log(password);
      logInUserFirebase(email, password);
      });
  },

  triggerSignUpFirebase: () => {
      document.querySelector('.signUpFirebase').addEventListener('click', () => {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      createUserFirebase(email, password);
      });
  }

}
