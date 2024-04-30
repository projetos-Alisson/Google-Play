const images = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let id_img = 0;

function carrosel() {
    id_img++
  
    if(id_img > img.length - 1){
        id_img = 0;
    }

    images.style.transform = `translateX(${id_img * 500}px)`;
}

setInterval(carrosel,1800)