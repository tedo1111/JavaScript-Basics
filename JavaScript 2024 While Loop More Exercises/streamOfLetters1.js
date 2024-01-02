function streamOfLetters1(input) {
    let command = input[0];
    let index = 0;
    let word = ''
    let word2 = ''

    let countC = 0;
    let countO = 0;
    let countN = 0;

    while (command !== 'End') {
        command = input[index];
        if (countC === 1 && countN === 1 && countO === 1) {
            word += ' ';
            countC = 0;
            countN = 0;
            countO = 0;
            word2 = word;
        }

        switch (command) {
            case 'a': case 'A': case 'b': case 'B': case 'C': word += command; break;
            case 'c':
                if (countC === 0) {
                    countC++
                    index++
                    command = input[index];
                    continue;
                } else {
                    word += command
                } break;
            case 'd': case 'D': case 'e': case 'E': case 'f': case 'F':
            case 'g': case 'G': case 'h': case 'H': case 'i': case 'I':
            case 'j': case 'J': case 'k': case 'K': case 'l': case 'L':
            case 'm': case 'M': case 'N': word += command; break;
            case 'n':
                if (countN === 0) {
                    countN++
                    index++
                    command = input[index];
                    continue;
                } else {
                    word += command;
                } break;
            case 'o':
                if (countO === 0) {
                    countO++
                    index++
                    command = input[index];
                    continue;
                } else {
                    word += command;
                } break;
            case 'O': case 'p': case 'P': case 'q': case 'Q': case 'r':
            case 'R': case 's': case 'S': case 't': case 'T': case 'u':
            case 'U': case 'v': case 'V': case 'w': case 'W': case 'x':
            case 'X': case 'y': case 'Y': case 'z': case 'Z': word += command; break;
        }

        command = input[index];
        index++;

    } if (countC === 1 && countN === 1 && countO === 1) {
        word += ' ';
        countC = 0;
        countN = 0;
        countO = 0;
        word2 = word;
    }
    if (command === 'End') {
        console.log(word2);
    }

}
streamOfLetters1(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters1(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);