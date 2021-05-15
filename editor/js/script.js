let editor = document.getElementById('editor'),
    runBtn = document.getElementById('run'),
    deleteBtn = document.getElementById('delete'),
    resaultArea = document.querySelector('.resultArea');


runBtn.addEventListener('click',function(){
    let code = editor.value;
    resaultArea.innerHTML = code;
    localStorage.setItem('code', editor.value);
});
deleteBtn.addEventListener('click', function(){
    editor.value = "";
    resaultArea.innerHTML = "";
    localStorage.removeItem('code');
});

onload = function(){
    resaultArea.innerHTML = localStorage.getItem('code');
    editor.innerHTML = localStorage.getItem('code');
}

