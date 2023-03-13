  function loadHome() {
    const content = document.getElementById('content');
    
    const homeMiddle = document.createElement('div');
    homeMiddle.classList.add('home-middle');
    content.appendChild(homeMiddle);
  
    const homep1 = document.createElement('div');
    homeMiddle.appendChild(homep1);
    homep1.classList.add('home-p1');
    homep1.textContent = 'Best ocakbaşı in your country';
  
    const homep2 = document.createElement('div');
    homeMiddle.appendChild(homep2);
    homep2.classList.add('home-p2');
    homep2.textContent = 'Made with passion since 1964';
  
    const homeimg1 = document.createElement('img');
    homeMiddle.appendChild(homeimg1);
    homeimg1.classList.add('home-img1');
  
    const homep3 = document.createElement('div');
    homeMiddle.appendChild(homep3);
    homep3.classList.add('home-p3');
    homep3.textContent = 'Order online or visit us!';
    
  }

export {loadHome}; 