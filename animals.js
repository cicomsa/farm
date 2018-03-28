class Animal {
  constructor(age) {
    this.age = age
  }
  getValueInEuros(){
    return this.price* this.getWeightInKg()
  }
}

class Pig extends Animal {
  constructor(age) {
    super(age)
    this.price = 4

  }

  getWeightInKg() {
    return Math.min(this.age*2.3,700)
  }
  getValueInEuros() {}

}

class Cow extends Animal {
  constructor(age) {
    super(age)
    this.price = 5

  }
  getWeightInKg() {
    return Math.min(this.age*1.5,1200)
  }
  getValueInEuros() {}
}

class Horse extends Animal {
  constructor(age) {
    super(age)
    this.price = 10
    
  }
  getWeightInKg() {
    return Math.min(this.age*1.7,1000)
  }
  getValueInEuros() {}

}

module.exports = { Pig, Cow, Horse}
