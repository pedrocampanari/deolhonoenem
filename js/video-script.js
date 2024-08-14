const params = new URLSearchParams(window.location.search);
const src = params.get('src');
const title = params.get('title');

const VideoTitle = document.getElementById('title').innerText += " " + title;
const VideoSource = document.getElementById('videoTag').setAttribute("src", `https://www.youtube.com/embed/${src}`);

const mapAnchor = document.getElementById('mentalMap').innerText += ": '" + title + "'";
const mapSource = document.getElementById('mentalMap').setAttribute("href", `../assets/mentalMap/${src}.pdf`);


console.log(src, title);

document.getElementById('btn-back').addEventListener("click", ()=>{
    window.location.href = './video-library.html';
});