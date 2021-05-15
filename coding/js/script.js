let select = document.getElementById('select'),
    textCode = document.getElementById('textCode'),
    reasult = document.getElementById('reasult');
    console.log(select.value)

function coding(){
    if(select.value == 'encode'){
        reasult.value = btoa(textCode.value);
    }else if(select.value == 'decode'){
        reasult.value = atob(textCode.value);
    }else{
        reasult.value = '';   
    }
}
textCode.addEventListener('input', ()=>{
    coding(); 
})
select.addEventListener('change', ()=>{
    coding()
});