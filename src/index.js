import createHome from "./pages/home";
import menu from "./pages/menu";

const menuBtn = document.getElementById('menuTab');
const homeBtn = document.getElementById('homeTab');

createHome()
menuTab.addEventListener('click', function(){
  menu();
})

homeTab.addEventListener('click', function(){
  createHome();
})


