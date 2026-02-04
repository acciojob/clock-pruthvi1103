//your JS code here. If required.
const p =document.getElementById("timer");
setInterval(()=>{
	const timer=new Date()
    p.textContent=timer
	
},1000)