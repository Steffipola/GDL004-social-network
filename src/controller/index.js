//import model (firebase, firestore)
import { components, view } from '../view/index.js';
import { loadProvider } from '../controller/identity-provider.js';

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
      case '#/signUp':
          mainView.appendChild(components.signUp());
          loadProvider.triggerLogin();
          break;
      case '#/home':
          mainView.appendChild(components.home());
          controller.init();
          break;
    }
  }
}
