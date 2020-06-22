$(document).ready(() => {


	var el = $('.el');
	var emp = $('.empty');

	function mix(){
		for(var i = 0; i <= 50; i++){
			$(`.el:nth-child(${Math.round(Math.random()*15)})`).insertBefore('.el:nth-child(1)')
		}
	}

	mix()



	el.click(function(){




		if($(this).offset().top == emp.offset().top){

			if($(this).nextAll().eq(0).html() == false){

				emp.insertBefore($(this))

				$(this).css({'left' : '-100px'}).animate({left : 0},200)



			}else if($(this).prevAll().eq(0).html() == false){

				emp.insertAfter($(this))

				$(this).css({'left' : '100px'}).animate({left : 0},200)

			}



		}

		if($(this).offset().left == emp.offset().left){

			if($(this).nextAll().eq(3).html() == false){

				if($(this).index() == 11){

					var elem = emp.prevAll().eq(0)
					emp.insertBefore($(this))
					$(this).insertAfter(elem)

				}else{

					var elem = emp.nextAll().eq(0)
					emp.insertBefore($(this))
					$(this).insertBefore(elem)

				}

				$(this).css({'top' : '-100px'}).animate({top : 0},200)


			}else if($(this).prevAll().eq(3).html() == false){

				var elem = emp.nextAll().eq(0)
				emp.insertBefore($(this))
				$(this).insertBefore(elem)

				$(this).css({'top' : '100px'}).animate({top : 0},200)

			}

		}



		for(var i = 1; i <= el.length; i++){
			if($(`.el:nth-child(${i})`).html() == i){
				if(i == 15){
					$('.congratulations').css({'visibility' : 'visible', 'opacity' : '1'})
				}
			}else{
				break
			}
		}

	})


	$('.again').click(function(){
		$('.congratulations').css({'visibility' : 'hidden', 'opacity' : '0'})
		mix()
	})


});
