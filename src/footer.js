 //Create footer
 function createFooter(){
  const content = document.querySelector('#content');
  const footer = document.createElement('div');
  
  footer.classList = 'footer';
  footer.innerText = `Alvaro \u00A92023`
  content.appendChild(footer);
 }

 export default createFooter