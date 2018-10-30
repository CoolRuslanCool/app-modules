export class CarService {

  private cars = [
    {name: 'Ford', year: 2018},
    {name: 'Opel', year: 2013},
    {name: 'Mazda', year: 2015},
    {name: 'Mercedes', year: 2011}
  ];
  getCars() {
    return this.cars;
  }

  addCar(car: Car) {
    this.cars = [...this.cars, car];
  }

  deleteCar(car: Car) {
    this.cars = this.cars.filter(item => item !== car);
  }
}

interface Car {
  name: string;
  year: number
}
