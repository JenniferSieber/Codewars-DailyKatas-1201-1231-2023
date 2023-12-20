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

// December 5, 2023 Daily Katas - Arrays
// KATA 1 7kyu
const exampleSort = (arr, exampleArr) => arr.sort((a,b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
console.log(exampleSort([1,2,3,4,5],[2,3,4,1,5])); // [2,3,4,1,5]
console.log(exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5])); // [2,3,3,3,4,1,5]

// KATA 2 7kyu
// sort starts at index 1 not zero
// ascending sort 
// arry always contain numbers and never be null
//sort array by the product of the value and the index of the position
const sortByValueAndIndex = arr => {
  return arr
  .map((val, i) => [val * (i+1), val])
  .sort((a,b) => a[0] - b[0])
  .map(element => element[1])
}
console.log(sortByValueAndIndex([23, 2, 3, 4, 5])) // [2, 3, 4, 23, 5]

// KATA 3 7kyu
// 1 or more arrays ...arrays
// returns new array of unique values in order of the original provided arrs -no duplicates
const uniteUnique = (...arrays)=> {
  let uniques = '';
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].forEach((v,i) => {
      if (!uniques.includes(v)) {
        uniques += v;
      }
    })
 }
return uniques.split('').map(v => (!isNaN(v)) ? Number(v) : v);
}

// Simplified Version
function uniteUnique(...args) {
  return Array.from(new Set([].concat(...args)));
}
console.log(uniteUnique([],[1, 2, 1, 2],[2, 1, 1, 2, 1]));
console.log(uniteUnique([], [4, "a", 2]));

// December 6, 2023 Daily Katas - Arrays
// KATA 1 7kyu
const scoreboard = string => {
  let arr = string.split(' ');
  let nums = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return [nums.indexOf(arr[arr.length-2]),nums.indexOf(arr[arr.length-1])];
}
console.log(scoreboard("The score is four nil"))

// KATA 2 7kyu
const getLargerNumbers = (a,b) => a.map((val, i) => (val > b[i] || val === b[i]) ? val : b[i]);
console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));

// KATA 3 7kyu
const counterEffect = hitCount => {
  let arr = hitCount.split('');
  let hitCtArr = [];
  let newArr = arr.map(val => {
    let num = Number(val);
    let element = [];
    for (let i = 0; i <= num; i++) {
      if (num === 0) {
        element.push(Number(0));
      } else {
        element.push(i);
      }  
    }
    hitCtArr.push(element);
    
  })
  return hitCtArr;
}
console.log(counterEffect("1250"));
console.log(counterEffect("0000"));
console.log(counterEffect("0050"));

// December 7, 2023 Daily Katas--Arrays
// KATA 1 7kyu
const consecutive = arr => Math.max(...arr) - Math.min(...arr) - arr.length + 1 | 0;
console.log(consecutive([4, 8, 6]));

// KATA 2 7kyu
let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"} ];
function findEmployeesRole(name) {
  let [employee] = employees.filter(person => `${person.firstName} ${person.lastName}` === name);
  return employee ? employee.role : 'Does not work here!';
}
console.log(findEmployeesRole('Dipper Pines'));
console.log(findEmployeesRole('Kipper Sands'));

// KATA 3 7kyu
const add = (...args) => {
  let arr = [...args].map((num, i) => num/(i + 1));
  return Math.round(arr.reduce((ttl, cv) => ttl + cv, 0));
}
console.log(add(3,4,6));
console.log(add(1,2,3));
console.log(add(100,200,300));
console.log(add(2));

// December 8, 2023 Daily Katas - Arrays
// KATA 1 7kyu
const sectSort = (arr, start, len) => {
  const end = len ? arr.splice(start + len) : [];
  const begin = arr.splice(0, start);
  const mid = arr.sort((a, b) => a - b);
  return begin.concat(mid, end);
}
console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5)); // [9, 7, 1, 2, 3, 4, 5, 8, 6]

// KATA 2 7kyu
const friends = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]
const whosOnline = (friends) => {
  let output = {
    online: [],
    offline: [],
    away: []
  }
  friends.forEach(friend => {
    if (friend.status === 'online' && friend.lastActivity <= 10) {
      output.online.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      output.away.push(friend.username);
    } else if (friend.status === 'offline') {
      output.offline.push(friend.username);
    }
  })
  for (const users in output) {
    if (output[users].length === 0) {
      delete output[users];
    }
  }
  return output;
}
console.log(whosOnline([{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]))
console.log(whosOnline([{
  username: 'David',
  status: 'online',
  lastActivity: 100
}, {
  username: 'Lucy',
  status: 'online',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 1
}]))

// KATA 3 7kyu
const rowWeights = arr => {
  let ttl1 = arr.filter((num, i) => i % 2 == 0).reduce((ttl, cv) => ttl + cv, 0);
  let ttl2 = arr.filter((num, i) => i % 2 != 0).reduce((ttl, cv) => ttl + cv, 0);
  return [ttl1, ttl2];
}
console.log(rowWeights([]));
console.log(rowWeights([0, 1, 0]));
console.log(rowWeights([80]));
console.log(rowWeights([13, 27, 49]));
console.log(rowWeights([50, 51, 60,61]));

// December 9, 2023 Daily Katas -- Arrays
// KATA 1 7kyu 
const myLanguages = (obj) => {
  return Object.keys(obj).filter(score => obj[score] > 59).sort((a,b) => obj[b] - obj[a]);
}
console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65} )); //  ["Ruby", "Python"]

// KATA 2 7kyu
function pairs(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1)
      count++;
  }
  return count;
 };
console.log(pairs([1,2,5,8,-4,-3,7,6,5])); //3

// KATA 3 7kyu
const dbSort = arr => arr.filter(el => typeof el === 'number').sort((a,b) => a - b).concat(arr.filter(el => typeof el == 'string').sort());
console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"])); // [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'])


// December 10, 2023 Daily Katas
// KATA 1 7kyu
const checkThreeAndTwo = arr => {
  let arrA = arr.filter(el => el === 'a').length;
  let arrB = arr.filter(el => el === 'b').length;
  let arrC = arr.filter(el => el === 'c').length;
  return (arrA === 3 || arrB === 3 || arrC === 3) && (arrA === 2 || arrB === 2 || arrC === 2);
}
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));

// KATA 2 7kyu
const  flatten = arr => arr.flat(Infinity);
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));

// KATA 3 7kyu
const getMissingElement = arr => {
  arr = arr.sort();
  for (let i = 0; i < 10; i++) {
    if (arr[i] != i) return i;
  }
}
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

// December 11, 2023 Daily Katas - Arrays
// KATA 1 7kyu
const sortme = names => names.sort();
console.log(sortme(['one', 'two', 'three']));

// KATA 2 6kyu
const sortMe = names => {
  return names.sort((a,b) => {
    let strA = a.toLowerCase();
    let strB = b.toLowerCase();
    if (strA < strB) {
      return -1;
    } else if (strA > strB) {
      return 1;
    } else {
      return 0;
    }   
  })  
}
console.log(sortMe(["C", "d", "a", "B"]));
console.log(sortMe(["Hello", "there", "I'm", "fine"]));

// KATA 3 7kyu
const evenLast = numbers => {
  let sum = 0;
  if(numbers.length) {
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
    }
    sum *= numbers[numbers.length-1];
  }
  return sum;
}
console.log(evenLast([2, 3, 4, 5]));

// December 12, 2023 Daily Katas
// KATA 1 7kyu
const isNice = arr => Boolean(arr.length) && arr.every(el => arr.includes(el - 1) || arr.includes(el + 1));
console.log(isNice([2,10,9,3])); // t
console.log(isNice([4,2,3])); //t
console.log(isNice([3,4,5,7])); //f

// KATA 2 7kyu
// https://www.codewars.com/kata/55de6173a8fbe814ee000061/solutions
function unusedDigits(...args) {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  let numStr = args.join('');  
  return numbers.filter(element => !numStr.includes(element)).join('');
}
console.log(unusedDigits([12, 34, 56, 78]));
console.log(unusedDigits([2015, 8, 26]));

// // December 13, 2023 Daily Katas
// // KATA 1 7kyu
const getFirstPython = list => {
  const pythonDev = list.find(dev => dev.language == 'Python');
  if (!pythonDev) {
    return 'There will be no Python developers';
  } 
 return `${pythonDev.firstName}, ${pythonDev.country}`;
}
console.log(getFirstPython([
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]));
console.log(getFirstPython( [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
]));

// // KATA 2 7kyu
const countDevelopers = list => list.filter(dev => dev.continent == 'Europe' && dev.language == 'JavaScript').length;
console.log(countDevelopers([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]));
console.log(countDevelopers([
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]));

// KATA 3 7kyu
const greetDevelopers = list => {
  return list.map(dev => {
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    return dev;
  });
}
console.log(greetDevelopers([
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]));


// December 14, 2023 Daily Katas
// KATA 1 7kyu
const isRubyComing = list => {
  let rubyDev = list.find(dev => dev.language === 'Ruby')
  return rubyDev ? true : false;
}
console.log(isRubyComing([
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]));

// KATA 2 7kyu
const countLanguages = list => {
  let count = {};
  list.forEach(dev => count[dev.language] = (count[dev.language] || 0) + 1);
  return count;
}
console.log(countLanguages([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]));

// KATA 3 7kyu
const isSameLanguage = list => list.every(dev => dev.language == list[0].language);
console.log(isSameLanguage([
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]));

// December 15, 2023 Daily Katas
// KATA 1 7kyu
function findSenior(list) {
	var maxAge = Math.max(...list.map(person => person.age));
	return list.filter(person => person.age === maxAge);
}
// or
// const findSenior = list =>
//   list.filter(val => val.age === Math.max(...list.map(val => val.age)));
console.log(findSenior([
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]));
console.log(findSenior([
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
]));

// KATA 2 7kyu
const allContinents = list => {
  let devContinents = list.map(dev => dev.continent);
  return devContinents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania');
}
console.log(allContinents( [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
]));
console.log(allContinents( [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
]));

// KATA 3 7kyu
const isAgeDiverse = list => {
  return list.some(dev => dev.age >= 100) ?
    [10,20,30,40,50,60,70,80,90].every(a => list.some(dev => dev.age - a >= 0 && dev.age - a <= 9)) : false;
}
console.log(isAgeDiverse([
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
]));

// December 16, 2023 Daily Katas
// KATA 1 7kyu
const addUsername = list => {
  return list.map(dev => { 
    dev.username = dev.firstName.toLowerCase() + dev.lastName[0].toLowerCase() + (new Date().getFullYear() - dev.age);
    return dev;
  });
}
console.log(addUsername([
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]))

// KATA 2 7kyu
const getAverageAge = list => {
  let ages = list.map(dev => dev.age);
  return Math.round((ages.reduce((ttl, cv) => ttl + cv, 0)) / ages.length);
}
console.log(getAverageAge([
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]));

// KATA 3 7kyu
const findAdmin = (list, lang) => {
  let admins = [];
  list.forEach(dev => {
    if (dev.githubAdmin == 'yes' && dev.language == lang) {
      admins.push(dev);
    }
  })
  return admins;
}
console.log(findAdmin([
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
]));
console.log(findAdmin([
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
 ]));

// December 17, 2023 Daily Katas
// KATA 1 6kyu
function isLanguageDiverse(list) {
  list = list.map(dev => dev.language);
  const num = [...new Set(list)].map(el => list.filter(e => e === el).length);
  return Math.max(...num) / Math.min(...num) <= 2;
}
console.log(isLanguageDiverse([
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]));

// KATA 2 7kyu
const orderFood = list => {
  let dietObj = {};
  list.forEach(dev => dietObj[dev.meal] = (dietObj[dev.meal] || 0) + 1);
  return dietObj;
}
console.log(orderFood([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
]));

// KATA 3 6kyu
const findOddNames = list => list.filter(dev => dev.firstName.split('').reduce(((ttl, s) => ttl + s.charCodeAt(0)),0) % 2 !== 0);
console.log(findOddNames(list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]));

// December 18, 2023 Daily Katas
// KATA 1 7kyu
const askForMissingDetails = list => {
  return list.filter(dev => {
   return Object.keys(dev).some(key => {
      return dev[key] === null && (dev.question = `Hi, could you please provide your ${key}.`);
    })
  })
}
console.log(askForMissingDetails([
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]));

// KATA 2 7kyu
const solve = (a,b) => [...(a + b)].filter(val => !a.includes(val) || !b.includes(val)).join(``);
console.log(solve("xyab","xzca"));

// // December 19, 2023 Daily Katas
// // KATA 1 7kyu
const makeString = s => s.split(' ').map(s => s[0]).join('');
console.log(makeString('This Is A Test'));
console.log(makeString('sees eyes xray yoat'));

// KATA 2 7kyu
const fix(paragraph){
  if(paragraph == '') return '';
  return paragraph.split('. ')
                  .map(word => word[0].toUpperCase() + word.slice(1))
                  .join('. '); 
 }
console.log(fix('hello. my name is inigo montoya. you killed my father. prepare to die.'));

// KATA 3 7kyu
const strCount = obj => {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count+= strCount(obj[key]);
  }
  return count
}
console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }));

// December 20, 2023 Daily Katas
// KATA 1 8kyu string
function rainAmount(mm){
  if (mm < 40) {
       return `You need to give your plant ${Math.abs(mm - 40)}mm of water`;
  }
  else {
       return "Your plant has had more than enough water for today!";
  };
}
console.log(rainAmount(39));
console.log(rainAmount(0));
console.log(rainAmount(100));

// KATA 2 8kyu
const spEng = string => string.toLowerCase().indexOf('english') == -1 ? false : true;
console.log(spEng('Eenglish'));
console.log(spEng('EglishzzzzzzENGLISHzzzzzzzzz'));
console.log(spEng('Eenlish1'));

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
