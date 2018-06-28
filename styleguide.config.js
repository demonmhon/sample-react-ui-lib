const path = require('path');
const pkg = require('./package.json');

const pkgName = pkg.name;
const pkgVersion = pkg.version;

module.exports = {
    styleguideDir: 'public',
    title: `${pkgName} | ${pkgVersion}`,
    editorConfig: {
        theme: 'material'
    },
    pagePerSection: false,
    sections: [
        {
            name: 'Components',
            components: [
                path.resolve(__dirname, 'src/components/Message', 'Message.js')
            ]
        }
    ],
    webpackConfig: require('./webpack.config.js')
};
