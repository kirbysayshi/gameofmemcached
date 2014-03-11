var Transform = require('stream').Transform;

module.exports = function(opts) {
  var p = new Transform(opts);

  if (!('limit' in opts)) {
    throw new Error('Required option `limit` was not specified');
  }

  p._transform = function(data, encoding, done) {

    if (data.toString().length <= opts.limit) {
      this.push(data);
    }

    done();
  }

  return p;
}
