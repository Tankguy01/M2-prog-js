class App
{
    runApplication()
    {
        console.log("hello world!")

        let uiButton = document.getElementById("uiButton");
        let localeFunction = function (e)
        {
            console.log("click!");
        };
        uiButton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new");
            para.appendChild(node);
            document.body.appendChild(para);
        });
    }

}
let app = new App();
app.runApplication();
