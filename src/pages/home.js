//Create body
  function home(){
    const content = document.querySelector('#content');
  //header
    const header = document.createElement('div');
    header.classList = 'header';
    const headerRestName = document.createElement('h1');
    headerRestName.innerText = "Babaro's Restaurant";
    header.appendChild(headerRestName);
    content.appendChild(header);
    
  //body
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menuTab');
    menuBtn.innerText = 'menu';
    const body = document.createElement('div');
    body.classList = 'body';
    const bodyDesc = document.createElement('p');
    bodyDesc.innerText = "Welcome to our page, we hope you enjoy our selection of meals! You order and we make sure to add our magic to your next dish!";
    const menuList = document.createElement('ul');
    let menuArr = ['New and Popular!', 'Salads & Soups', 'Meal Deals to Go', 'Desserts', 'Gluten Free Options', 'Drinks'];
    for(let i=0; i<6;i++){
      const li = document.createElement('li');
      li.innerText = menuArr[i];
      body.appendChild(li);
    }
    const bodyImage = document.createElement('img');
    bodyImage.src = ""
    body.appendChild(menuBtn);
    body.appendChild(bodyDesc);
    body.appendChild(menuList);
    content.appendChild(body);

   //footer
    const footer = document.createElement('div');    
    footer.classList = 'footer';
    footer.innerText = `Alvaro \u00A92023`
    content.appendChild(footer);
  }

  export default home