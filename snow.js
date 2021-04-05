
class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :1.0,
            friction :1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("snow4.wepb")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display(){
		var Pos=this.body.position;	
		//push()
		translate(Pos.x, Pos.y);
	
		rotate(this.body.angle)
		image(this.image, 0,0,this.r*2, this.r*2)
		//pop()
	}
}
