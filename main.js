// create object for pet
const tamagotchi = {
    age: 0,
    // hungerLevel: 1,
    // sleepyLevel: 1,
    // boredomLevel: 1,
}

// const increaseAge = document.querySelector('h3')




const timeAge = () => {
    tamagotchi.age += 1;
    console.log(tamagotchi);
}


const ageInterval = setInterval(timeAge, 1000);  

   


