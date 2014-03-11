var Transform = require('stream').Transform;

var rePuncutation = /[0-9a-zA-Z"'](?:\.|\!|\?)("?\s|\n|\r)+/;

module.exports = function(opts) {
  var p = new Transform(opts);


  var buffer = '';

  p._transform = function(data, encoding, done) {
    buffer += data.toString();

    var match;
    var out;

    while((match = rePuncutation.exec(buffer))) {
      out = buffer.substr(0, match.index + match[0].length);
      buffer = buffer.substr(match.index + match[0].length);
      this.push(out.trim() + '\n');
    }

    done();
  }

  return p;
}
