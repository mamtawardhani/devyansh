class Rope{
    constructor(bodyA,bodyB){
        var op={
            bodyA:bodyA,
            bodyB:bodyB,
            length:50,
            stiffness:0.04
        }

        this.body=Matter.Constraint.create(op)
        
        World.add(wo,this.body)
    }

    display(){
        var posa=this.body.bodyA.position
        var posb=this.body.bodyB.position
        line(posa.x,posa.y,posb.x,posb.y)
    }
}