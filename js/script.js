(function(){
    let images =[];

    for (let i = 0; i < 16; i++){
        let img = {
            src: "img/" + i + ".jpg",
            id: i%8 
        };
        images.push(img);
    };

	iniciarJogo();
	
	function iniciarJogo(){
        images = randomSort(images);
    
        let frontFaces = document.getElementsByClassName("front");

		for(var i = 0; i < 16; i++){
			var carta = document.querySelector("#carta" + i);
			carta.style.left = (i % 8 === 0) ? 5 + "px" : (i % 8) * 165 + 5 + "px";
            carta.style.top = i < 8 ? 5 + "px" : 250 + "px";
            
            carta.addEventListener("click", virarCarta, false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute("id", images[i].id);
		}
    }

	function randomSort(oldArray){
		var newArray = [];
		
		while(newArray.length !== oldArray.length){

			var i = Math.floor(Math.random()*16);
			
			if(newArray.indexOf(oldArray[i]) < 0){
				newArray.push(oldArray[i]);
			}
		}
		
		return newArray;
		
	}
	
    function virarCarta(){
        let faces = this.getElementsByClassName("face");
        faces[0].classList.toggle("virada");
        faces[1].classList.toggle("virada");
    }
        
}());
