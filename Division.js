class Division{

    constructor(x,y,width,height){
        var options ={
        isStatic : true,
        }
        this.width = width;
        this.height = height ;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }

    display(){

        var divisionPos = this.body.position;
     
        push();
        transalate(divisionPos.x,divisionPos.y)
        rectMode(CENTER)
        fill("white")
        rect(divisionPos.x,divisionPos.y,this.width,this.height)


    }









}