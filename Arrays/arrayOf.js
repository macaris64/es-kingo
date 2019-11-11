const arr1 = Array.of(7, 6, 5, 'mehmet');
console.log(arr1);

const arr2 = Array(7, 6, 6, arr1);
const arr3 = Array(7, 6, 6, ...arr1);
console.log(arr2);
console.log(arr3);

const arr4 = Array.of(7, "Hulk", [23, 12, 5], {sport: "volleyball"});
console.log(arr4);


// Polyfill
if(!Array.of){
	Array.of = function(){
		return Array.prototype.slice.call(arguments);
	}
}