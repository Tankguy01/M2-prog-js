class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "#4D94D1";
        g.fillRect(0,0,canvas.width,canvas.height);

        g.fillStyle = "#544F4F"
        g.fillRect(0,0,10,10);
        console.log(canvas);
    }
}

let app = new App();
app.runApplication();
