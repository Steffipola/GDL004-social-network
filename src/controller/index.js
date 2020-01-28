//import model (firebase, firestore)
import { components, view } from '../view/index.js';
import { loadProvider } from '../controller/indentity-provider.js';

export const controller = {
  init: () => {
    view.init();
  },

  changeTemplates: (hash) => {
    const mainView = document.querySelector('#container');
    mainView.innerHTML = '';

    switch (hash) {
      case '':
      case '#':
      case '#/':
          mainView.appendChild(components.welcome());
          loadProvider.triggerLogin();
          return console.log('Home Loaded');
      case '#/home':
          mainView.appendChild(components.home());
          controller.init();
          break;
    }
  }
}