const bottomToTop = document.getElementById('bottom_to_top');

window.onscroll = function(){
    if (window.scrollY === 0){
        bottomToTop.style.display = 'none';
    }
    else{
        bottomToTop.style.display = 'block';
    }
}