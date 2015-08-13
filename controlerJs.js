function Controler(){
    var model=new Calculator,
        firstInput,
        secondInput,
        outPut,
        plus,
        ol;

    this.init=function(){
        plus=document.getElementById('plus');
        plus.addEventListener('click',onPlusClick.bind(this),false);
        firstInput=document.getElementById('inputFirst');
        secondInput=document.getElementById('secondInput');
        outPut=document.getElementById('result');
    };
    function onPlusClick (e) {
        model.add(firstInput.value, secondInput.value);
        sum.call(this.model.result)

    };
    function sum(value){
        outPut.value=value;
    }
    return this;
}