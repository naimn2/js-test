const urutKata = kalimat => {
    if (kalimat === '') {
        return kalimat;
    }
    const katakata = kalimat.split(' ');
    const indeksKata = [];
    katakata.forEach((kata, i) => {
        var pola = /\d/;
        indeksKata[i] = kata.match(pola)[0];
    });

    // algoritma urut

    let hasil = '';

    for (let i = 0; i < katakata.length-1; i++) {
        for (let j = i+1; j < katakata.length; j++) {
            if (indeksKata[j] < indeksKata[i]){
                [indeksKata[j], indeksKata[i]] = [indeksKata[i], indeksKata[j]];
                [katakata[j], katakata[i]] = [katakata[i], katakata[j]];
            }
        }
        hasil += katakata[i]+' ';
    }
    hasil += katakata[katakata.length-1];

    return hasil;
}

const input = 'ta3hun menjela2ng se1lamat b4aru';
const output = urutKata(input);
console.log(`Sebelum diurutkan: "${input}"`);
console.log(`Setelah diurutkan: "${output}"`);