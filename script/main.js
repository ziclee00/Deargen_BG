var width = window.innerWidth;
var cir01 = $(".circle_01");
var cir02 = $(".circle_02");
var createCircle = function(circleName){
	console.log(circleName);
	var cx = Math.floor((Math.random() * width) + 1);
	var cy = Math.floor((Math.random() * 500) + 1);
	var r = Math.floor((Math.random()*200) + 100);
	var dx = Math.floor((Math.random()*100) + 50);
	var dy = Math.floor((Math.random()*200) + 50);
	var duration = Math.random();
	circleName.css({"cx" : cx , "cy" : cy , "r" : r});
	TweenMax.to(circleName , 0 , {opacity : 0});
	TweenMax.to(circleName , duration , {opacity : 1});

	TweenMax.to(circleName , 30 , {x:dx , y: -dy , onComplete:createCircle , onCompleteParams : [circleName]});
};
createCircle(cir01);
createCircle(cir02);


Particles.init({
	selector : ".particles_01" , 
	maxParticles : 60 , 
	sizeVariations : 12 ,
	speed : 0.2 ,
	color : ["#13918C" , "#177C81" , "#1f4d6a"],
	connectParticles : true
});


