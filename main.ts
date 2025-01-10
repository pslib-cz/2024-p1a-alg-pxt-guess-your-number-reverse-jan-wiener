//Catch my Number 2



function randInt(min: number, max: number): number {
    return min + Math.round(Math.random() * (max - min))
}


function getPresses(button_: string) {
    if (button_ == "A") {
        while (true) {

        }
    }
}


let intervalMin: number = 1
let intervalMax: number = 100
let guessCount: number = 0
let toGuess: number = 10
let currentGuess: number
//console.log(toGuess)
while (true) {
    currentGuess = randInt(intervalMin, intervalMax)
    guessCount += 1
    console.log(currentGuess)


    if (currentGuess == toGuess) {
        console.log(`Uhodl jsem číslo na ${guessCount}. pokus`)
        basic.showNumber(currentGuess)
        break
    } else if (currentGuess < toGuess) {
        console.log(`Hádám ${currentGuess}, ale číslo je větší`)
        intervalMin = currentGuess+1
        continue
    } else {
        console.log(`Hádám ${currentGuess}, ale číslo je menší`)
        intervalMax = currentGuess-1
        continue
    }
}

