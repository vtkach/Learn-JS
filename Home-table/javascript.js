window.onload = function (){
    var table = document.querySelector('table'),
        copy_table;
        document.getElementById('addTable').addEventListener('click',function(){
            copy_table = table.cloneNode(true),
                Array.prototype.forEach.call(copy_table.rows,function(i){
                    var row = i;
                    var tmp = row.cells[1].innerHTML;
                    row.cells[1].innerHTML=row.cells[2].innerHTML;
                    row.cells[2].innerHTML=tmp;
                    document.body.appendChild(copy_table);
                    copy_table.classList.add('t2');
                })
        },false);
        document.getElementById('addTr').addEventListener('click',function() {
            copy_table = table.cloneNode(true);
            Array.prototype.call(copy_table.rows,function(i){
                var row =i;
                var tmp = row.cells[0].cloneNode(true);
                tmp.innerHTML=parseFloat(row.cells[1].innerHTML + row.cells[2].innerHTML);
                row.appendChild(tmp);
            })
            copy_table.rows[0].cells[3].innerHTML = 4;
            document.body.appendChild(copy_table);
        })
}

