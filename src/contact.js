function loadContact(){
    const content = document.getElementById('content');
  
    const contactMiddle = document.createElement('div');
    content.appendChild(contactMiddle);
    contactMiddle.classList.add('contact-middle');
  
    const contactp1 = document.createElement('div');
    contactMiddle.appendChild(contactp1);
    contactp1.classList.add('contact-p1');
    contactp1.textContent = '📞 123 456 789';
  
    const contactp2 = document.createElement('div');
    contactMiddle.appendChild(contactp2);
    contactp2.classList.add('contact-p2');
    contactp2.textContent = '🏠 Ceyhun Atuf Kansu Caddesi';
  
    const contactimg1 = document.createElement('img');
    contactMiddle.appendChild(contactimg1);
    contactimg1.classList.add('contact-img1');
  
  }

export {loadContact}; 