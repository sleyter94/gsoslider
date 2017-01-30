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
			items.css('width',100/n+'%')
			var prev = $('<a href="#">'+settings.prev+'</a>')
			var next = $('<a href="#">'+settings.next+'</a>')
			ele.after(next)
			ele.after(prev)
			var i = 0;
			next.on('click',function(e){
				e.preventDefault()
				if(i<n-1){
					i++;
					slide(container,i);
				}
			})
			prev.on('click',function(e){
				e.preventDefault()
				if(i>0){
					i--;
					slide(container,i);
				}
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
			ci.css('left',-100*i + '%')
		}
	}

	$.fn.gsoslider.defaults = {
		prev:'Prev',
		next:'Next',
		auto:false,
		delay:5000,
		container:'section'
	}
}(jQuery))
