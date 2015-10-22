'use strict';

var del   = require('del')
    ,paths = require('./paths.js');

del([paths.build.pdf, paths.build.word, paths.build.latex]);
