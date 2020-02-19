var Jet = function (color, size) {

  this.color = color;
  this.size = size;

  this.fly = function () {
    console.log('whoosh!');
    this.color = color;
    this.size = size;

    this.takeOff = function () {
      console.log('lift off!');
    }
  }
}

module.exports = Jet;
