themes = document.querySelectorAll('.theme');
theme = document.querySelector('.theme');
function getData(){
    themes.forEach(them => {
        color = them.dataset.themecolor;
        them.style.background = color;

    });
 
}
getData();
themes.forEach(tm =>{
    tm.addEventListener('click', ()=>{
        document.body.style.background = tm.dataset.themecolor;
        document.querySelector('main header').style.background = tm.dataset.themecolor;
        localStorage.setItem('theme', tm.dataset.themecolor);
    })
})

onload = function(){
    document.body.style.background = localStorage.getItem('theme');
    document.querySelector('main header').style.background = localStorage.getItem('theme');
}
//theme = document.querySelector('.theme');
