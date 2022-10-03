const vLikesMobile = document.getElementById('links-mobile');
const vMenu = document.getElementById('menu');
const vGoUp = document.getElementById('go-up');
const vImg = document.getElementById('img');
const vPrag = document.getElementById('parg');
const vLeft = document.getElementById('left');
const vRight = document.getElementById('right');
const vLeftMain = document.getElementById('left-main');
const vRightMain = document.getElementById('right-main');
const vTitle = document.getElementById('title');
const vInfo = document.getElementById('info');
const vForTheme = document.getElementById('for_theme');
const vForChange = document.getElementById('for-change');
const vTheme = document.getElementById('theme');
const vFeat = document.getElementById('features');
const vServ = document.getElementById('services');
const vPortofolio = document.getElementById('portofolio');
const vContact = document.getElementById('contact');
const vContactCol = document.getElementById('contact-col');
const vLanding = document.getElementById('landing');
const vForJs = document.getElementById('for-js');
const vSocial = document.querySelectorAll('.contact-contect .social i');
const vForSocial = document.querySelector('.social');


vForTheme.setAttribute('name', 'color-scheme');
vForTheme.setAttribute('content', 'light');

let ischanged = true

vForChange.addEventListener('click', () => {
  if (ischanged) {
    vForTheme.setAttribute('content', 'dark');
    vTheme.setAttribute('class', 'fa-solid  fa-moon theme-js');
    vLanding.setAttribute('class', 'land-js');
    vTheme.style.transform = 'rotate(210deg)';
    vFeat.style.backgroundColor = '#393939';
    vServ.style.backgroundColor = '#393939';
    vPortofolio.style.backgroundColor = '#393939';
    vContact.style.backgroundColor = '#393939';
    vContactCol.style.color = '#CCC';
    vForJs.style.color = "#EEE"
    vPrag.style.color = 'black'
    vTitle.style.color = 'black'
    ischanged = false
  } else {
    vForTheme.setAttribute('content', 'light');
    vTheme.setAttribute('class', 'fa-solid theme  fa-moon');
    vLanding.setAttribute('class', 'landing');
    vTheme.style.transform = 'rotate(0deg)';
    vTheme.style.transition = '.5s';
    vFeat.style.backgroundColor = '#f6f6f6';
    vServ.style.backgroundColor = '#f6f6f6';
    vPortofolio.style.backgroundColor = '#f6f6f6';
    vContact.style.backgroundColor = '#f6f6f6';
    vContactCol.style.color = '#2c4755';
    vForJs.style.color = "#7e7e7e"
    ischanged = true
  }
  for (let i = 0; i <= 2; i++) {
    vSocial[i].classList.toggle('js');
  }
});


let isClicked = true
vMenu.addEventListener('click', () => {
  if (isClicked) {
    setTimeout(() => {
      vLikesMobile.style.opacity = 1
    }, 200);
    vLikesMobile.style.transform  = 'translateY(370px)';
    isClicked = false
  } else {
    setTimeout(() => {
      vLikesMobile.style.opacity = 0
    }, 200);
    vLikesMobile.style.transform  = 'translateY(-400px)';
    isClicked = true
  }
})



window.addEventListener('scroll', () => {
  if (window.scrollY >= 700) {
    setTimeout(() => {
      vGoUp.style.opacity = 1
    }, 200);
    setTimeout(() => {
      vGoUp.style.display = 'flex';
    }, 500);
  } else {
    setTimeout(() => {
      vGoUp.style.opacity = 0
    }, 300);
    setTimeout(() => {
      vGoUp.style.display = 'none'
    }, 500);
  }
})


vGoUp.addEventListener('click', () => {
  vGoUp.style.transform = 'translateY(-80px)';
  window.scrollTo(0,0);
  setTimeout(() => {
    vGoUp.style.opacity = 0
  }, 500);
  setTimeout(() => {
    vGoUp.style.display = 'none'
    vGoUp.style.transform = 'translateY(0px)';
  }, 1000);
})


function infofilling(info) {
  fetch('info.json')
  .then(function (info) {
    return info.json()
  })
  .then(function (data) {
    vImg.src = data.careers[info].img
    vTitle.innerHTML = data.careers[info].title
    vPrag.innerHTML = data.careers[info].prag
  })
}


let counter = 0;

vLeft.addEventListener('click', () => {
  counter--;
  if (counter == -1) {
    counter = 2
  }
  infofilling(counter)
});

vRight.addEventListener('click', () => {
  counter++;
  if (counter == 3) {
    counter = 0
  }
  infofilling(counter)
});


vLeftMain.addEventListener('click', () => {
  counter--;
  if (counter == -1) {
    counter = 2
  }
  infofilling(counter)
});

vRightMain.addEventListener('click', () => {
  counter++;
  if (counter == 3) {
    counter = 0
  }
  infofilling(counter)
});

window.addEventListener('load', () => {
  infofilling(counter)
});


