var Transform = require('stream').Transform;

var reQuote = /"/g;

module.exports = function(opts) {
  var p = new Transform(opts);

  p._transform = function(data, encoding, done) {

    var chunk = data.toString();
    var count = 0;
    var match;

    while(match = reQuote.exec(chunk)) {
      count += 1;
    }

    if (count === 1) chunk = chunk.replace(reQuote, '');

    this.push(chunk);
    done();
  }

  return p;
}
