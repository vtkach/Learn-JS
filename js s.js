//Создать кнопку, по нажатию на которую, появится копия исходной таблицы, но с порядком полей: 1, 3, 2.
//Применить для новой таблицы стили t2

window.onload = function (){
    var table = document.getElementsByTagName('table')[0],
        copy_table,
        addTable = document.getElementById('addTable').addEventListener('click',function(){
            copy_table = table.cloneNode(true),
            [].forEach.call(copy_table.rows,function(i){
                var row = i;
                var tmp = row.cells[1].innerHTML;
                row.cells[1].innerHTML=row.cells[2].innerHTML;
                row.cells[2].innerHTML=tmp;
                document.body.appendChild(copy_table);
                copy_table.classList.add('t2');
                })
        },false);
};
