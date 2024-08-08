const params = new URLSearchParams(window.location.search);
const src = params.get('src');
const title = params.get('title');

const VideoTitle = document.getElementById('title').innerText += " " + title;
const VideoSource = document.getElementById('videoTag').setAttribute("src", `../assets/videoLibrary/${src}`);

console.log(src, title);

document.getElementById('btn-back').addEventListener("click", ()=>{
    window.location.href = './video-library.html';
});