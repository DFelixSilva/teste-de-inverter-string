function inverterString(s) {
    let stringInvertida = '';
    for (let i = s.length - 1; i >= 0; i--) {
        stringInvertida += s[i];
    }
    return stringInvertida;
}

// Exemplo de uso:
const stringOriginal = 'exemplo';
const stringResultante = inverterString(stringOriginal);
console.log('String original:', stringOriginal);
console.log('String invertida:', stringResultante);
