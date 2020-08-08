class SlingShot{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB;
        this.constraint=Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world,this.constraint);
    }

    display(){
        image(this.image1,200,22);
        image(this.image2,170,22);
        if(this.constraint.bodyA!=null){
            push();
            stroke(48,22,8);
            var posA=this.constraint.bodyA.position
            var posB=this.pointB;
            if(posA.x<220){
                strokeWeight(10);
                line(posA.x-25,posA.y,posB.x-10,posB.y);
                line(posA.x-25,posA.y,posB.x+30,posB.y);
                image(this.image3,posA.x-30,posA.y-13,12,30); 
            }
            else{
            strokeWeight(6);
            line(posA.x-25,posA.y,posB.x-10,posB.y);
            line(posA.x+25,posA.y,posB.x+30,posB.y);
            image(this.image3,posA.x+25,posA.y-13,12,30);
            }
            pop();

        }
    }
    fly(){
        console.log("fly")
        this.constraint.bodyA=null
    }
    attach(body){
        this.constraint.bodyA=body
    }
}