var rest=document.getElementById('test');
var inputAdd = document.getElementById('addClass');
inputAdd.addEventListener('click',function(event){
    test.classList.add('red');
});
var removeClass = document.getElementById('removeClass');
removeClass.addEventListener('click',function(event){
    test.classList.remove('red');
});
var addTextNode = document.getElementById('addTextNode');
addTextNode.addEventListener('click',function(event){
    test.textContent+=" Добавленый текст";
});
var addElement = document.getElementById('addElement');
var newH = document.createElement('h1');
newH.innerHTML = 'Добавленый елемент';
addElement.addEventListener('click',function(event){
    test.appendChild(newH)
});
var removeElement = document.getElementById('removeElement');
removeElement.addEventListener('click',function(event){
    test.removeChild(newH);
});



