//Создать кнопку, по нажатию на которую, появится копия исходной таблицы, но с порядком полей: 1, 3, 2.
//Применить для новой таблицы стили t2

window.onload = function (){
    var table = document.querySelector('table'),
        copy_table;
        document.getElementById('addTable').addEventListener('click',function(i){
            copy_table = table.cloneNode(true);
            var e =document.querySelectorAll('#q tbody>tr>td');
                var s =document.querySelectorAll('#q tr:first-child');
                var q =document.querySelectorAll('#q tr>td:nth-of-type(3)');
            copy_table.innerHTML = q
                document.body.appendChild(copy_table);
                copy_table.classList.add('t2');
        },false);
        document.getElementById('addTr').addEventListener('click',function() {
            copy_table = table.cloneNode(true);
            [].forEach.call(copy_table.rows,function(i){
                var row =i;
                var tmp = row.cells[0].cloneNode(true);
                tmp.innerHTML=parseFloat(row.cells[1].innerHTML + row.cells[2].innerHTML);
                row.appendChild(tmp);
            })
            copy_table.rows[0].cells[3].innerHTML = 4;
            document.body.appendChild(copy_table);
        })
}

