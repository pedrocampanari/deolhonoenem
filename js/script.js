const btnRedirect = document.getElementById('btn-video-library');

btnRedirect.addEventListener("click", ()=>{
    window.location.href = "./html/video-library.html";
});

let newPhoto = ()=>{
    let carousel = document.getElementById('carousel');
    for(let i = 1; i <= 2; i++){
        carousel.innerHTML += `
        <div class="carousel-item">
            <img src="assets/img/photoLibrary/foto${i}.jpeg" class="d-block w-100" alt="...">
        </div>
        `
    }
}

newPhoto();