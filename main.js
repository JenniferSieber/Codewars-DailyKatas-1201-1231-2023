// www.codewars.com
// December 1, 2023 Daily Katas - Strings
// KATA 1 7kyu
const generate = length => {
  let binaryString = '';
  for (let i = 0; i < length; i++) {
    binaryString += Math.round(Math.random());
  }
  return binaryString;
};
console.log(generate(4));
console.log(generate(16));
console.log(generate(64));

// KATA 2 6kyu
const sortString = (string, ordering) => {
  let arr = [];
 for (let i in ordering) {
  while(string.includes(ordering[i])) {
    arr.push(ordering[i]);
    string = string.replace(ordering[i], '');
  }
 }
 return (arr.join('') + string);
}
console.log(sortString('foos', 'of'));
console.log(sortString('string', 'gnirts'));

// KATA 3 6kyu
function autocomplete(input, dictionary){
  let arr = [];
  input = input.replace(/[^a-z]/gi, '');
  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i].slice(0, input.length).toLowerCase() === input.toLowerCase()) {
      arr.push(dictionary[i]);
    }
  }
  return arr.slice(0, 5);
}
console.log(autocomplete('ai', ['airplane','airport','apple','ball']));
console.log(autocomplete('a123i', ['airplane','airport','apple','ball',' air', 'airports', 'airways', 'airstream']));

// December 2, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 3, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 4, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 5, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 6, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 7, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 8, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 9, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 10, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 11, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 12, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 13, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 14, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 15, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 16, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 17, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 18, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 19, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 20, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 21, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 22, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 23, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 24, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 25, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 26, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 27, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 28, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 29, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 30, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
// December 31, 2023 Daily Katas
// KATA 1 7kyu

// KATA 2 7kyu

// KATA 3 7kyu
