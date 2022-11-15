
const btnStart = document.querySelector("#btn-start")
btnStart.addEventListener('click', handleStartClick)

function handleStartClick() {
    console.log('the game has started')
}




const showAge = document.querySelector("#AgeCounter");

const tamagotchiAge = {
    age: 0,
    start() {
        const timeAge = setInterval( () => {
            showAge.textContent = this.age++
            console.log(this.age)
            if(this.age === 101) {
                console.log('Your Pet Died!')
                clearInterval(timeAge)
            }
        }, 500);
    }
}

const deathMessage = document.querySelector("#pet-dead")

const showHunger = document.querySelector("#Hunger")


const tamagotchiHunger = () => {
    hunger = 0
    function start() {
        const hungerLevel = setInterval( () => {
            showHunger.textContent = this.hunger++
            console.log(this.hunger)
            if(this.hunger === 11) {
                clearInterval(hungerLevel)
                deathMessage.textContent = 'Your Pet Died!!!'
            }
        }, 100);
    }
    function fixHunger () {
        showHunger.textContent = this.hunger--
    }
    start()
    fixHunger()
    const btnFeed = document.querySelector("#btn-feeder")
    btnFeed.addEventListener('click', fixHunger)
}
tamagotchiHunger()

// function fixHunger () {
    
//     showHunger.textContent = this.hunger--
// }





function handleStartClick() {
    // console.log('you have fed your pet')
}




const showSleep = document.querySelector("#Sleep")

const tamagotchiSleep = {
    sleepiness: 0,
    start() {
        const sleepLevel = setInterval( () => {
            showSleep.textContent = this.sleepiness++
            console.log(this.sleepiness)
            if(this.sleepiness === 11) {
                console.log('Your Pet Died!')
                clearInterval(sleepLevel)
            }
        }, 10000);
    }
}

const btnSleep = document.querySelector("#btn-sleeper")
btnSleep.addEventListener('click', handleStartClick)

function handleStartClick() {
    // console.log('Your pet is sleeping, shhhh')
}


const showBoredom = document.querySelector("#Boredom")

const tamagotchiBoredom = {
    boredom: 0,
    start() {
        const boredomLevel = setInterval( () => {
            showBoredom.textContent = this.boredom++
            console.log(this.boredom)
            if(this.bordedom === 11) {
                console.log('Your Pet Died!')
                clearInterval(boredomLevel)
            }
        }, 10000);
    }
}

const btnPlayTime = document.querySelector("#btn-play")
btnPlayTime.addEventListener('click', handleStartClick)

function handleStartClick() {
    // console.log('Your pet is wagging their tail and fetching the ball')
}



// console.log(tamagotchiAge.start())
// console.log(tamagotchiHunger.start())
// console.log(tamagotchiSleep.start())
// console.log(tamagotchiBoredom.start())


   


