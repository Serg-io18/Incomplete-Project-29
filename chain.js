class Slingshot{
    constructor(bodyA, dotB){
        var options = {
            bodyA: bodyA,
            pointB: dotB,
            stiffness: 0.04,
            length: 10
        }
        this.dot = dotB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    display(){
        
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var positionB = this.dot;
            push();
            strokeWeight(4);
            stroke(113,196,204);
            line(pointA.x - 25, pointA.y, positionB.x, positionB.y);
            line(pointA.x - 20,pointA.y,positionB.x + 30,positionB.y-3);
            pop();
        }
    }
    
    fly() {
        this.sling.bodyA = null;
    }
}