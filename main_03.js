// Задание 3 - done
// first option
const findLongestWord = function(string) {
  // твой код
  let word = string.toLowerCase().split(' ');

  let longestWord = 0; 

  for(let i = 0; i < word.length; i += 1) {
  	if(word[i].length > longestWord) {
		longestWord = word[i];
  	}

  	return longestWord;
  }
};

// second option
// const findLongestWord = (string) => {
// 	string.split(' ').forEach(str => console.log(str));

// 	let longestWord = 0;

// 	if(str.length > longestWord) {
// 		longestWord = str;
// 	}

// 	return longestWord;
// }

//* Вызовы функции для проверки работоспособности твоей реализации.
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
