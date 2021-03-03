const docNames = [
  'recipient',
  'add-store',
  'payment',
  'reciept',
  'order',
];



function initFun() {
  // let swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 3,
  //   spaceBetween: 25,
  //   grabCursor: true,
  //   navigation: {
  //     nextEl: '#tab-next',
  //     prevEl: '#tab-prev',
  //   },
  // });

  setTimeout(
    console.log.bind(
      console,
      'please use loadDoc( /** Array<string> */ docNames[idx])'
    )
  );
}

function loadDoc(fileName, parentId = 'root-slot') {
  let pathname = `./partial/${fileName}.html`;
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

// loadDoc(docNames[0]);