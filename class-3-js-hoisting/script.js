function a() {
  c();

  function c() {
    var b = 100;
    console.log(b);
  }
}

var b = 10;

a();
console.log(b);