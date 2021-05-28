document.getElementById('cancel').addEventListener('mousemove', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
document.getElementById('ok').addEventListener('click',function(e){
    alert('ok')
}
)
document.getElementById('cancel').addEventListener('click',function(e){
    alert('cancel')
}
)
document.getElementById('no').addEventListener('click',function(e){
    alert('no')
}
)