//import model (firebase, firestore)
import { components, view } from '../view/index.js';

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
          return mainView.appendChild(components.welcome());
      case '#/signUp':
          mainView.appendChild(components.signUp());
          break;
      case '#/home':
          mainView.appendChild(components.home());
          controller.init();
          break;
    }
  }
}
