import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
    input: './src/index.js',
    sourcemap: false,

    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
    },

    plugins: [
        postcss({
            modules: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs()
    ],

    external: ['react', 'react-dom'],

    globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
