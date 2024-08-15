const btnRedirect = document.getElementById('btn-video-library');

btnRedirect.addEventListener("click", ()=>{
    window.location.href = "./html/video-library.html";
});

let newPhoto = ()=>{
    let carousel = document.getElementById('carousel');
    for(let i = 1; i <= 42; i++){
        carousel.innerHTML += `
        <div class="carousel-item">
            <img width="1100vh" src="assets/img/carousel/foto${i}.jpg" class="d-block" alt="...">
        </div>
        `
    }
}

newPhoto();