const content = document.querySelector('#content');

//Create page header
  const header = document.createElement('div');
  header.classList = 'header';
  const headerRestName = document.createElement('h1');
  headerRestName.innerText = "Babaro's Restaurant";
  header.appendChild(headerRestName);
  content.appendChild(header);

