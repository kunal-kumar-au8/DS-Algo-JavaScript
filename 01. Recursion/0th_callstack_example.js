function takeShower(){
    return "Showering"
}
function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Omlate","Bolied Egg","Protine Shake"]
    return items[math.floor(Math.random()*items.length)];
}
function wakeUp(){
    takeShower()
    eatBreakfast()
    console.log("Ok let's ready to work!")
}

wakeUp()