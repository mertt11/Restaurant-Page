function loadItem(url,title,text){

    const item=document.createElement('div');
    item.classList.add('item');

    const foodimg=document.createElement('img');
    foodimg.src=url;
    foodimg.classList.add('foodimg');
    item.appendChild(foodimg);

    const foodTitle=document.createElement('h2');
    foodTitle.textContent=title;
    foodTitle.classList.add('foodtitle');
    item.appendChild(foodTitle);

    const foodText = document.createElement('p');
    foodText.textContent=text;
    foodText.classList.add('foodtext');
    item.appendChild(foodText);

    return item;
}

function loadMenu() {
    const content = document.getElementById('content');
  
    const menuMiddle = document.createElement('div');
    content.appendChild(menuMiddle);
    menuMiddle.classList.add('menu-middle');

    menuMiddle.appendChild(loadItem('./images/alinazik.jpg','Alinazik','tereyağı, sarımsak, kuşbaşı et,biber salçası, toz kırmızı biber, tuz, yogurt'));

    menuMiddle.appendChild(loadItem('./images/beyti.jpg','Beyti','tereyağı, sarımsak, kuşbaşı et,biber salçası, toz kırmızı biber, tuz, yogurt'));

    menuMiddle.appendChild(loadItem('./images/etdoner.png','Et Döner','tereyağı, sarımsak, kuşbaşı et,biber salçası, toz kırmızı biber, tuz, yogurt'));

    menuMiddle.appendChild(loadItem('./images/iskender.jpg','Iskender','tereyağı, sarımsak, kuşbaşı et,biber salçası, toz kırmızı biber, tuz, yogurt'));

    menuMiddle.appendChild(loadItem('./images/kebap.jpg','Kebap','tereyağı, sarımsak, kuşbaşı et,biber salçası, toz kırmızı biber, tuz, yogurt'));

    menuMiddle.appendChild(loadItem('./images/manti.jpg','Mantı','tereyağı, sarımsak, kuşbaşı et,biber salçası, toz kırmızı biber, tuz, yogurt'));
}

export {loadMenu}; 