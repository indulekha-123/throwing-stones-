class Mango1{
    constructor(x,y,radius) {
        var options={
            isStatic: true,
           restitution:0,
             friction:1,     
             
                 
          
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/mango.png");
       
        World.add(world, this.body);
    
    }
    display(){
        var pos =this.body.position;
     fill ("red");
     ellipseMode(RADIUS);
     imageMode(CENTER);
     image(this.image,420,500, 29,50)
     image(this.image,438,480, 29,50)
     image(this.image,500,410, 29,50)
     image(this.image,620,400, 29,50)
     image(this.image,720,439,29,50)
    }
}
    