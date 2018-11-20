(function(){
    let matches = 0;

    let images =[];

    let cartasViradas = [];


    for (let i = 0; i < 16; i++){
        let img = {
            src: "img/" + i + ".jpg",
            id: i%8 
        };
        images.push(img);
    };

	iniciarJogo();
	
	function iniciarJogo(){
        cartasViradas = [];
        images = randomSort(images);
    
        let frontFaces = document.getElementsByClassName("front");

		for(let i = 0; i < 16; i++){
			let carta = document.querySelector("#carta" + i);
			carta.style.left = (i % 8 === 0) ? 5 + "px" : (i % 8) * 165 + 5 + "px";
            carta.style.top = i < 8 ? 5 + "px" : 250 + "px";
            
            carta.addEventListener("click", virarCarta, false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute("id", images[i].id);
        }
    }

	function randomSort(oldArray){
		let newArray = [];
		
		while(newArray.length !== oldArray.length){

			let i = Math.floor(Math.random()*16);
			
			if(newArray.indexOf(oldArray[i]) < 0){
				newArray.push(oldArray[i]);
			}
		}
		
		return newArray;
		
	}
	
    function virarCarta(){
        if(cartasViradas.length < 2){
            let faces = this.getElementsByClassName("face");

            if(faces[0].classList.length > 2){
                return;
            }

            faces[0].classList.toggle("virada");
            faces[1].classList.toggle("virada");

            cartasViradas.push(this);

            if(cartasViradas.length === 2){
                if(cartasViradas[0].childNodes[3].id === cartasViradas[1].childNodes[3].id){
                    cartasViradas[0].childNodes[1].classList.toggle("match");
                    cartasViradas[0].childNodes[3].classList.toggle("match");
                    cartasViradas[1].childNodes[1].classList.toggle("match");
                    cartasViradas[1].childNodes[3].classList.toggle("match");

                    matchCardSign();

                    matches++;

                    cartasViradas = [];

                    if(matches === 0){
                        gameOver();
                    }
                }
            }
        }      
        else{
            cartasViradas[0].childNodes[1].classList.toggle("virada");
            cartasViradas[0].childNodes[3].classList.toggle("virada");
            cartasViradas[1].childNodes[1].classList.toggle("virada");
            cartasViradas[1].childNodes[3].classList.toggle("virada");
            
            cartasViradas = [];
        }
    }


    function matchCardSign(){
        
    }

}());
