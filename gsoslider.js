(function($){
	$.fn.gsoslider = function gsoslider(options) {

		var settings = $.extend({},$.fn.gsoslider.defaults,options)
		return this.each(function(){
			var ele = $(this)
			ele.addClass('gsoslider-container')
			var items = ele.find(settings.container)
			var n = items.length
			var t = ele.wrapInner('<div class="gsoslider">')
			var container = t.children('.gsoslider')
			container.css('width',100*n+'%')
			container.find('p').addClass('gsoslider-caption').css('width',100/n+'%')
			items.css('width',100/n+'%')
			var prev = $('<a class="gsoslider-prev" href="#">'+settings.prev+'</a>')
			var next = $('<a class="gsoslider-next" href="#">'+settings.next+'</a>')
			ele.append(next)
			ele.append(prev)
			var i = 0;
			next.on('click',function(e){
				e.preventDefault()
				if(i<n-1){
					i++;
				}else if(i==n-1){
					i=0;
				}
				slide(container,i)
				
			})
			prev.on('click',function(e){
				e.preventDefault()
				if(i>0){
					i--;
				}else if(i==0){
					i=n-1;
				}
				slide(container,i);
				
			})
			$(document).on('keydown',function(e){
				switch(e.which){
					case 39:
						next.trigger('click')
						break;
					case 37:
						prev.trigger('click')
						break;

				}
			})
		})

		function slide(ci,i){
			ci.animate({'left':-100*i + '%'},settings.delay)

		}
	}

	$.fn.gsoslider.defaults = {
		prev:'Prev',
		next:'Next',
		auto:false,
		delay:2000,
		effect:'',
		container:'section',
		data:{
			title:'',
			img:'',
			description:''
		}//for json response
	}
}(jQuery))
