import { model } from '../model/firebase.js';
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
          break;
      case '#/signUp':
          mainView.appendChild(components.signUp());
          loadProvider.triggerSignUpWith();
          break;
      case '#/home':
          mainView.appendChild(components.home());
          controller.init();
          break;
    }
  }
}
