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
  



  class Car {
    constructor(brand, model, fuelType, range, year, color, kilometersDriven, description, price) {
      this.brand = brand;
      this.model = model;
      this.fuelType = fuelType;
      this.range = range; // Range per charge (in km) for electric cars
      this.year = year;
      this.color = color;
      this.kilometersDriven = kilometersDriven;
      this.description = description;
      this.price = price;
    }
  
    // Method to display brand, model, year, fuel type, and price
    showBasicInfo() {
      console.log(`Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nFuel Type: ${this.fuelType}\nPrice: ${this.price} kr.`);
    }
  
    // Method to calculate and display the average kilometers driven per year
    averageKilometersPerYear() {
      const currentYear = new Date().getFullYear();
      const yearsOld = currentYear - this.year;
      const average = (this.kilometersDriven / yearsOld).toFixed(2);
      console.log(`${this.brand} ${this.model} has driven an average of ${average} km per year.`);
    }
  
    // Method to calculate and display the average number of charges per year (for electric cars)
    averageChargesPerYear() {
      if (this.fuelType.toLowerCase() !== 'electric') {
        console.log(`${this.brand} ${this.model} is not an electric car.`);
        return;
      }
      const currentYear = new Date().getFullYear();
      const yearsOld = currentYear - this.year;
      const annualKilometers = this.kilometersDriven / yearsOld;
      const charges = (annualKilometers / this.range).toFixed(2);
      console.log(`${this.brand} ${this.model} needs to be charged an average of ${charges} times per year.`);
    }
  }
  
  // Testing the class with three different cars
  const car1 = new Car("Tesla", "Model S", "Electric", 600, 2018, "Black", 80000, "Fast electric car with long range", 450000);
  const car2 = new Car("Toyota", "Corolla", "Gasoline", 0, 2015, "White", 150000, "Reliable and economical car", 120000);
  const car3 = new Car("Volkswagen", "ID.4", "Electric", 400, 2020, "Blue", 50000, "Popular electric SUV", 380000);
  
  // Testing the methods
  car1.showBasicInfo();
  car1.averageKilometersPerYear();
  car1.averageChargesPerYear();
  
  console.log("------------");
  
  car2.showBasicInfo();
  car2.averageKilometersPerYear();
  car2.averageChargesPerYear();
  
  console.log("------------");
  
  car3.showBasicInfo();
  car3.averageKilometersPerYear();
  car3.averageChargesPerYear();
  
  