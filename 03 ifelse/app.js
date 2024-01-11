class App
{
    runApplication()
    {
        console.log("hello world!")
        


        let title = document.getElementById("newstitle")
        console.log(title);

        let random = math.random();
        console.log(random);
        if(random < 0.2);
        {
            title.style.backgroundColor = "#FF0000";
        }
    }
}
let app = new App();
app.runApplication();




