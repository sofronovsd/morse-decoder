const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = String(expr);
    let result = '';
    let i = 0;
    while (i < expr.length) {
        if (expr[i] !== '*') {
            let encoded = expr.substr(i, 10);
            let temp = '';
            for (let s = 0; s < encoded.length; s++) {
                if (encoded[s] !== '0') {
                    let twoS = encoded[s] + encoded[++s];
                    switch (twoS) {
                        case '10': {
                            temp += '.';
                            break;
                        }
                        case '11': {
                            temp += '-';
                        }
                    }
                }
            }
            result += MORSE_TABLE[temp];
        } else {
            result += ' ';
        }
        i += 10;
    }
    return result;
}

module.exports = {
    decode
}