function Clock(selector) {
    var elementClock = document.getElementById(selector),
        formatClock='time',
        currentTime,
        privateMethods={
            time:setTime,
            date:setDate
        };
    function setTime(){
        currentTime=new Date;
        return [currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds()]
    };
    function setDate(){
        currentTime=new Date;
        return [currentTime.getFullYear(),currentTime.getMonth()+1,currentTime.getDay()]
    };
    function n(number){
        return (number < 10) ? '0' + number : number;
    }
    function format(arr){
        return arr.map(n).join(':');
    }
    function int(){
        elementClock.innerHTML = format(privateMethods[formatClock]());
    }
    function render(){
        setInterval(int,1000);
    }
    conteiner.addEventListener('contextmenu',function (e) {
        e.preventDefault();
        return formatClock = (formatClock === 'time') ? 'date' : 'time';
    }, false);
        render();
};
function dragAndDrop(selector) {
    var elementDrag = document.getElementById(selector);

    elementDrag.style.position = 'absolute';

    elementDrag.addEventListener('mousedown', function (e) {
        var clockOffsetX = e.offsetX,
            clockOffsetY = e.offsetY,
            moveElement;

        moveElement = function (e) {
            elementDrag.style.top = e.clientY - clockOffsetY + 'px';
            elementDrag.style.left = e.clientX - clockOffsetX + 'px';
        };

        document.addEventListener('mousemove', moveElement, false);
        document.addEventListener('mouseup', function (e) {
            document.removeEventListener('mousemove', moveElement, false);
        }, false)

    }, false);

};
dragAndDrop('conteiner');
var clock = new Clock('conteiner');
