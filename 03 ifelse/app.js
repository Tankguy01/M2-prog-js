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
            title.style.backgroundColor = "#0000FF";
        }


        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        console.log(newsitem1);

        let kleur = Math.random();
        console.log(kleur);
        if(kleur < 0.2)
        {
            newsitem1.style.backgroundColor = "#FFA500";
        } else {
            newsitem1.style.backgroundColor = "#FFFF00";
        }


         let newsitem2 = document.getElementsByClassName("gamenews")[1];
        console.log(newsitem2);
        
        let getal = Math.random();
        console.log(getal);
        if(getal < 0.2)
        {
            newsitem2.style.backgroundColor = "##32CD32";
        } else {
            newsitem2.style.backgroundColor = "#5B2AC3";
        }
    }
}
let app = new App();
app.runApplication();




