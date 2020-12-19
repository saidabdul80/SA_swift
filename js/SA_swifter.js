class SA_SwiftMenu {
	  constructor(wrapper, radius,tabs,rotate=0)  {	  	
	    this.wrapper =wrapper;	    
	    this.radius = radius;
	    this.menu = wrapper;
	    this.tabs = $('#'+wrapper+' div');
	    this.stateDataShow = false;
	    this.rotate =0;// parseInt(rotate);
	  }
	  switf() {	  		  	
	    var $vm = this;
	    
		  	var radius = $vm.radius;
			var fields = $('#'+$vm.wrapper+' div');
			var container = $('#'+$vm.wrapper);
			var width = container.width();
			var height = container.height();
			var Mainwrapper =  $('#'+$vm.wrapper);
		  Mainwrapper.on('click', function(){

		if ($vm.stateDataShow === false) {

			fields.css('display','block');
			$vm.stateDataShow = true;

			if (fields.length <4) {				
				//determining interval of menus if less dan 4 they should come closer
				var angle = $vm.rotate, step = (2*Math.PI) / 7;			
			}else{
				//determining interval of menus
				var angle =0, step = (2*Math.PI) / fields.length;
			}

			fields.each(function() {
			    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			    /*if(window.console) {
			        //console.log($(this).text(), x, y);
			    }*/
			    $(this).css({
			        left: x +43.3+ 'px',
			        top: y +45+ 'px'
			    });
			    angle += step;
			})
		}else if ($vm.stateDataShow === true) {
			//return menu back to ==> hide splitted menu
			fields.each(function() {			    
			    $(this).css({
			        left: '0px',
			        top: '0px'
			    });
			})
			setTimeout(function() {
				$vm.stateDataShow = false;
				fields.css('display','none');

			}, 100);

		}
		});
		 
	
	  	/*
	  	*/
		
	  }
	 	clickOutside(){
	 		var $vm = this;
	 		$('.swift').parents().click(function(e){
		  		$vm.tabs.each(function() {			    
				    $(this).css({
				        left: '0px',
				        top: '0px'
				    });
				})
				setTimeout(function() {
					$vm.stateDataShow = false;
					$vm.tabs.css('display','none');

				}, 100);
		  	}).children().click(function(event){
		  		event.stopPropagation();
		  	});
	 		/*$("body").click(function(e) { 
		 	if($(e.target).is('.swift')){ 
		 		 
		 	}else{
		 		
		 	}
		 });*/
	 	}

	}
