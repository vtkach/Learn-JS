window.onload=function() {
    var table = document.getElementsByTagName('table');
var add=document.getElementById('addTable').addEventListener('click',addTabl,false);
    function addTabl(e){
        table = Array.prototype.slice.call(table);
        table.forEach(function(i) {
            table +=table.childNodes;
            document.body.appendChild(table)

        });

    }
}