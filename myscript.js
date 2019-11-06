	window.onload=(function load(){
		hideInfo();
		var games=document.querySelectorAll('.drop li');
		for(var i=0;i<games.length;i++){
		games[i].addEventListener("click",showInfo);
	}
	
	})();
	

	function hideInfo(){

		document.getElementById("RPG").style.display='none';
		document.getElementById("FPS").style.display='none';
		document.getElementById("Racing").style.display='none';
		document.getElementById("Free to play").style.display='none';
	}
//Global variable
	var flag=false;
//
	function showGames(){	
		
		var games=document.querySelectorAll('.drop li');
		if(flag==false){
			hideInfo();
			for (var i = 0; i < games.length; i++) {
				games[i].style.display='block';
			}
			flag=true;
		}
		else{
			
			for (var i = 0; i < games.length; i++) {
				games[i].style.display='none';
				
			}
			
			flag=false;
			
		}
	}

		function showInfo(){
			hideInfo();
			var text = this.children[0].innerText;
			
			if(text=="RPG"){
				document.getElementById("RPG").style.display='block';
				showGames();
					
			}
			
			else if(text=="FPS"){
				document.getElementById("FPS").style.display='block';
				showGames();

			}
			else if(text=="Racing"){
				document.getElementById("Racing").style.display='block';
				showGames();

			}
			else if(text=="Free to play"){
				document.getElementById("Free to play").style.display='block';
				showGames();

			}
		
		}

		function closeCurrentTab(){

			var con=confirm("Are you sure, you want to cancel signing up?");
			if(con==true){
				window.location.href="index.html";
			}
		}

		