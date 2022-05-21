const recent = document.getElementById('firstTab');
const trending = document.getElementById('secondTab');
const mostViews = document.getElementById('thirdTab');
recent.onclick=()=>{
    recent.classList.toggle('red-tab')
}
trending.onclick=()=>{
    trending.classList.toggle('red-tab')
}
mostViews.onclick=() =>{
    mostViews.classList.toggle('red-tab')
}