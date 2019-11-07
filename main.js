
/* Function 1 

function fourLetterWords(sentence) { }
console.log(fourLetterWords('This sentence is fine'));

*/ 

const fourLetterWords = sentence => {
    let words = sentence.split(" "),
        newArr = words.filter(word => word.length === 4)
    return "Number of four letter words: " + newArr.length   
}

console.log(fourLetterWords("this is a good sentence"))


/* Function 2

function almostPalindromes(str) {}
console.log(almostPalindromes('abcba'));
 */ 

const almostPalindromes = (str) => {
    const   string = str.split(""),
            normal  = [...string],
            reverse_string = string.reverse()

    let diff = normal.map((char, i) => char !== reverse_string[i] ? char : '')

    return diff.filter(String).length === 0 ? 
                'String is Palindrome' : 
                diff.filter(String).length 
} 
console.log(almostPalindromes("fasdasox"))


/* Function 3 

function total(str, condition) {}
console.log(total('aAb3b5Pc0,!9fba1,jkk2', 2));

*/


const total = (string, condition) => 
    [...string].map(c => parseInt(c) !== NaN && parseInt(c) > condition ? c : '')
        .filter(String).reduce((acc, num) => (acc + parseInt(num)), 0)

console.log(total("aA5Pc0,!9fba1", 3))

/* Function 4 

function total(in) {}
console.log(total(ListOfProducts));

*/
const ListOfProducts = [
    {name: 'iPhone 5',quality: 10, price: 30000},
    {name: 'NoteBook HP',quality: 6,price: 15000},
    {name: 'Tablet Lenovo',quality: 7,price: 20000},
    {name: 'Server Combo',quality: 9,price: 22000 },
    {name: 'Server Noname',quality: 9,price: 9000},
    {name: 'Server HP',quality: 9,price: 33000},
    {name: 'PC smart',quality: 4,price: 10000},
    {name: 'TV DEWOO',quality: 10,price: 7000},
    {name: 'Monoblock Acer',quality: 8,price: 24000}
];

const ourMoney = 80000;

const total_products = (element) => {
    let budget = ourMoney;

    return element.sort((a,b) => b.quality - a.quality).map(p => {
        if(p.price < budget) {
            budget -= p.price
            return p
        }
        return ''
    }).filter(String)
}

console.log(total_products(ListOfProducts))


/* Function 5 

timeOutA = 1000, timeOutB = 2000:
function a (timeOutA) { setTimeout(() => { return (t * timeOut / 1000 - 4)}, timeOutA) }
function b (timeOutB) { setTimeout(() => {return t * timeOut / 1000}, timeOutB)}

*/

let t = 5,
    timeOutA = 1000,
    timeOutB = 2000

// A function
function a(timeOut) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t * timeOut / 1000 - 4, timeOut)
        })
    });
}
a(timeOutA).then(function(resolve) {
    console.log(resolve);
});

// B function
function b(timeOut) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t * timeOut / 1000, timeOut)
        })
    });
}
b(timeOutB).then(function(resolve) {
    console.log(resolve);
});