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


// December 2, 2023 Daily Katas Arrays
// KATA 1 7kyu 
const noonerize = ([num1, num2]) => {
  if (isNaN(num1 + num2)) return `invalid array`;
  const [num1S, num2S] = [num1, num2].map(String);
  return Math.abs((num1S[0] + num2S.slice(1)) - (num2S[0] + num1S.slice(1)));
}
console.log(noonerize([12, 34]));
console.log(noonerize([55, 63]));
console.log(noonerize([357, 579]));
console.log(noonerize([1000000, 9999999]));
console.log(noonerize([1000000, 'z9999999']));
// KATA 2 8kyu
const points = games => {
  let scores = games.map(str => {
    if (str[0] > str[2]) {
      return 3;
    } else if (str[0] < str[2]) {
      return 0;
    } else if (str[0] == str[2]) {
      return ;
    }
  });
  return scores.reduce((ttl, cv) => ttl + cv, 0);
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); // 30

// KATA 3 7kyu
const addLength = str => str.split(' ').map(el => `${el} ${el.length}`);
console.log(addLength(`apple ban`));
console.log(addLength(`you will win`));


// December 3, 2023 Daily Katas - Strings
// KATA 1 7kyu
const closingInSum = n => {
  let arr = n.toString().split('');
  let numArr = [];
  while (arr.length > 0) {
    let firstNum = arr.shift();
    let lastNum = arr.pop();
    if (lastNum) {
      numArr.push(firstNum + lastNum);
    } else {
      numArr.push(firstNum);
    }
  }
  return numArr.reduce((ttl, cv) => ttl + Number(cv), 0);
}
console.log(closingInSum(121n));
console.log(closingInSum(22225555n));
console.log(closingInSum(12345n));

// KATA 2 7kyu
const longestWord = str => str.split(' ').sort((a, b) => a.length - b.length).pop();
console.log(longestWord('one three two'));
console.log(longestWord('one allow three'));
console.log(longestWord('a b c d e fgh'));

const zipvalidate = postcode => (postcode.match(/[ a-z!@#$%^&*><?,.;]/gi) || postcode == '' || postcode.length !== 6 || postcode[0].match(/[05789]/g || postcode.trim() !== postcode )) ? false : true;
console.log(zipvalidate('198!28'));
console.log(zipvalidate('19832888'));
console.log(zipvalidate('198328'));
console.log(zipvalidate(' 98328'));
console.log(zipvalidate('111111'));
console.log(zipvalidate('198  328'));
console.log(zipvalidate('098328'));
console.log(zipvalidate('19z328'));

// December 4, 2023 Daily Katas - strings
// KATA 1 7kyu
const makePassword = str => str.split(' ').map(s => s[0]).join('').replace(/[ios]/gi, x => ({ i: 1, s: 5, o: 0})[x.toLowerCase()]);
console.log(makePassword('Keep Calm and Carry On'));

// KATA 2 7kyu
const dadFilter = str => str = str.trim().replace(/(\,+)/g, ',').replace(/(\,+)$/, '');
console.log(dadFilter('all this,,,, used to be trees,,,,,,'));

// KATA 3 7kyu Array
const min = (arr, str) => {
  let minValue = Math.min(...arr);
  return str === 'value' ? minValue : arr.indexOf(minValue)}
console.log(min([1,2,3,4,5], 'value'));
console.log(min([1,2,3,4,5], 'index'));

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
