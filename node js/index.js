const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1'
const port = 3002

// request adalah = data masuk dari luar
// respon adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "RAMY SYAFITRI";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang berhasil disimpan')
    });


    const sisaRAM = os.freemem();

    const hasil = `
    <head>
        <title>${nama}</title>
    </head>
    <body>
        <h1 style='background: black;color: white;padding: 20px; text-align: center'>NODE JS UANG JAJAN SAYA</h1>
        <p>
        Halo nama saya ${nama}, Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}
        </p>
        <h5>sisa RAM Laptop saya: ${sisaRAM}</h5>
    </body>`

    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server berhasil di ${host}:${port}`);
});