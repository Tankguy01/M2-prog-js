class App
{
    runApplication()
    {
        this.nummer = 2044.5
        this.mode = false
        this.greeting ="starting up";
        this.variabelwaarde = 100
        this.appNaam =" Stars" 
        this.versienummer =' 0.91' 
        this.versiedatum= "21-11-23"
        this.autheur = "Nael" 
        this.copyright = "Nael Stars"
        this.distributeur = "Negative"
        this.darkmode = true
        this.gameserver = "alfa 1.2"
    }
}
let app = new App();
app.runApplication();


console.log(app.greeting);
console.log("variabelwaarde: " + app.variabelwaarde);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode); 
console.log("nummer: " + app.nummer)
console.log("mode: " + app.mode) 
console.log("gameserver: " + app.gameserver)