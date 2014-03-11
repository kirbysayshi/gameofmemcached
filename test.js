
var fs = require('fs');
var precleaner = require('./precleaner');
var sentence = require('./sentence');
var magical = require('./magical');
var quotefixer = require('./quotefixer');
var limiter = require('./limiter');
var memcacher = require('./memcacher');

var opts = { limit: 140 };

var vol1 = processor(fs.createReadStream('./corpus/vol01.txt'))
var vol2 = processor(fs.createReadStream('./corpus/vol02.txt'))
var vol3 = processor(fs.createReadStream('./corpus/vol02.txt'))

vol1.on('end', function() {
  vol2.pipe(fs.createWriteStream('./tweets.txt', { flags: 'a' }));
})

vol2.on('end', function() {
  vol3.pipe(fs.createWriteStream('./tweets.txt', { flags: 'a' }));
})

vol1.pipe(fs.createWriteStream('./tweets.txt', { flags: 'a' }));

process.stdout.on('error', process.exit);

function processor(input) {
  return input
    .pipe(precleaner(opts))
    .pipe(sentence(opts))
    .pipe(magical(opts))
    .pipe(quotefixer(opts))
    .pipe(limiter(opts))
    .pipe(memcacher(opts))
}
