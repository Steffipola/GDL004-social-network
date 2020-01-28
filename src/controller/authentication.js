import {
    createUserFirebase,
    logInUserFirebase
} from "../model/firebase.js";

export const authenticationFirebase = {
  triggerLogInFirebase: () => {
      document.querySelector('.logIn').addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
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
