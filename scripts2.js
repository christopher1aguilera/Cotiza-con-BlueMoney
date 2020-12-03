const nameFile = process.argv[2]
const extension = process.argv[3]
const indicador = process.argv[4]
const unidad = parseInt(process.argv[5])
const child_process = require('child_process')
const script = 'scripts.js'
function ejecutar(script) {
return new Promise((resolve) => {
child_process.exec(`node ${script} ${nameFile} ${extension} ${indicador} ${unidad}`, function (err, result) {
    resolve(console.log(result))
})
})
}
ejecutar(script)