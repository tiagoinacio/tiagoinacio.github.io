var fs = require('fs');
var minify = require('html-minifier').minify;

var index = fs.readFileSync('index.html', 'utf-8');
var result = minify(index, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true
});

fs.writeFileSync('dist/index.html', result);
