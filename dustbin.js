class Dustbin {
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.5,
            'density':10,
            'friction':5
            
        }
        this.Body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.Body);
    }
    display(){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push()
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill('white');
        rect(0, 0, this.width,this.height);
        pop();
    }
}