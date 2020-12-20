window.addEventListener('DOMContentLoaded', initFun);

function initFun() {
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 25,
    grabCursor: true,
    navigation: {
      nextEl: '#tab-next',
      prevEl: '#tab-prev',
    },
  });

}


function loadDoc(fileName, parentId) {
  let pathname = `partial/${fileName}`;
  let xhttp = new XMLHttpRequest();
  let method = 'GET';

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(parentId).innerHTML = this.responseText;
    }
  };
  xhttp.open(method, pathname, true);
  xhttp.send();
}

loadDoc('manCart1-1.html', 'root-slot');