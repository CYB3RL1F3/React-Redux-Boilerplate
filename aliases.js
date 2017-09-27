const path = require('path');
const fs = require('fs');

const dirs = [];
fs.readdirSync(`${__dirname}/app`).forEach(file => {
    if (!(/(\.)/.test(file)) || (/(\.js)/.test(file) && file !== 'index.js')) {
        dirs.push(file.replace('.js', ''));
    }
});

const aliases = dirs.reduce((acc, dir) => {
    acc[dir] = path.resolve('app', dir);
    return acc;
}, {});

aliases.assets = path.join(__dirname, 'assets');
aliases.package_json = path.join(__dirname, 'package.json');

module.exports = aliases;
