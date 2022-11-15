// Even though a couple things don't work as intended I believe and hope this is 80% complete. I am so close, and honestly proud of what I was able to accomplish
//If it's not 80% complete I can fix changes this week to meet the units deliverable requirements. Please let me know, I'm improving and
//I want to prove to myself with project_1 that I can do it. 


const btnStart = document.querySelector("#btn-start")
btnStart.addEventListener('click', handleStartClick)

function handleStartClick() {
    console.log('the game has started')
}




const showAge = document.querySelector("#AgeCounter");

const tamagotchiAge = () => {
    age = 0
    function start() {
        const timeAge = setInterval( () => {
            showAge.textContent = this.age++
            console.log(this.age)
            if(this.age === 101) {
                clearInterval(timeAge)
                deathMessage.textContent = 'Your Pet Died!!!'
            }
        }, 20000);
    }
    start()
}
tamagotchiAge()

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
        }, 10000);
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







function fixHunger() {
    // console.log('you have fed your pet')
}




const showSleep = document.querySelector("#Sleep")

const tamagotchiSleep = () => {
    sleepiness = 0
    function start() {
        const sleepLevel = setInterval( () => {
            showSleep.textContent = this.sleepiness++
            console.log(this.sleepiness)
            if(this.sleepiness === 11) {
                clearInterval(sleepLevel)
                deathMessage.textContent = 'Your Pet Died!!!'
            }
        }, 10000);
    }
    function fixSleep () {
        showSleep.textContent = this.sleepiness--
    }
    start()
    fixSleep()
    const btnSleep = document.querySelector("#btn-sleeper")
    btnSleep.addEventListener('click', fixSleep)
}
tamagotchiSleep()



function fixSleep() {
    // console.log('Your pet is sleeping, shhhh')
}


const showBoredom = document.querySelector("#Boredom")

const tamagotchiBoredom = () => {
    boredom = 0
    function start() {
        const boredomLevel = setInterval( () => {
            showBoredom.textContent = this.boredom++
            console.log(this.boredom)
            if(this.boredom === 11) {
                clearInterval(boredomLevel)
                deathMessage.textContent = 'Your Pet Died!!!'
            }
        }, 10000);
    }
    function fixBoredom () {
        showBoredom.textContent = this.boredom--
    }
    start()
    fixBoredom()
    const btnPlayTime = document.querySelector("#btn-play")
    btnPlayTime.addEventListener('click', fixBoredom)
}
tamagotchiBoredom()


function fixBoredom() {
    // console.log('Your pet is wagging their tail and fetching the ball')
}






   


