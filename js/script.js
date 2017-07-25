
let tableaucarte = ['img/ane.jpg','img/ane.jpg','img/lapins.jpg','img/lapins.jpg','img/ours.jpg','img/ours.jpg','img/lama.jpg','img/lama.jpg','img/chien.jpg','img/chien.jpg','img/chat.jpg','img/chat.jpg','img/lionne.jpg','img/lionne.jpg',];
let valeurcarte = [];
let choixcarte = [];
let retournee = 0;


		//fais le melange aléatoires des cartes
		tableaucarte.melangecarte = function(){
			let i = this.length, j, temp;
			while(--i > 0){
				j = Math.floor(Math.random() * (i+1));
				temp = this[j];
				this[j] = this[i];
				this[i] = temp;

			}
			
		}
		//creer le plateau de jeux ainsi que les differentes cartes
		function newGame(){
			retournee = 0;
			let affiche = '';
			tableaucarte.melangecarte();
			for( i = 0; i < tableaucarte.length; i++){
				
				affiche += '<img src="img/dos.gif" id="carte'+i+'" onclick="retournement(this,\''+tableaucarte[i]+'\')">';
			}
			document.getElementById('plateau').innerHTML = affiche;
		}
		//devoilement carte au click
		
		function retournement(carte,val){
console.log(val);
console.log(valeurcarte.length);
			if(carte.innerHTML == "" && valeurcarte.length < 2){
				//carte.style.background ='teal';
				carte.src = val;
				carte.removeAttribute('onclick');
				
				if(valeurcarte.length == 0){
					valeurcarte.push(val);
					choixcarte.push(carte.id);
					
				} else if(valeurcarte.length == 1){
					valeurcarte.push(val);
					choixcarte.push(carte.id);
					

					if(valeurcarte[0] == valeurcarte[1]){
						retournee += 2;




				// reinitialise les deux tableaux
				valeurcarte = [];
				choixcarte = [];

				// verifier si le tableau est vide
				setTimeout(function(){
					if(retournee == tableaucarte.length){
						//alert("Felicitations.... vous avez trouvez toutes les paires !! Rejouez");
						document.getElementById('plateau').innerHTML = "";
						newGame();
					}
				}, 1000)
				
			} else {

				function pasbon(){
				    // retourne les deux cartes 
				    let carte1 = document.getElementById(choixcarte[0]);
				    let carte2 = document.getElementById(choixcarte[1]);
				    carte1.setAttribute('src','img/dos.gif') ;
				    carte1.setAttribute('onclick','retournement(this,\''+valeurcarte[0]+'\')');
				    carte1.innerHTML = "";
				    carte2.setAttribute( 'src','img/dos.gif');
				    carte2.innerHTML = "";
				    carte2.setAttribute('onclick','retournement(this,\''+valeurcarte[1]+'\')');

				    // reinitialise les tableaux
				    valeurcarte = [];
				    choixcarte = [];
				    //alert('les deux cartes sont differentes');
				}
				setTimeout(pasbon, 500);
			}
		}
	}
}