export default  () => {
  const template = `
    <homeHeader>
    <i id="back" class='material-icons' style="font-size:2em">keyboard_backspace</i>
    </homeHeader>
    <homeSection>
    </homeSection>
    <homeNav>
      <i id="dashboard" class='material-icons' style="font-size:3em;">dashboard</i>
      <i id="post" class='material-icons' style="font-size:3em">mic</i>
      <i id="profile" class='material-icons' style="font-size: 3em">account_circle</i>
    </homeNav>
  `;
  const homeView = document.createElement('div');
  homeView.classList.add('homeView');
  homeView.innerHTML = template;
  return homeView;
}
