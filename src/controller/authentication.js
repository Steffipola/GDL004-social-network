import {
    createUserFirebase,
    logInUserFirebase
} from "../model/firebase.js";

export const authenticationFirebase = {
  triggerLogInFirebase: () => {
      document.querySelector('#LogIn').addEventListener('click', () => {
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
      logInUserFirebase(email, password);
      });
  },

  triggerSignUpFirebase: () => {
      document.querySelector('#signUp').addEventListener('click', () => {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('e-mail').value;
      const password = document.getElementById('psw').value;
      const passwordConfirm = document.getElementById('pswConfirm').value;
      createUserFirebase(email, password);
      });
  }

}
