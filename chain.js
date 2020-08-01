class Chain{

    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }

        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
    }

    display(){
        push();
        strokeWeight(10);
        stroke("red");
        var posA=this.constraint.bodyA.position
        var posB=this.constraint.bodyB.position
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }





}