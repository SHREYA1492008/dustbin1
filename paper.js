class PAPER
{
    var options{
      isStatic:false,
      restitution:0.3,
      friction:0.5
      density:1.2,
    

    }
     this.x=x;
     this.y=y;
     this.r=r
     this.body=Bodies.circle(this.x, this.y,this.r/2,options)
     World.add(World, this.body);
}
display(){

        var paperpos = this.body.position;

        Push()
        translate(paperpos.x, paperpos.y);
        rectMode(centre)
        strokeWeight(3);
        Fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        Pop()


}
