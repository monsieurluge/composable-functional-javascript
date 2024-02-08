// imperative
const wrapExamplesImp = example => {
    if (example.previewPath) {
        try {
            example.preview = fs.readFileSync(example.previewPath).toString()
        } catch (error) {}
    }
    return example
}

// functional
const readFile = x => tryCatch(() => fs.readFileSync(x))

const wrapExamplesFunc = example =>
    fromNullable(example.previewPath)
    .chain(readFile)
    .fold(
        () => example,
        preview => Object.assign({ preview }, example)
    )

/* **************************************************
    working example
************************************************** */

const fs = require('fs')
const { fromNullable, tryCatch } = require('./core.js')

const examples = {
    withoutPreviewPath: { title: 'example without preview path' },
    withPreviewPath: { title: 'example with preview path', previewPath: 'example5.txt' },
}

// change the example name (withoutPreviewPath or withPreviewPath) to test the different paths
const example = examples.withoutPreviewPath

const resultImp = wrapExamplesImp(example)
const resultFunc = wrapExamplesFunc(example)

console.log('imperative >', resultImp)
console.log('functional >', resultFunc)
