window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 let prom1 = new Promise((resolve) => {
	 setTimeout(()=>{
		 resolve(10);
	 },3000);
 })
 let prom2 = new Promise((resolve) => {
	 setTimeout(()=>{
		 resolve(12);
	 },1000);
 })
 let prom3 = new Promise((resolve) => {
	 setTimeout(()=>{
		 resolve(30);
	 },2000);
 })
 let prom4 = new Promise((resolve) => {
	 setTimeout(()=>{
		 resolve(40);
	 },5000);
 })
 let prom5 = new Promise((resolve) => {
	 setTimeout(()=>{
		 resolve(50);
	 },4000);
 })

let x = Promise.any([prom1,prom2,prom3,prom4,prom5]);
window.promises = [prom1,prom2,prom3,prom4,prom5];
console.log(x);

x.then((data)=>{
	let output = document.getElementById("output");
	output.innerHTML = `<p>${data}</p>`;
})


