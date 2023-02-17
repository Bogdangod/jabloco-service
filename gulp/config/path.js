import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
        jsLibs: `${buildFolder}/js/js-lib/`


    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        jsLibs: `${srcFolder}/js/js-lib/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`

    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}


