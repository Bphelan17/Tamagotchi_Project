const tamagotchiAge = {
    age: 0,
    start() {
        const timeAge = setInterval( () => {
            this.age++
            console.log(this.age)
            if(this.age === 100) {
                console.log('Your Pet Died!')
                clearInterval(timeAge)
            }
        }, 50000);
    }
}

const tamagotchiHunger = {
    hunger: 0,
    start() {
        const hungerLevel = setInterval( () => {
            this.hunger++
            console.log(this.hunger)
            if(this.hunger === 10) {
                console.log('Your Pet Died!')
                clearInterval(hungerLevel)
            }
        }, 10000);
    }
}

const tamagotchiSleep = {
    sleepiness: 0,
    start() {
        const sleepLevel = setInterval( () => {
            this.sleepiness++
            console.log(this.sleepiness)
            if(this.sleepiness === 10) {
                console.log('Your Pet Died!')
                clearInterval(sleepLevel)
            }
        }, 10000);
    }
}

const tamagotchiBoredom = {
    boredom: 0,
    start() {
        const boredomLevel = setInterval( () => {
            this.boredom++
            console.log(this.boredom)
            if(this.bordedom === 10) {
                console.log('Your Pet Died!')
                clearInterval(boredomLevel)
            }
        }, 10000);
    }
}

console.log(tamagotchiAge.start())
console.log(tamagotchiHunger.start())
console.log(tamagotchiSleep.start())
console.log(tamagotchiBoredom.start())

   


