function palindrome(word) {

    const len = word.length;

    
    for (let i = 0; i < len / 2; i++) {

    
        if (word[i] !== word[len - 1 - i]) {
            return 'not a palindrome';
        }
    }
    return ' a palindrome';
}


const word = prompt('Enter a string: ');


const value = palindrome(word);

console.log(value);