export default  () => {
  const template = `
      <nav>
          <p>"Nombre de la App"</p>
      </nav>
      <header></header>
      <section>
          <p>NAME OF THE APP goes far beyond simple entertainment, for managing stress and anxiety, insomnia, and stress our recordings are also a fantastic tool for enhancing focus and concentration, stimulating the imagination, fueling creativity, and eliminating distractions.
              Just put on your headphones and close your eyes. </p>
          </section>
          <aside>
              <button id="LogIn"> Log In</button> <br>
              <button id="SignUpEmail">Sign Up with Email</button>
              <p>Or sign up with</p>
          </aside>
          <div id="buttons">
              <img id="fbLogIn" src="https://bit.ly/3aJAlp4" width="50px" height="50px">
              <img id="twitterLogIn" src="https://bit.ly/38Di5f8" width="50px" height="50px">
              <img id="googleLogIn" src="https://bit.ly/2Gj87TX" width="50px" height="50px">
              <img id="githubLogIn" src="https://bit.ly/2TWaBzt" width="50px" height="50px">
          </div>
          <footer>
              <p>Nombre de la app 2020 <img id="mexicoflag" src="https://bit.ly/36q0CFr" width="30px" height="20px"></p>
          </footer>
  `;
  const welcomeView = document.createElement('div');
  welcomeView.classList.add('welcomeView');
  welcomeView.innerHTML = template;
  return welcomeView;
}
