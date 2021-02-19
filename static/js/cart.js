const ProductList = [
    {
        id: '1',
        nameID: 'slide1',
        title: `猜你喜歡`,
        img: {
            img1: '/static/images/small.png',
            img2: '/static/images/small.png',
            img3: '/static/images/small.png',
            
        },
        name: {
            name1: '個性長版外套',
            name2: '個性長版外套',
            name3: '個性長版外套',
        
        },
        price: {
            price1: '780',
            price2: '780',
            price3: '780',
        }
    },
    {
        id: '2',
        nameID: 'slide2',
        title: `搭配商品`,
        img: {
            img1: '/static/images/small.png',
            img2: '/static/images/small.png',
            img3: '/static/images/small.png',
            img4: '/static/images/small.png',
            img5: '/static/images/small.png',
            img6: '/static/images/small.png',
            img7: '/static/images/small.png',
            img8: '/static/images/small.png',
           
           
        },
        name: {
            name1: '個性長版外套',
            name2: '個性長版外套',
            name3: '個性長版外套',
            name4: '個性長版外套',
            name5: '個性長版外套',
            name6: '個性長版外套',
            name7: '個性長版外套',
            name8: '個性長版外套',
        
        },
        price: {
            price1: '780',
            price2: '780',
            price3: '780',
            price4: '780',
            price5: '780',
            price6: '780',
            price7: '780',
            price8: '780',
        }
    },
    {
        id: '3',
        nameID: 'slide3',
        title: `瀏覽紀錄`,
        img: {
            img1: '/static/images/small.png',
            img2: '/static/images/small.png',
            img3: '/static/images/small.png',
            img4: '/static/images/small.png',
            img5: '/static/images/small.png',
            img6: '/static/images/small.png',
            img7: '/static/images/small.png',
            img8: '/static/images/small.png',
        },
        name: {
            name1: '個性長版外套',
            name2: '個性長版外套',
            name3: '個性長版外套',
            name4: '個性長版外套',
            name5: '個性長版外套',
            name6: '個性長版外套',
            name7: '個性長版外套',
            name8: '個性長版外套',
        },
        price: {
            price1: '780',
            price2: '780',
            price3: '780',
            price4: '780',
            price5: '780',
            price6: '780',
            price7: '780',
            price8: '780',
        }
    },
]

function renderProductList() {
    ProductList.forEach(product => {
        const card = createProductCardElement(product);

        $("#slider").append(card);
    });
}

function createProductCardElement(product) {
    const cardElement = `
    <div class="container">
    <p class="slider-content">${product.title}</p>
    <div class="slider">

      <div id="${product.nameID}" class="items" style="transform: translate3d(0px, 0px, 0px); transition: transform 400ms ease 0s">
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img1}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name1}</p>
              <p class="slide-price">${product.price.price1}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img2}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name2}</p>
              <p class="slide-price">${product.price.price2}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img3}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name3}</p>
              <p class="slide-price">${product.price.price3}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img4}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name4}</p>
              <p class="slide-price">${product.price.price4}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img5}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name5}</p>
              <p class="slide-price">${product.price.price5}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img6}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name6}</p>
              <p class="slide-price">${product.price.price6}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img7}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name7}</p>
              <p class="slide-price">${product.price.price7}</p>
          </div>
        </div>
        <div class="item">
          <div class="child"><img class="slide-img" src="${product.img.img8}" alt=""></div>
          <div class="footer">
              <img class="love" src="/static/images/love-icon.png" alt="">
              <p class="slide-title">${product.name.name8}</p>
              <p class="slide-price">${product.price.price8}</p>
          </div>
        </div>
        
       
      </div>
      <div class="buttons">
        <div id="left"><img class="l-icon" src="/static/images/slide-arrow-l.png" alt=""></div>
        <div id="right"><img class="r-icon" src="/static/images/slide-arrow-r.png" alt=""></div>
      </div>
    </div>
  </div>

  `;
    return cardElement;
}

renderProductList();




// $( document ).ready(function() {
  
//         let slider = $('.slider .items');
//         let items = $('.slider .items .item .child')
//         const leftButton = $('#left')
//         const rightButton = $('#right')
        
//         let scrollPos = 0
//         if (scrollPos >= 0) leftButton.hide()
        
//         leftButton.click(function() {
//           scrollPos += slider.width();
//           if (scrollPos >= 0) {
//             leftButton.hide()
//             scrollPos = 0
//           }
//           rightButton.show()
//           slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
//         });
      
//         rightButton.click((e) => {
//           scrollPos -= slider.width();
//           if (scrollPos <= -(items.innerHeight() - 2) * 15) rightButton.hide()
//           leftButton.show()
//           slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
//         });
      
//       });


      $("#slide1").ready(function() {
  
        let slider = $('.slider .items');
        let items = $('.slider .items .item .child')
        const leftButton = $('#left')
        const rightButton = $('#right')
        
        let scrollPos = 0
        if (scrollPos >= 0) leftButton.hide()
        
        leftButton.click(function() {
          scrollPos += slider.width();
          if (scrollPos >= 0) {
            leftButton.hide()
            scrollPos = 0
          }
          rightButton.show()
          slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
        });
      
        rightButton.click((e) => {
          scrollPos -= slider.width();
          if (scrollPos <= -(items.innerHeight() - 2) * 15) rightButton.hide()
          leftButton.show()
          slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
        });
      
      });

      $("#slide2").ready(function() {
  
        let slider = $('.slider .items');
        let items = $('.slider .items .item .child')
        const leftButton = $('#left')
        const rightButton = $('#right')
        
        let scrollPos = 0
        if (scrollPos >= 0) leftButton.hide()
        
        leftButton.click(function() {
          scrollPos += slider.width();
          if (scrollPos >= 0) {
            leftButton.hide()
            scrollPos = 0
          }
          rightButton.show()
          slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
        });
      
        rightButton.click((e) => {
          scrollPos -= slider.width();
          if (scrollPos <= -(items.innerHeight() - 2) * 15) rightButton.hide()
          leftButton.show()
          slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
        });
      
      });
      $("#slide3").ready(function() {
  
        let slider = $('.slider .items');
        let items = $('.slider .items .item .child')
        const leftButton = $('#left')
        const rightButton = $('#right')
        
        let scrollPos = 0
        if (scrollPos >= 0) leftButton.hide()
        
        leftButton.click(function() {
          scrollPos += slider.width();
          if (scrollPos >= 0) {
            leftButton.hide()
            scrollPos = 0
          }
          rightButton.show()
          slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
        });
      
        rightButton.click((e) => {
          scrollPos -= slider.width();
          if (scrollPos <= -(items.innerHeight() - 2) * 15) rightButton.hide()
          leftButton.show()
          slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
        });
      
      });




