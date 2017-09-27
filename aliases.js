const path = require('path');

const aliases = [
    'actions',
    'components',
    'containers',
    'reducers',
    'store',
    'styles',
    'routes'
].reduce((acc, dir) => {
    acc[dir] = path.resolve('app', dir);
    console.log(`define alias for ${dir} => ${acc[dir]}`);
    return acc;
}, {});

aliases.package_json = path.join(__dirname, 'package.json');

module.exports = aliases;
