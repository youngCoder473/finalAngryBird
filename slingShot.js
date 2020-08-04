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
        World.add(world,this.constraint);
    }

    display(){
        if(this.constraint.bodyA!=null){
            push();
            strokeWeight(10);
            stroke("red");
            var posA=this.constraint.bodyA.position
            var posB=this.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
            pop();
        }
    }
    fly(){
        console.log("fly")
        this.constraint.bodyA=null
    }
}