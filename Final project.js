var seeForm=document.getElementsByClassName("form")[0];
var seeForm2=document.getElementsByClassName("form2")[0];
var seeForm3=document.getElementsByClassName("form3")[0];
var logIn=document.getElementById('login');
var content=document.querySelector("#content");
var questions=document.querySelectorAll("#content div");
var colors=["#35B997","#22AF4B","#1A578F","#F05123","magenta","#F9DF30"];
var texts=["C++ or Java or Python","HTML,CSS & Vanilla JavaScript",
			"Java or Kotlin or Swift","C++ or  Squirrel or Objective-C",
			"Python","Python or SQL or R"];
var h1=document.querySelectorAll("#contentBottom h1 span span");
var info=document.querySelectorAll("#info div");
var dist=info[0].getBoundingClientRect().top;
var signup=document.getElementById("signup");
var rating=document.getElementById("rating");
logIn.addEventListener("mouseover",function(){
	seeForm.classList.add("form-display");
});

	seeForm.addEventListener("mouseover",function(){
	seeForm.classList.add("form-display");
	});

logIn.addEventListener("mouseout",function(){
	seeForm.classList.remove("form-display");
});
seeForm.addEventListener("mouseout",function(){
	seeForm.classList.remove("form-display");
});

rating.addEventListener("mouseover",function(){
	seeForm3.classList.add("form-display");
});

	seeForm3.addEventListener("mouseover",function(){
	seeForm3.classList.add("form-display");
	});

rating.addEventListener("mouseout",function(){
	seeForm3.classList.remove("form-display");
});
seeForm3.addEventListener("mouseout",function(){
	seeForm3.classList.remove("form-display");
});


signup.addEventListener("mouseover",function(){
	seeForm2.classList.add("form-display");
});

	seeForm2.addEventListener("mouseover",function(){
	seeForm2.classList.add("form-display");
	});

signup.addEventListener("mouseout",function(){
	seeForm2.classList.remove("form-display");
});
seeForm2.addEventListener("mouseout",function(){
	seeForm2.classList.remove("form-display");
});
logIn.addEventListener("click",function(){
	window.scrollTo(0,0);
})
signup.addEventListener("click",function(){
	window.scrollTo(0,0);
})
rating.addEventListener("click",function(){
	window.scrollTo(0,0);
})

var scrollTop1 = document.body.scrollTop;

var changeColor=function()
{
	for(var i=0;i<questions.length;i++)
	{
		questions[i].style.background=colors[i];
		if(i===4 || i===5)
			questions[i].style.color="black";
	}
	var firstElement=colors.shift();
	colors.push(firstElement);
}

setInterval(changeColor,500);

var textChange=function(index)
{
	var text=questions[index].textContent;
	questions[index].addEventListener("mouseover",function(){
	questions[index].textContent="Let's learn "+texts[index];

});
questions[index].addEventListener("mouseout",function(){
	questions[index].textContent=text;

});
}

for(var i=0;i<questions.length;i++)
{
	textChange(i);
}
var i=0;
var typeText=function()
{
	if(i<h1.length)
	{
		h1[i].classList.remove("transparent");
		i++;
		if(i===h1.length)
		{
			i=0;
			for(var j=0;j<h1.length;j++)
				h1[j].classList.add("transparent");
		}
	}

}
var a=document.querySelector(".info-2");
setInterval(typeText,150);
var appear=function()
{
	if(window.scrollY>600)
	{
		a.classList.add("appear");
		a.classList.remove(".info-2");
	}
}
window.addEventListener("scroll",appear);
var icon=document.querySelectorAll(".visible");
var hiddenIcon=document.querySelectorAll("footer div div i");
var iconAppear=function()
{
	icon[0].classList.remove("visible");
		icon[0].classList.add("opac");
		hiddenIcon[1].classList.add("opac2");
		hiddenIcon[2].classList.add("opac3");
		hiddenIcon[3].classList.add("opac4");
		hiddenIcon[4].classList.add("opac5");
		hiddenIcon[5].classList.add("opac6");
}
var iconDisappear=function()
{

	icon[0].classList.remove("opac");
		icon[0].classList.add("visible");
		hiddenIcon[1].classList.remove("opac2");
		hiddenIcon[2].classList.remove("opac3");
		hiddenIcon[3].classList.remove("opac4");
		hiddenIcon[4].classList.remove("opac5");
		hiddenIcon[5].classList.remove("opac6");
}
	icon[0].addEventListener("mouseover",iconAppear);
	icon[0].addEventListener("mouseout",iconDisappear);

var iconAppear2=function()
{
	icon[1].classList.remove("visible");
		icon[1].classList.add("opac");
		hiddenIcon[7].classList.add("opac2");
		hiddenIcon[8].classList.add("opac3");
		hiddenIcon[9].classList.add("opac4");
		hiddenIcon[10].classList.add("opac5");
		hiddenIcon[11].classList.add("opac6");
}
var iconDisappear2=function()
{

	icon[1].classList.remove("opac");
		icon[1].classList.add("visible");
		hiddenIcon[7].classList.remove("opac2");
		hiddenIcon[8].classList.remove("opac3");
		hiddenIcon[9].classList.remove("opac4");
		hiddenIcon[10].classList.remove("opac5");
		hiddenIcon[11].classList.remove("opac6");
}

icon[1].addEventListener("mouseover",iconAppear2);
	icon[1].addEventListener("mouseout",iconDisappear2);


var iconAppear3=function()
{
	icon[2].classList.remove("visible");
		icon[2].classList.add("opac");
		hiddenIcon[13].classList.add("opac2");
		hiddenIcon[14].classList.add("opac3");
		hiddenIcon[15].classList.add("opac4");
		hiddenIcon[16].classList.add("opac5");
		hiddenIcon[17].classList.add("opac6");
}
var iconDisappear3=function()
{

	icon[2].classList.remove("opac");
		icon[2].classList.add("visible");
		hiddenIcon[13].classList.remove("opac2");
		hiddenIcon[14].classList.remove("opac3");
		hiddenIcon[15].classList.remove("opac4");
		hiddenIcon[16].classList.remove("opac5");
		hiddenIcon[17].classList.remove("opac6");
}

icon[2].addEventListener("mouseover",iconAppear3);
icon[2].addEventListener("mouseout",iconDisappear3);

var iconAppear4=function()
{
		icon[3].classList.remove("visible");
		icon[3].classList.add("opac");
		hiddenIcon[19].classList.add("opac2");
		hiddenIcon[20].classList.add("opac3");
		hiddenIcon[21].classList.add("opac4");
		hiddenIcon[22].classList.add("opac5");
		hiddenIcon[23].classList.add("opac6");
}
var iconDisappear4=function()
{

		icon[3].classList.remove("opac");
		icon[3].classList.add("visible");
		hiddenIcon[19].classList.remove("opac2");
		hiddenIcon[20].classList.remove("opac3");
		hiddenIcon[21].classList.remove("opac4");
		hiddenIcon[22].classList.remove("opac5");
		hiddenIcon[23].classList.remove("opac6");
}

icon[3].addEventListener("mouseover",iconAppear4);
icon[3].addEventListener("mouseout",iconDisappear4);

var iconAppear5=function()
{
		icon[4].classList.remove("visible");
		icon[4].classList.add("opac");
		hiddenIcon[25].classList.add("opac2");
		hiddenIcon[26].classList.add("opac3");
		hiddenIcon[27].classList.add("opac4");
		hiddenIcon[28].classList.add("opac5");
		hiddenIcon[29].classList.add("opac6");
}
var iconDisappear5=function()
{

		icon[4].classList.remove("opac");
		icon[4].classList.add("visible");
		hiddenIcon[25].classList.remove("opac2");
		hiddenIcon[26].classList.remove("opac3");
		hiddenIcon[27].classList.remove("opac4");
		hiddenIcon[28].classList.remove("opac5");
		hiddenIcon[29].classList.remove("opac6");
}

icon[4].addEventListener("mouseover",iconAppear5);
icon[4].addEventListener("mouseout",iconDisappear5);


var languages=["C++","Java" ,"Python","HTML","CSS" ,"JavaScript",
			 "Kotlin", "Swift","Squirrel ","Objective-C",
			"SQL", "R"];
var gameTabs=document.querySelectorAll("#game div p");
var el;
var num=[0,1,2,3,4,5,6,7,8,9,10,11];
var found=function(el)
{
	for(var p=0;p<num.length;p++)
	{
		if(num[p]==el)
			return true;
	}
	return false;
}
var del=function(el)
{
	for(var p=0;p<num.length;p++)
	{
		if(num[p]==el)
			num[p]=-100;
	}
}

var rand;
var pos=0;
var gameContent=[0,0,0,0,0,0,0,0,0,0,0,0];
while(pos!==12)
{
	rand=Math.floor(Math.random()*12);
	if(found(rand)==true)
	{
		gameContent[pos]=languages[rand];
		// gameTabs[pos].textContent.style.opacity=0.5;
		del(rand);
		pos++;
	}	
}

var gameDivs=document.querySelectorAll("#game div");



gameDivs[5].addEventListener("click",function(){
		gameDivs[5].classList.add("rotate");
		gameTabs[5].textContent=gameContent[5];
		gameDivs[5].addEventListener("mouseout",function(){
				gameDivs[5].classList.remove("rotate");
			gameTabs[5].textContent="\xa0";
			});
});


gameDivs[0].addEventListener("click",function(){
		gameDivs[0].classList.add("rotate");
		gameTabs[0].textContent=gameContent[0];
		gameDivs[0].addEventListener("mouseout",function(){
				gameDivs[0].classList.remove("rotate");
			gameTabs[0].textContent="\xa0";
			});
});

gameDivs[1].addEventListener("click",function(){
		gameDivs[1].classList.add("rotate");
		gameTabs[1].textContent=gameContent[1];
		gameDivs[1].addEventListener("mouseout",function(){
				gameDivs[1].classList.remove("rotate");
			gameTabs[1].textContent="\xa0";
			});
});

gameDivs[2].addEventListener("click",function(){
		gameDivs[2].classList.add("rotate");
		gameTabs[2].textContent=gameContent[2];
		gameDivs[2].addEventListener("mouseout",function(){
				gameDivs[2].classList.remove("rotate");
			gameTabs[2].textContent="\xa0";
			});
});

gameDivs[3].addEventListener("click",function(){
		gameDivs[3].classList.add("rotate");
		gameTabs[3].textContent=gameContent[3];
		gameDivs[3].addEventListener("mouseout",function(){
				gameDivs[3].classList.remove("rotate");
			gameTabs[3].textContent="\xa0";
			});
});

gameDivs[4].addEventListener("click",function(){
		gameDivs[4].classList.add("rotate");
		gameTabs[4].textContent=gameContent[4];
		gameDivs[4].addEventListener("mouseout",function(){
				gameDivs[4].classList.remove("rotate");
			gameTabs[4].textContent="\xa0";
			});
});

gameDivs[6].addEventListener("click",function(){
		gameDivs[6].classList.add("rotate");
		gameTabs[6].textContent=gameContent[6];
		gameDivs[6].addEventListener("mouseout",function(){
				gameDivs[6].classList.remove("rotate");
			gameTabs[6].textContent="\xa0";
			});
});

gameDivs[7].addEventListener("click",function(){
		gameDivs[7].classList.add("rotate");
		gameTabs[7].textContent=gameContent[7];
		gameDivs[7].addEventListener("mouseout",function(){
				gameDivs[7].classList.remove("rotate");
			gameTabs[7].textContent="\xa0";
			});
});

gameDivs[8].addEventListener("click",function(){
		gameDivs[8].classList.add("rotate");
		gameTabs[8].textContent=gameContent[8];
		gameDivs[8].addEventListener("mouseout",function(){
				gameDivs[8].classList.remove("rotate");
			gameTabs[8].textContent="\xa0";
			});
});

gameDivs[9].addEventListener("click",function(){
		gameDivs[9].classList.add("rotate");
		gameTabs[9].textContent=gameContent[9];
		gameDivs[9].addEventListener("mouseout",function(){
				gameDivs[9].classList.remove("rotate");
			gameTabs[9].textContent="\xa0";
			});
});

gameDivs[10].addEventListener("click",function(){
		gameDivs[10].classList.add("rotate");
		gameTabs[10].textContent=gameContent[10];
		gameDivs[10].addEventListener("mouseout",function(){
				gameDivs[10].classList.remove("rotate");
			gameTabs[10].textContent="\xa0";
			});
});

gameDivs[11].addEventListener("click",function(){
		gameDivs[11].classList.add("rotate");
		gameTabs[11].textContent=gameContent[11];
		gameDivs[11].addEventListener("mouseout",function(){
				gameDivs[11].classList.remove("rotate");
			gameTabs[11].textContent="\xa0";
			});
});