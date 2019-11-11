// Map is just a key-value pair. It's FAR MORE PROTECTED than is a regular object.
// It also comes wiht some cool methods specific to map.
// It is also an iterable.

const myContactsObj = {
	"Rob" : "555-1234",
	"Jim" : "555-2345",
	function(key){
        console.log(key + ' -> ' + 'value');
    },
};

// not iterable
// for(value of myContactsObj){
// 	console.log(value)
// }


let keyFunction = ()=>{};
let myContacts = new Map();

// get and set methods
myContacts.set("Rob","555-1234");
// const rob = myContacts.get("Rob");
// console.log(rob);
myContacts.set(keyFunction, "Haha, I just used a function as a key");
// const huh = myContacts.get(keyFunction);
// console.log(huh);

console.log(myContacts);
console.log(myContacts.size); // 2
for(value of myContacts){
	console.log(value);
};