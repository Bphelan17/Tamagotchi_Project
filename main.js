// // create object for pet
// const tamagotchi = {
//     age: 0,
//     start() {
        
//     }
// }

// // const increaseAge = document.querySelector('h3')




// const timeAge = () => {
//     tamagotchi.age += 1;
//     console.log(tamagotchi);
// }


// const ageInterval = setInterval(timeAge, 1000);  

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

console.log(tamagotchiAge.start())
console.log(tamagotchiHunger.start())

   


