///*В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
//
//    var obj = {
//        className: 'open menu'
//    }
//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:*/
//
//function addClass(obj,cls){
//    var addCls = obj.className ? obj.className.split(' ') : [];
//   for(var i = 0;i<addCls.length;i++){
//       if(addCls[i] == cls){
//           return;
//       }
//
//           addCls.push(cls);
//           obj.className = addCls.join(' ')
//
//   }
//}
//var obj = {
//    className: 'open menu'
//};
//
//addClass(obj, 'new');
//addClass(obj, 'open');
//addClass(obj, 'me');
//alert(obj.className)
//
//
//
////Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
////
////То есть, дефисы удаляются, а все слова после них получают заглавную букву.
//
//function camelize(str){
//    var split = str.split('-');
//    for(var i = 0;i<split.length;i++){
//        split[i]=split[i].charAt(0).toUpperCase() + split[i].slice(1);
//    }
//    return split.join('')
//}
//alert( camelize("background-color") ); // backgroundColor
//alert( camelize("list-style-image") ); // listStyleImage
//alert( camelize("-webkit-transition") ); // WebkitTransition
//
//
//
////Напишите функцию removeClass(obj, cls), которая удаляет класс cls
//var obj = {
//    className: 'open menu'
//};
//
//function removeClass(obj,cls){
//    var clsNew = obj.className.split(' ');
//    for(var i = 0;i<clsNew.length;i++){
//        if(clsNew[i]==cls){
//            clsNew.splice(i, 1);
//            i--;
//        }
//    }
//    obj.className = clsNew.join(' ');
//
//}
//
//removeClass(obj, 'blabla');
//removeClass(obj, 'menu')
//alert(obj.className);
//

//function filterRangeInPlace(arr, a, b){
//   for(var i=0;i<arr.length;i++){
//   var sum = arr[i];
//       if(a<sum || sum<b){
//           arr.splice(i--,1)
//       }
//       return sum;
//   }
//}
//var arr =[5,3,8,1]
//filterRangeInPlace(arr,1,4);
//alert(arr)
//


////Как отсортировать массив чисел в обратном порядке?
//var arr = [5, 2, 1, -10, 8];
//function sortNumber(a, b) {
//    if (a > b) return 1;
//    if (a < b) return -1;
//}
//arr.sort(sortNumber).reverse();
//alert(arr)



////Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
////    Исходный массив не должен меняться.
//var arr = ["HTML", "JavaScript", "CSS"];
//
//var arrSorted = arr.slice().sort();
//
//alert( arrSorted ); // CSS, HTML, JavaScript
//alert( arr ); // HTML, JavaScript, CSS (без изменений)
//



var arr = [1, 2, 3, 4, 5,-5,-8,-12];
function remove(){
   return Math.random()*arr;

}

arr.sort(remove);

alert( arr );








