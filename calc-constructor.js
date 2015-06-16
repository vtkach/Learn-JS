function Calc(a,b){
    this.a=a;
    this.b=b;
    this.add = function(){
        return this.a + this.b;
    }
    this.diff = function(){
        return this.a - this.b;
    }
    this.multiply=function(){
        return this.a * this.b ;
    }
    this.divide=function() {
        return this.a / this.b;
    }

    this.modulo=function(){
        return this.a % this.b;
    }
}
var calc = new Calc(1,5);
alert(calc.add());
alert(calc.diff());
alert(calc.multiply());
alert(calc.divide());
alert(calc.modulo());