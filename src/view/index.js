import welcomeView from './pages/welcome.js';
import homeView from './pages/home.js';


const components = {
  welcome: welcomeView,
  home: homeView,
  //profile: profileView
  //404
}

const view = {
  init: () => {
    const home = document.querySelector('.homeView');
    const back = document.querySelector('#back');
    console.log('Trigger enabled')
    document.getElementById('fbLogIn').addEventListener('click', () => {
      console.log('Hey')
    })
    back.addEventListener('click', () => { console.log('si funciona'); window.history.back() });
  }

}

export { components, view};