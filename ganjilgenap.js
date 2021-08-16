const cekGanjilGenap = (n) => {
    for (let i=0; i<n; i++){
        if (i%2===0){
            console.log(`${i} genap!`);
        } else {
            console.log(`${i} ganjil!`);
        }
    }
}
cekGanjilGenap(20);