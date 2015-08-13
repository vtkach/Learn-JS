function Calculator(){
    var result;
    this.add=function (a,b){
    result = +a + +b;
}
    this.diff=function (a,b){
        result = +a - +b;
    }
    this.myltiply=function (a,b){
        result = +a * +b;
    }
    this.divide=function (a,b){
        result = +a / +b;
    };
    this.result=function(){
        return result;
    };
}