		var d="";
		var myObj="";
		function srinagai()
		{
			let istacgr=document.getElementById("search").value;
			if(istacgr.includes("chingari")){
			d="cgr.php?cgr="+document.getElementById("search").value;
			}
			else if(istacgr.includes("shorts")){
			d="shorts.php?vi="+document.getElementById("search").value.substr(27,11);
			}
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onload = function() 
			{
			myObj = JSON.parse(this.responseText);
			document.getElementById("chgh").innerHTML=myObj[0];
			document.getElementById("pic").src=myObj[1];
			document.getElementById("dl").href="download_video.php?link="+myObj[2]+"&title="+myObj[0]+"&type=mp4";
			document.getElementById("chgh").visibility="visible";
			document.getElementById("dl").style.visibility="visible";
			document.getElementById("pic").style.visibility="visible";
			document.getElementById("about").style.display="block";
				
				
			var alink = document.createElement("a");
			alink.href = "#about";
			alink.text = "tes";
			alink.id="abt";
			alink.class="ml-auto scrollspy";
			document.getElementsByTagName("body")[0].appendChild(alink);
			document.getElementById('abt').click();
			}
			xmlhttp.open("GET",d, true);
			xmlhttp.send();
		}
        function random(number) 
        {
        return Math.floor(Math.random() * number);
        }
        function bgChange() 
        {
        var color ="rgb("+random(255)+","+random(255)+","+random(255)+")";
		document.getElementById("sbx").style.backgroundColor=color;
		document.getElementById("cr").style.backgroundColor=color;
        }
        //bgChange();