class App
{
    runApplication()
    {
        console.log("hello world!")
        


        let title = document.getElementById("newstitle")
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        } else {
            title.style.backgroundColor = "#0000FF"
        }
    }
}
let app = new App();
app.runApplication();




