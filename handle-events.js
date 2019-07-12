	      AFRAME.registerComponent('handle-events', {
		              update: function () {
				                var el = this.el;  // <a-sphere>
				                var flag = false;
				      	      
				      		el.addEventListener('mouseenter', () => {
							
							console.log("handling mouse enter");
							flag = true;

									if (el.parentEl.getAttribute('visible')) {
													el.object3D.scale.x = el.object3D.scale.x * 2;
													el.object3D.scale.y = el.object3D.scale.y * 2;
													el.object3D.scale.z = el.object3D.scale.z * 2;
													setTimeout(changeScene, 800);
												}
								      });
				      		el.addEventListener('mouseleave', () => {
								        flag = false;
									if (el.parentEl.getAttribute('visible')) {
													el.object3D.scale.x = el.object3D.scale.x * 0.5;
													el.object3D.scale.y = el.object3D.scale.y * 0.5;
													el.object3D.scale.z = el.object3D.scale.z * 0.5;
												}
								      });
				      	      function changeScene() {
						      		  if (flag) {
									  			flag = false;
									  			el.object3D.scale.x = el.object3D.scale.x * 0.5;
									  			el.object3D.scale.y = el.object3D.scale.y * 0.5;
									  			el.object3D.scale.z = el.object3D.scale.z * 0.5;
									              var parel = el.parentEl;
									  		<!-- get the entity out of the way --> 
										                  parel.object3D.scale.x = 0;
									                  parel.object3D.scale.y = 0;
									                  parel.object3D.scale.z = 0;
									              	
									              	var toel = document.getElementById(el.getAttribute('toid'));
									  		
									                  toel.object3D.scale.x = 1;

									                  toel.object3D.scale.y = 1;

									                  toel.object3D.scale.z = 1;
									                  
									        console.log("changing scene to " + toel.id);
									  	    toel.setAttribute('visible', 'true');
									              
									              document.getElementById(el.parentEl.id).setAttribute('visible', 'false');
          									  <!-- change ambient sound -->
									  var ambient = document.getElementById("ambient_sound");
						
									  var ambient_id = toel.getAttribute('ambient');

									  <!-- ambient.setAttribute('src', document.getElementById(ambient_id).getAttribute('src')); -->
									  ambient_el = document.querySelector('#' + ambient_id);
									  ambient = ambient_el;
									  console.log("changing ambient sound to " + ambient.getAttribute("src"));

									  <!--[TBD] mute all scene sounds>
								      var sounds = parel.parentEl.querySelectorAll('a-sound');	
									  console.log("Muting scene sounds: ");
									  console.log(sounds);
							  		  };	
			      		     }
				      		    
				      		}
		            });

