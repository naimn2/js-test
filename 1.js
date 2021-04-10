const bank = [50000, 20000, 10000, 5000, 2000, 1000, 500];

const hitungKembalian = (harga, bayar) => {
    let kembalian = bayar-harga;
    let jumlahPecahan = [0, 0, 0, 0, 0, 0, 0];
    while (kembalian >= bank[bank.length-1]) {
        for (let i = 0; i < bank.length; i++) {
            if (kembalian >= bank[i]) {
                kembalian -= bank[i];
                jumlahPecahan[i]++;
                break;
            }
        }
    }
    
    // print pecahan kembalian

    jumlahPecahan.forEach((pecahan, i) => {
        if (pecahan!==0) {
            console.log(pecahan, 'X', bank[i]);
        }
    })
}

hitungKembalian(15500, 50000);