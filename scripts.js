const nameFile = process.argv[2]
const extension = process.argv[3]
const indicador = process.argv[4]
const unidad = parseInt(process.argv[5])
const https = require("https")
const fs = require('fs')
let resultado = []
let info = []
const archivo = nameFile +"." + extension
https.get('https://mindicador.cl/api', (resp) =>{
    resp.on('data', (data)=>{
        info = JSON.parse(data)
        resultado = (info[indicador].valor) * unidad
const contenido =`
${new Date()}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${unidad} pesos
Convertido a "${indicador}" da un total de:
$${resultado}
`
        fs.writeFile(archivo, contenido, 'utf8', () => {
            fs.readFile(archivo, 'utf8', (err, data) => {
            console.log(data)
            })
        })
    })
}).on('error', (error) =>{
    console.log(error)
})