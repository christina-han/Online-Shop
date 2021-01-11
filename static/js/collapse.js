let collapse = document.getElementsByClassName('test-collapse');

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function(){
        let content = this.firstElementChild;
        let toShow = content.classList.contains('collapse-hide') ? true : false;
        if (toShow) {
            setTimeout(function(){
                content.style.display = 'block';
            }, 0);
        } else {
            setTimeout(function(){
                content.style.display = 'none';
            }, 300);
        }
        content.classList.toggle('collapse-hide')
    });
}
