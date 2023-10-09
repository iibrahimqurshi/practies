// external

function multiplyBy() {
  num1 = document.getElementById("firstnumber").value;
  num2 = document.getElementById("secondnumber").value;

  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstnumber").value;
  num2 = document.getElementById("secondnumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}



//////////////////////////////////////////////////////////////////////////
class Shape{
  calculteArea(){

    throw new Error("Method 'calculateArea() must be overridden in subclasses'")
  }
}

class Circle extends Shape{
  constructor(radius){
    super();
    this.radius = radius;
  }


  calculteArea(){
    return Math.PI * this.radius * this.radius;
  }


}

class Reactangle extends Shape(){
  constructor(width,height){
    super();
    this.width =width;
    this.height = height;
  }

  calculteArea(){
    return this.width * this.height;
  }
}

///////////////////////////////////////////////////////


function fun(){

  document.getElementById("div11").removeAttribute("style");
  document.getElementById("div22").removeAttribute("style");
}

function reverseInPlace(str) {
  var words = [ ];
  words = str.split("\s+");
  var result = "";
  for (var i = 0; i < words.length; i++) {
      return result += words[i].split('').reverse().join('');
  }
}
console.log(reverseInPlace("abd fhe kdj"))
