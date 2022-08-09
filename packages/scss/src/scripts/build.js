const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const getComponents = () => {
    let allComponents = []

    const types = ['atoms', 'molecules']

    types.forEach(type => {
        const allFiles = fs.readdirSync(`src/${type}`).map(file => ({
            input: `src/${type}/${file}`,
            output: `lib/${file.slice(0, -4) + 'css'}`
        }))

        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })

    return allComponents
}

const compile = (input, fileName) => {
    const result = sass.renderSync({
        data: fs.readFileSync(
            path.resolve(input)
        ).toString(),
        outputStyle: 'expanded',
        outFile: 'global.css',
        includePaths: [path.resolve('src')]
    })

    fs.writeFileSync(
        path.resolve(fileName),
        result.css.toString()
    )
}

compile('src/global.scss', 'lib/global.css')

getComponents().forEach(component => {
    compile(component.input, component.output)
})
