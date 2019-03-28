	window.onload=hideInfo();
	
	function showInfo(){
		hideInfo();
		var val=document.getElementById("dropdown").value;
		if(val == "RPG")
			document.getElementById("RPG").style.display='block';
		else if(val == "FPS")
			document.getElementById("FPS").style.display='block';
		else if(val == "Racing")
			document.getElementById("Racing").style.display='block';
		else
			document.getElementById("Free to play").style.display='block';
	}

	function hideInfo(){

		document.getElementById("RPG").style.display='none';
		document.getElementById("FPS").style.display='none';
		document.getElementById("Racing").style.display='none';
		document.getElementById("Free to play").style.display='none';
	}
//Global variable
	var flag=false;
	var games=document.querySelectorAll('.drop li');
//
	function showGames(){	
	
		if(flag==false){
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


	for(var i=0;i<games.length;i++){
		var text=games[i].innerText;
		
		games[i].addEventListener("click",showInfo2(text));

}
		function showInfo2(text){
			hideInfo();


			if(text=="RPG"){
				document.getElementById("RPG").style.display='block';
				
			}
			else if(text=="FPS"){
				document.getElementById("FPS").style.display='block';

			}
			else if(text=="Racing"){
				document.getElementById("Racing").style.display='block';

			}
			else if(text=="Free to play"){
				document.getElementById("Free to play").style.display='block';

			}
		}
	