export default  () => {
  const template = `
      <nav>
          <i id="spa" class="material-icons">spa</i>
          <span id="appName">soundscape</span>
      </nav>
      <header>
        <h1>"Just put on your headphones</h1>
        <h2>& close your eyes."</h2>
      </header>
      <section>
        <span>Goes far beyond simple entertainment, for managing stress and anxiety, insomnia and stress.<br> Our recordings are also a fantastic tool for enhancing focus and concentration, stimulating the imagination, fueling creativity, and eliminating distractions.</span>
      </section>
          <aside>
              <div id="logIn-form">
                  <i id="email" class="material-icons">mail_outline</i>
                  <input id="emailInput" type="email" placeholder="E m a i l  h e r e."></input> <br>
                  <i id="password" class="material-icons">vpn_key</i>
                  <input id="passwordInput" type="password" placeholder="P a s s w o r d  h e r e."></input> <br>
                  <button id="LogIn">LogIn</button><br>
              </div>
              <a href="#/signUp" id="Signup">Don't have an accout? Sign Up now!</a>
          </aside>
          <footer>
              <span id="nameFooter">APP 2020 <img id="mexicoflag" src="https://bit.ly/36q0CFr"></span>
          </footer>
  `;
  const welcomeView = document.createElement('div');
  welcomeView.classList.add('welcomeView');
  welcomeView.innerHTML = template;
  return welcomeView;
}
