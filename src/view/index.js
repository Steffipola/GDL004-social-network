import welcomeView from './pages/welcome.js';
import signUpView from './pages/signUp.js';
import homeView from './pages/home.js';
import { controller } from '../controller/index.js';

const components = {
  welcome: welcomeView,
  home: homeView,
  signUp: signUpView
  //profile: profileView
  //404
}

const view = {
  init: () => {
    const home = document.querySelector('.homeView');
    const back = document.querySelector('#back');
    back.addEventListener('click', () => { console.log('si funciona'); window.history.back() });
  }

}

export { components, view};
