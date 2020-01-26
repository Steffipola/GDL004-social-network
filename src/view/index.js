import welcomeView from './pages/welcome.js';
import homeView from './pages/home.js';
import { controller } from '../controller/index.js';

const components = {
  welcome: welcomeView,
  home: homeView,
  //profile: profileView
  //404
}

const view = {
  init: () => {
    const home = document.querySelector('homeView');
    console.log('esta entrando al metodo init del obj view');
  }

}

export { components, view};
