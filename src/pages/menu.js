function menu(){
  const content = document.querySelector('#content');
  content.replaceChildren();
  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('id', 'homeTab');
  homeBtn.innerText = 'home';
  content.appendChild(homeBtn);
}

export default menu