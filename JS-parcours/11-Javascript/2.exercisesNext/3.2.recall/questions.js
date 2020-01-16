let selectElementsStartingWithA = (array) => {
    let beginWithA = [];
    array.forEach(elem => {
        if(elem.charAt(0) == 'a'){beginWithA.push(elem)}
    })
    return beginWithA;
}

let selectElementsStartingWithVowel = (array) => {
    let vowels = ['a','e','i','o','u','y'];
    let beginWithVowel = [];

    array.forEach(elem => {
        if(vowels.includes(elem.charAt(0))){
            beginWithVowel.push(elem)
        }
    })
    return beginWithVowel;
}

let removeNullElements = (array) => {
    for(let i=array.length; i>0;i--){
        if(array[i] == null){
            array.splice(i, 1);
        }
    }
    return array;
}

let removeNullAndFalseElements = (array) => { 
    for(let i=array.length; i>0;i--){
        if(array[i] == null || array[i] === false){
            array.splice(i, 1);
        }
    }
return array;
}

let reverseWordsInArray = (array) => {
    for(let j=0;j<array.length;j++){
        let abc = array[j].split('');
        let def = [];
        for(let i=0;i<abc.length;i++){
            def.push(abc[abc.length-1-i]);
        }
        array[j] = def.join('');
    }
    return array;
}

let everyPossiblePair = (array) => {
    array.sort();
    let result = [];

    for(let i=0; i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            let abc = [];
            abc.push(array[i],array[j])
            result.push(abc);
        }
    }
    return result;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    function compare(a,b){
        if(a.charAt(a.length-1) > b.charAt(b.length-1))
            return 1;
        if(a.charAt(a.length-1) < b.charAt(b.length-1))
            return -1;
        return 0;
    }
    return array.sort(compare)
}

let getFirstHalf = (string) => {
    return string.substr(0, Math.ceil(string.length/2));
}

let makeNegative = (number) => {
    return 0-Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let palindromes = 0;

    for(let i=0;i<array.length; i++){
        let first;
        let last = [];
        first = array[i].substr(0,Math.ceil(array[i].length/2));

        for(let j=0;j<Math.ceil(array[i].length/2);j++){
            last.push(array[i][array[i].length-1-j]);
        }
        if(first === last.join('')){palindromes+=1};
    }
    
    return palindromes;
}

let shortestWord = (array) => {
   return array.reduce((a,b) => a.length < b.length ? a : b);
}

let longestWord = (array) => {
    return array.reduce((a,b) => a.length > b.length ? a : b);
}

let sumNumbers = (array) => {
    return array.reduce((a,b)=> a+b);
}

let repeatElements = (array) => {
    return [...array,...array];
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b)=> a+b)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.splice(0, array.findIndex((elem) => elem > 5));
}

let convertArrayToObject = (array) => {
    let obj = {};
    for (let i=0; i<array.length; i+=2){
        obj[array[i]] = array[i+1];
    }
    return obj;
}

let getAllLetters = (array) => {
    return [...new Set(array.join('').split('').sort())];
}

let swapKeysAndValues = (object) => {
    // let keys = Object.keys(object);
    // let values = Object.values(object);
    // let newObj = {}; 
    // for(let i=0; i<keys.length; i++){
    //     newObj[values[i]] = keys[i];
    // }
    // return newObj;

    return Object.fromEntries(Object.entries(object).map(([key,value]) => [value,key]));
    
}

let sumKeysAndValues = (object) => {
    return Object.entries(object).map(([key,value]) => parseInt(key) + value).reduce((a,b) => a+b);
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g,'');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString('en-GB');
}

let getDomainName = (string) => {
    return string.slice((string.indexOf('@')+1), (string.lastIndexOf('.')));
}

let titleize = (string) => {

    let array = string.split(' ').map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
    return array.join(' ');
}

let checkForSpecialCharacters = (string) => {
    return RegExp(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(string)
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let result = 0;
    for (let i=number-1; i>0; i--){
        result += 
    }
    return ;
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
