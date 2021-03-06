$(document).ready(main);

function main(){
	/*
	* This section allows full scroll effect on viewport.
	*/
	$('#fullpage').fullpage({
		anchors: ['prototype1','prototype2', 'prototype3', 'todo', 'game', 'website'],
		menu: '#menu',
		css3: true,
		scrollBar: true,
		scrollingSpeed: 700
	});
	
	prototype1($('.left1'));
  prototype2($('.left2'));
  prototype3($('.left3'));
  todo($('.left4'));
  game($('.left5'));
  website($('.left6'));
  $('body').fadeIn(4000);
}	

function game(target){
	target.bind('inview', function (event, visible) {
  		if (visible == true) {
  			$('.right-content .h2-wrapper h2').html('Contagion game');
        $('.right-content .content-wrapper p').html('');
        $('.right-content .content-wrapper p').html('JavaScript mini-game</br></br></br>');
        $('.right-content .content-wrapper ul').html('<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>JQuery</li><li>Bootstrap</li><li>Flexbox</li><li>Canvas</li>');
        $(".right-content .resources .demo").html("<a href='http://christianvt20.github.io/contagion-game' target='_blank'><h4>DEMO</h4></a>");
        $(".right-content .resources .code").html("<a href='https://github.com/ChristianVT20/contagion-game/tree/gh-pages' target='_blank'><h4>CODE</h4></a>");
  		}
	});
}

function website(target){
  target.bind('inview', function (event, visible) {
      if (visible == true) {
        $('.right-content .h2-wrapper h2').html('Personal website');
        $('.right-content .content-wrapper p').html('');
        $('.right-content .content-wrapper ul').html('<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>JQuery</li><li>Bootstrap</li><li>Flexbox</li>');
        $(".right-content .resources .demo").html("<a href='http://christianvt20.github.io' target='_blank'><h4>DEMO</h4></a>");
        $(".right-content .resources .code").html("<a href='https://github.com/ChristianVT20/ChristianVT20.github.io' target='_blank'><h4>CODE</h4></a>");
      }
  });
}

function prototype1(target){
  target.bind('inview', function (event, visible) {
      if (visible == true) {
        $('.right-content .h2-wrapper h2').html('Prototype #1');
        $('.right-content .content-wrapper p').html('');
        $('.right-content .content-wrapper p').html('Web page prototype</br></br></br>');
        $('.right-content .content-wrapper ul').html('<li>HTML5</li><li>CSS3 / SASS</li><li>JavaScript</li><li>JQuery</li><li>Bootstrap</li><li>Flexbox</li>');
        $(".right-content .resources .demo").html("<a href='http://christianvt20.github.io/aurora-prototype' target='_blank'><h4>DEMO</h4></a>");
        $(".right-content .resources .code").html("<a href='https://github.com/ChristianVT20/aurora-prototype/tree/gh-pages' target='_blank'><h4>CODE</h4></a>");
      }
  });
}

function prototype2(target){
  target.bind('inview', function (event, visible) {
      if (visible == true) {
        $('.right-content .h2-wrapper h2').html('Prototype #2');
        $('.right-content .content-wrapper p').html('');
        $('.right-content .content-wrapper p').html('Static main page with Bootstrap components </br></br></br>');
        $('.right-content .content-wrapper ul').html('<li>HTML5</li><li>CSS3</li><li>Bootstrap</li>');
        $(".right-content .resources .demo").html("<a href='http://christianvt20.github.io/furnance-store-prototype' target='_blank'><h4>DEMO</h4></a>");
        $(".right-content .resources .code").html("<a href='https://github.com/ChristianVT20/furnance-store-prototype' target='_blank'><h4>CODE</h4></a>");
      }
  });
}

function prototype3(target){
  target.bind('inview', function (event, visible) {
      if (visible == true) {
        $('.right-content .h2-wrapper h2').html('Prototype #3');
        $('.right-content .content-wrapper p').html('');
        $('.right-content .content-wrapper p').html('Static page with Bootstrap components </br></br></br>');
        $('.right-content .content-wrapper ul').html('<li>HTML5</li><li>CSS3</li><li>Bootstrap</li>');
        $(".right-content .resources .demo").html("<a href='http://christianvt20.github.io/blog-example' target='_blank'><h4>DEMO</h4></a>");
        $(".right-content .resources .code").html("<a href='https://github.com/ChristianVT20/blog-example/tree/gh-pages' target='_blank'><h4>CODE</h4></a>");
      }
  });
}

function todo(target){
  target.bind('inview', function (event, visible) {
      if (visible == true) {
        $('.right-content .h2-wrapper h2').html('To-Do list with AngularJS');
        $('.right-content .content-wrapper p').html('');
        $('.right-content .content-wrapper p').html('To-Do list with local persitence using AngularJS </br></br></br>');
        $('.right-content .content-wrapper ul').html('<li>HTML5</li><li>CSS3</li><li>Yeoman (Yo + Grunt + Bower)<li>Bootstrap</li><li>JQuery-UI</li>');    
        $(".right-content .resources .demo").html("<a href='http://christianvt20.github.io/ng-todolist' target='_blank'><h4>DEMO</h4></a>");
        $(".right-content .resources .code").html("<a href='https://github.com/ChristianVT20/ng-todolist' target='_blank'><h4>CODE</h4></a>");
      }
  });
}


