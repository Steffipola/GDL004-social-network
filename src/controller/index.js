import { components, view } from '../view/index.js';
import { loadProvider } from '../controller/identity-provider.js';
import { authenticationFirebase } from '../controller/authentication.js';

export const controller = {
  init: () => {
    view.init();
  },

  changeTemplates: (hash) => {
    const mainView = document.querySelector('#container');

    switch (hash) {
      case '':
      case '#':
      case '#/':
          mainView.appendChild(components.welcome());
          authenticationFirebase.triggerLogInFirebase();
          break;
      case '#/signUp':
          mainView.appendChild(components.signUp());
          authenticationFirebase.triggerSignUpFirebase();
          loadProvider.triggerSignUpWith();
          break;
      case '#/home':
          mainView.appendChild(components.home());
          controller.init();
          break;
    }
  }
}
