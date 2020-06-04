self.addEventListener('message', function(evt){
	var i = 0,
	meeb = {},
	canvasheight = 600,
	canvaswidth = 600,
	meebArray = evt.data,
	reset = 0;

	for(i = 0; i < meebArray.length; i+= 1) {
			meeb = meebArray[i];
			meeb.y += (meeb.vy);
			meeb.x += (meeb.vx);
			meeb.rotation += meeb.vr;
			if(reset > -meeb.radius) {
				reset = -meeb.radius;
			}
			if(meeb.y < reset) {
				meeb.y = canvasheight + meeb.radius;
				//meeb.x = Math.random() * canvaswidth;
			} else if ( meeb.y > canvasheight+meeb.radius) {
				meeb.y = -meeb.radius;
			}

			if(meeb.x < -meeb.radius) {
				meeb.x = canvaswidth + meeb.radius;
			} else if (meeb.x > canvaswidth + meeb.radius) {
				meeb.x = -meeb.radius;
			}
	}

	postMessage(meebArray);

}, false);