class App
{
    runApplication()
    {
        this.greeting ="starting up";
        this.variabelwaarde = 100
        this.appNaam =" Stars" 
        this.versienummer =' 0.91' 
        this.versiedatum= "21-11-23"
        this.autheur = "Nael" 
        this.copyright = "Nael Stars"
        this.distributeur = "Negative"
        this.darkmode = true
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