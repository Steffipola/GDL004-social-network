export default  () => {
  const template = `
      <signAside>
          <div id="name">
            <i id="spa" class="material-icons">spa</i>
            <span id="appName">soundscape</span>
          </div>
          <div class="joinPage" style="visibility:hidden">
            <span id="joinUs">Join us to create</span><br>
            <span id="audioEx">audio experiences<br></span>
            <span id="help">to help people<br>sleep&relax.</span>
          </div>
      </signAside>
      <signSection>
          <div id="signUp-form">
              <i id="name" class="material-icons">face</i>
              <input id="firstName" type="text" class="nameInput" placeholder="F i r s t N a m e"/><br>
              <input id="lastName" type="text" class="nameInput" placeholder="L a s t N a m e"/><br>
              <i id="email" class="material-icons">mail_outline</i>
              <input id="e-mail" type="email" class="emailInput" placeholder="E-m a i l H e r e"/><br>
              <i id="password" class="material-icons">vpn_key</i>
              <input id="psw" type="password" class="passwordInput" placeholder="P a s s w o r d H e r e"/><br>
              <input id="pswConfirm" type="password" class="passwordInput" placeholder="C o n f i r m P a s s w o r d"/><br>
              <button id="signUp">SignUp with E-mail</button><br>
          </div>
              <span>Or Sign Up With:</span><br>
          <div class="buttons">
              <img id="fbLogIn" src="https://bit.ly/3aJAlp4" width="50px" height="50px">
              <img id="googleLogIn" src="https://bit.ly/2Gj87TX" width="50px" height="50px">
              <img id="twitterLogIn" src="https://bit.ly/38Di5f8" width="50px" height="50px">
              <img id="githubLogIn" src="https://bit.ly/2TWaBzt" width="50px" height="50px">
           </div>
           <a href="/">Ya tienes cuenta? Inicia Sesión.</a>
      </signSection>
      <signFooter>
              <span id="nameFooter">APP 2020 <img id="mexicoflag" src="https://bit.ly/36q0CFr"></span>
      </signFooter>
`;
const signUpView = document.createElement('div');
signUpView.classList.add('signUpView');
signUpView.innerHTML = template;
return signUpView;
}
