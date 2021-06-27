function gotopage(btn){
	let target=btn.getAttribute('target');
	console.log("going to page "+target);
	let items=document.querySelectorAll(".content-item");
	items.forEach(item => {
		item.classList.remove("active")
	});
	document.getElementById(target).classList.add("active");
}