// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [ {quote:"A rose by any other name would smell as sweet.",person:"William Shakespeare"},{quote:"",person:""},{quote:"",person:""},{quote:"Ask not what your country can do for you; ask what you can do for your country.",person:"John Kennedy"},{quote:"Go ahead, make my day.",person:"Harry Callahan"},{quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",person:"Albert Einstein"},{quote:"The only thing we have to fear is fear itself.",person:"Franklin D. Roosevelt"},{quote:"To thine own self, be true.",person:"William Shakespeare"},{quote:"You must be the change you wish to see in the world.",person:"MK Gandhi"},{quote:"Whatever you are, be a good one.",person:"Abraham Lincoln"},{quote:"United we stand, divided we fall.",person:"Aesop"}];



btn.addEventListener('click',function() {
    let x = Math.floor(Math.random() * (quotes.length -1));
    quote.innerText =   quotes[x].quote;
    person.innerText =  quotes[x].person;
})