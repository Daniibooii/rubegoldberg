const game = {
	content: {
		main: function() {
			let cnv = createCanvas(1120, 640);
			let x = (windowWidth - width) / 2;
			let y = (windowHeight - height) / 2;
			cnv.position(x, y);


		},
		side: function() {
			rectMode(CENTER); // Mode c?enter set
			rect(960, height / 2, 320, height);
			fill(100);
		}
	},
	level: {
		one: function() {
			rectMode(CENTER); // Mode center set
			rect(240, height, width, 28);
			fill(100);
		},
		two: function() {
			//TODO Add method for adding bodies to world to correlate with levels
			//render here see p5 docs.


		}
	}
}
