window.onload = () => {
  const homeView = document.createElement('div');
  homeView.classList.add('homeView');
  const template = `
    <header>
    <i id="back" class='material-icons' style="font-size:2em">keyboard_backspace</i>
    </header>
    <section>
    </section>
    <nav>
      <i id="dashboard" class='material-icons' style="font-size:3em;">dashboard</i>
      <i id="post" class='material-icons' style="font-size:3em">mic</i>
      <i id="profile" class='material-icons' style="font-size: 3em">account_circle</i>
    </nav>
  `
  homeView.innerHTML = template;
  document.querySelector('#container').appendChild(homeView);
}
