$.fn.drag=function(){
	
	this.each(function(index,element){
		$(element).mousedown(function(ev){
			var disX=ev.pageX-$(this).offset().left;
			var disY=ev.pageY-$(this).offset().top;
				
			$(document).mousemove(fnMove);
			function fnMove(ev){
				$(element).css({
					'left':	ev.pageX-disX+'px',
					'top':	ev.pageY-disY+'px'
				});	
			}
			$(document).mouseup(fnUp);
			function fnUp(){
				$(document).unbind('mousemove',fnMove);
				$(document).unbind('mouseup',fnUp);
				element.releaseCapture && element.releaseCapture();
			}
			element.setCapture && element.setCapture();
			return false;
		});		
	});
};
