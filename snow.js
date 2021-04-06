
class Snow{
	constructor(x,y,r)
	{
		this.body=Bodies.circle(x,y,r)
		World.add(world,this.body)
		
	this.r=r;	
	}

	display(){
		var Pos=this.body.position;	
		push();
		translate(Pos.x, Pos.y);
	fill(255)
	noStroke()
		rotate(this.body.angle)
		ellipseMode(RADIUS)
		ellipse( 0,0,this.r, this.r)
		pop();
		
	}	}
