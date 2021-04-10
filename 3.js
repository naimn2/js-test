const pascal = (derajat) => {
    let segitiga = []
    for (let i = 0; i <= derajat; i++) {
        let baris = []
        for (let j = 0; j <= i; j++) {
            const elemen = (i===0 || j===0 || j===i)? 1: segitiga[i-1][j] + segitiga[i-1][j-1];
            baris.push(elemen);
        }
        segitiga.push(baris);
    }
    
    // ubah array segitiga ke string

    let hasil = '';
    segitiga.forEach(baris => {
        baris.forEach(elemen => {
            hasil += elemen + ' ';
        });
        hasil += '\n';
    });

    return hasil;
}

console.log(pascal(4));