class Roof{
    constructor(x,y){

    var options={
        isStatic:true
      }
     this.body=Bodies.rectangle(x,y,300,30,options)
     World.add(wo,this.body)
}

display(){
    var pos=this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,300,30)
}
}