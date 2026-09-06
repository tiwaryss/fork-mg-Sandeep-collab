function a() {
  var b = 10;  
  c();

  function c() {
    var b = 100;
    console.log(b);
  }
}

a();
console.log(b);