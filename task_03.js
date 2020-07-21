const findLongestWord = function(string) {
  // твой код
  let word = string.toLowerCase().split(' ');

  let longestWord = 0; 

  for(let i = 0; i < word.length; i += 1) {
  	if(word[i].length > longestWord.length) {
		longestWord = word[i];
  	}
  }
    return longestWord;
};

//* Вызовы функции для проверки работоспособности твоей реализации.
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
