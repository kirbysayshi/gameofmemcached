var Transform = require('stream').Transform;

var rePageHeading = /A GAM(E|L) OF THRON(E|L)S [0-9]+/ig
var reAuthor = /[0-9]+\s+GEORGE R.R. MARTIN/ig
var reSection = /^[a-z]+$/mi
var reLines = /[\r\n]+/g
var reEllipses = /\.\s+\.+\s+\./g

module.exports = function(opts) {
  var p = new Transform(opts);

  p._transform = function(data, encoding, done) {
    //console.log('---', encoding, data);
    data = data
      .toString()
      .replace(rePageHeading, '')
      .replace(reAuthor, '')
      .replace(reSection, '')
      .replace(reLines, '\n')
      .replace(reEllipses, '...');
    this.push(data);
    done();
  }

  return p;
}
