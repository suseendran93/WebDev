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
			else if(val == "Free to play")
				document.getElementById("Free to play").style.display='block';
			}

	function hideInfo(){

				document.getElementById("RPG").style.display='none';
				document.getElementById("FPS").style.display='none';
				document.getElementById("Racing").style.display='none';
				document.getElementById("Free to play").style.display='none';
					}

