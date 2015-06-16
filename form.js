function Profile (surname,firstname,patronymic,age,date_update,date_creat) {
    this.surname = surname;
    this.firstname = firstname;
    this.patronymic = patronymic;
    this.age = age;
    this.data_update = date_update;
    this.date_creat = date_creat;
    get firstName(){
        return this.firstName = firstName
    }
}
var a = new Profile();
var a={
    get name(){return surname='вася'
}};
alert(a.name)
//}
//
//var profile = new Profile();
//profile.fullProf = 'чак норис';
//alert(profile.surname);

//var user = {
//    firstName: "",
//    surname: "",
//    function()full{
//
//    get fullName() {
//        return this.firstName + ' ' + this.surname;
//    },
//
//    set fullName(value) {
//        var split = value.split(' ');
//        this.firstName = split[0];
//        this.surname = split[1];
//    }
//};}}
//
//alert( user.fullName );
//
//user.fullName = "Петя Иванов";
//alert( user.firstName );
//alert( user.surname );
//var t = new user;
//t.fullName = "олег тягныбок"
//alert(t.fullName);
function Profile (surname,firstname,patronymic,age,date_update,date_creat) {
    this.surname = surname;
    this.firstname = firstname;
    this.patronymic = patronymic;
    this.age = age;
    this.data_update = date_update;
    this.date_creat = date_creat;
    get: function() {
            return this.firstname + ' ' + this.surname;}
