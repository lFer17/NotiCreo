window.addEventListener("load",function(){
	let container = document.querySelector(".container");
	let btnMenu= document.querySelector(".btn-menu");
	let menu = document.querySelector(".menu");
	let span = document.querySelectorAll("span");
	let footer = document.querySelector("footer");
	let date = new Date();
	let nav = document.querySelectorAll("a");

	nav.forEach(nav=>{
		nav.addEventListener('click',function(){
			alert("Nuestro nav es mas falso que las promesas de tu ex esto y mas en NotiCreo, hasta la proxima! XD ")
		})
	})


	footer.innerHTML+=date.getFullYear()
	btnMenu.addEventListener('click',function(){
		menu.classList.toggle('hidden');
		span.forEach(spa=>{
			spa.classList.toggle('dark');
		})
	}) 
	noticias.forEach(noti=>{
		 	container.innerHTML+=`
			<div class=${noti.tipoNacional?"noticias":"internacional"}>
				<img src=${noti.imgUrl}>
				<div>
				<h2>${noti.titulo}</h2>
				<p>${noti.descripcion} <br> <br> <label>${noti.tipoNacional?"Noticia nacional":"Noticia internacional"}</label></p>
				<p>Fecha: ${noti.fecha}</p>
				</div>
             
			</div>

		`
		})

	
})