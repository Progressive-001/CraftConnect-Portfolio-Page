
document.addEventListener('DOMContentLoaded', () => {

  const sideBar = document.querySelector('.sidebar');
  const iconSideBar = document.querySelector('.icon-sidebar');
  const logoIcon = document.querySelectorAll('.logo-icon');
  const date = document.querySelector('.date');
  const displayPopup = document.querySelectorAll('.display-popup');
  const loadingFill = document.querySelector('#loadingFill');
  const loadingBar = document.querySelector('.loading-bar')
  const toggle = document.querySelector("#customToggle");
  const browserBtn = document.querySelector('#browserBtn');
  const fileInput = document.querySelector('#fileInput');
  const uploadedFileContainer = document.querySelector('.uploaded');
  const grouped1 = document.querySelector('.grouped-1')
  const uploadingFileContainer = document.querySelector('.uploading');




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


   // delete uploaded file

  uploadedFileContainer.addEventListener('click', (e) => {

    if (e.target.closest('.delete-img')){

      const uploadedFileContainer = e.target.closest('.group-uploadedContent');

      uploadedFileContainer.remove();

    }else{console.log('Error')}

  })

    // delete uploaded file

  grouped1.addEventListener('click', (e) => {

    if (e.target.closest('.fa-circle-xmark')){

      const uploadedFileContainer = e.target.closest('.group-uploadedContent');

      uploadedFileContainer.innerHTML = " ";

    }else{console.log('Error')}

  })


 

  toggle.addEventListener("click", () => {

    toggle.classList.toggle("active");

    const isOn = toggle.classList.contains("active");
    console.log(isOn ? "ON" : "OFF");
  });


  browserBtn.addEventListener('click', () => {
    fileInput.click()
  })

  fileInput.addEventListener('change', () => {

    const files = fileInput.files[0];

 

    console.log(files.name)
    

    uploadingFile()

    loadingFill.style.transition = 'none'
    loadingFill.style.width = '0%'; // Fills in 3 seconds

    const fileSizeMb = files.size / (1024 * 1024); 
    const duration = Math.min(fileSizeMb, 5)
    grouped1.style.visibility = 'visible'
  
    setTimeout(() => {
      loadingFill.style.transition = `width ${duration}s ease`
      loadingFill.style.width = '100%'
      loadingBar.style.visibility = 'visible'
     
    }, 50);


    setTimeout(() => {

      uploadedFile()

      uploadedFileContainer.style.visibility = 'visible'

    }, duration * 1000 + 100)
  
  })


  const uploadingFile = () => {

    const files = fileInput.files[0];
    const name = files.name

    for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];

      const uploadingHtmlTemplate = `
        <div class="group-uploadedContent">
          <li class="uploading-file">${file.name}</li>
          <i class="far fa-circle-xmark"></i>
        </div>
      `
      uploadingFileContainer.innerHTML = uploadingHtmlTemplate;
    }
  }
  

  const uploadedFile = () => {
    const files = fileInput.files[0];
    const name = files.name

    for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];
    // uploadedFileContainer.innerHTML =  file.name;
       

      const uploadedHtmlTemplate = `
        <div class="group-uploadedContent">
          <li class="uploaded-file">${file.name}</li>
          <img class="delete-img" src="../asset/Delete-icon.svg" alt="">
        </div>
      `
      uploadedFileContainer.innerHTML += uploadedHtmlTemplate;
    }
  }
 
})




