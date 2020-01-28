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
            <div class="inputs">
                <div class="email">
                  <i id="email" class="material-icons">mail_outline</i>
                  <input id="email" type="email" class="emailInput" placeholder=":Y o u r E-m a i l h e r e"/><br>
                </div>
                <div class="password">
                  <i id="password" class="material-icons">vpn_key</i>
                  <input id="password" type="password" class="passwordInput" placeholder=": password"/><br>
                </div>
            </div>
                  <button id="LogIn"> LogIn</button><br>
                  <a href="/#/signUp">No tienes cuenta?Registrate</a>
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
