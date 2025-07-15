  // import { clickMe } from './Add-New-PR/utility.js';

document.addEventListener('DOMContentLoaded', () => {

  const sideBar = document.querySelector('.sidebar');
  const iconSideBar = document.querySelector('.icon-sidebar');
  const logoIcon = document.querySelectorAll('.logo-icon');
  const date = document.querySelector('.date');
  const threeDot = document.querySelectorAll('.three-dot');
  const displayPopup = document.querySelectorAll('.display-popup');
  const form = document.querySelector('form');
  const input = document.querySelector('.input-projectTitle');



  function toggleSidebar() { 
    if (sideBar.classList.contains('hidden')) {
      sideBar.classList.remove('hidden');
    } else {
      sideBar.classList.add('hidden');
    }

    if (iconSideBar.classList.contains('hidden')) {
      iconSideBar.classList.remove('hidden');
    } else {
      iconSideBar.classList.add('hidden');
    }

  }

  logoIcon.forEach(logo => { 
          logo.addEventListener('click', toggleSidebar);
  });

  // date logic
  const today = new Date()

  const day = today.getDate()
  const month = today.toLocaleDateString('en-US', {month: 'short'});
  const year = today.getFullYear()

  // console.log(day, month, year)

  date.innerHTML = `${day}, ${month} ${year}`


  const displayPopUp = (index) => {

    const html = `
    <div class="popup-Container">
      <div class="popup-content">
        <img class="popup-icon" src="./asset/Preview-icon.svg"/>
        <span class="popup-text">Preview</span>
      </div>
      <div class="popup-content">
        <img class="popup-icon" src="./asset/Edit-icon.svg"/>
        <span class="popup-text">Edit</span>
      </div>
      <div class="popup-content delete">
        <img class="popup-icon" src="./asset/Delete-icon.svg"/>
        <span class="popup-text delete-content">Delete</span>
      </div>
    </div>
    `;

    displayPopup[index].innerHTML = html;
    // displayPopup[index].style.visibility = 'visible';
    displayPopup[index].classList.toggle('toggle')

  };



  threeDot.forEach((dot, index) => {

    dot.addEventListener('click', () =>{
      console.log("clicked!")
      displayPopUp(index)
    });
  });

  
  // delete portfolio
  displayPopup.forEach((popup) => {

    popup.addEventListener('click', (e) => {

      if (e.target.parentElement.closest('.delete')){

        const popupContainer = e.target.closest('.card');
        console.log('Yes!')

        popupContainer.remove();

      }else{console.log('No')}

    })
  })


  const title = localStorage.getItem('projectTitle');
  const image = localStorage.getItem('projectImage');


  // console.log(`Project: ${title}, Image: ${image}`);

  const printNewPro = () => {
    const cards = document.querySelector('.cards')
    const html = `
      <div class="card">
        <div class="info">
          <img class="image-sample" src="${image}" alt="Priya Sharma" loading="eager"/>
        </div>
        <div class="group">
          <div class="card-text">
            <h2>${title}</h2>
            <p>Fashion & Tailoring</p>
          </div>
          <div class="three-container">
            <button class="three-dot"><i class="dot fas fa-ellipsis-vertical"></i></button>
          </div>
          <div class="display-popup"></div>
        </div>
        
      </div>
    
    `
    cards.innerHTML += html
  }
  
  // printNewPro()
  // printNewPro()
  // printNewPro()
 
  
})




