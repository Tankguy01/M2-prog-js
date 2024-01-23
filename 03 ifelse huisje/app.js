class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
       g.fillStyle = "gray";
       g.moveTo(70,20);
       g.lineTo(60,40);
       g.lineTo(80,30);
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "red";
       g.moveTo(30,10);
       g.lineTo(70,20);
       g.lineTo(60,40);
       g.lineTo(20,30);
       g.closePath();
       g.stroke();
       g.fill();
       
       g.beginPath()
       g.fillStyle = "lightgray";
       g.moveTo(20,30);
       g.lineTo(60,40);
       g.lineTo(60,60);
       g.lineTo(20,50);
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "gray";
       g.moveTo(60,40);
       g.lineTo(80,30);
       g.lineTo(80,50);
       g.lineTo(60,60);
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "black";
       if (Math.random()<0.5)
       {
        g.fillStyle = "white";
    }
       
       g.moveTo(20,40);
       g.lineTo(20,45);
       g.lineTo(40,45);
       g.lineTo(40,40);
       g.closePath();
       g.stroke();
       g.fill();


    }
}

let app = new App();
app.runApplication();
