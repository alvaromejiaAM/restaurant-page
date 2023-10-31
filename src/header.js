//Create page header
function createHeader(){
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  header.classList = 'header';
  const headerRestName = document.createElement('h1');
  headerRestName.innerText = "Babaro's Restaurant";
  header.appendChild(headerRestName);
  content.appendChild(header);
}

export default createHeader