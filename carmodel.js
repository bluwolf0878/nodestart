class Person {
    constructor(fornavn, efternavn, email, fødselsår, stilling, køn) {
      this.fornavn = fornavn;
      this.efternavn = efternavn;
      this.email = email;
      this.fødselsår = fødselsår;
      this.stilling = stilling;
      this.køn = køn;
    }
  
    // Metode til at logge en hilsen
    hilsen() {
      console.log(`Hej jeg hedder ${this.fornavn} ${this.efternavn}`);
    }
  
    // Metode til at beregne og logge alderen
    alder() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.fødselsår;
      console.log(`${this.fornavn} ${this.efternavn} er ${age} år gammel.`);
    }
  
    // Metode til at logge visitkort med fulde navn, email og stilling
    visitkort() {
      console.log(`Navn: ${this.fornavn} ${this.efternavn}\nEmail: ${this.email}\nStilling: ${this.stilling}`);
    }
  }
  
  // Oprettelse af tre instanser af klassen
  const bager = new Person("Anna", "Jensen", "anna.jensen@gmail.com", 1985, "Bager", "Kvinde");
  const tømrer = new Person("Peter", "Larsen", "peter.larsen@live.dk", 1990, "Tømrer", "Mand");
  const webudvikler = new Person("Mads", "Nielsen", "mads.nielsen@hotmail.com", 1995, "Webudvikler", "Mand");
  
  // Kald af metoder på hver instans
  bager.hilsen();
  bager.alder();
  bager.visitkort();
  
  console.log("------------");
  
  tømrer.hilsen();
  tømrer.alder();
  tømrer.visitkort();
  
  console.log("------------");
  
  webudvikler.hilsen();
  webudvikler.alder();
  webudvikler.visitkort();
  