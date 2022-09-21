let num=11;
let count=0;
for(let i=2;i<=num;i++){
	if(num%i==1){
	count++;
	}
}
if(count==1){
console.log("Prime")
}
else{
console.log("Not Prime")
}