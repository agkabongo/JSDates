var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let titres = ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4']
 titres.forEach(element => {
    let x = document.createElement('div');
    x.className = 'container'
    document.body.appendChild(x)
    let unTitre = document.createElement('H1') 
    let par = document.createElement('p')
    unTitre.innerHTML = element
    x.appendChild(unTitre)
    x.appendChild(par)
 });


let paragraphe = document.querySelectorAll('p')

//EXERCISE 1

let d = new Date();
let current = d.toLocaleString('fr-FR', {
    timeZone: 'Europe/Brussels'
})
let american = d.toLocaleString('en-US', {
    timeZone: 'America/Anchorage'
})
let iceland = d.toLocaleString('en-US', {
    timeZone: 'Iceland'
})

//EXERCISE 2 
let birthday = new Date()
let today= new Date()
birthday.setFullYear(1995, 9, 10)
let days = (today - birthday) / (1000 * 60 * 60 * 24)
let nbrmonths = Math.ceil(days / 31)
let nbrYears = Math.ceil(nbrmonths / 12)


//EXERCISE 3 
let numberInput = document.createElement('input')
let userInput; 
numberInput.setAttribute('type','number')
numberInput.setAttribute('step', '1000')
numberInput.value = '1000'
document.getElementsByClassName('container')[2].appendChild(numberInput)

userInput = numberInput.addEventListener('keyup', timeStamps)

function timeStamps(){
    future = new Date()
    future.setHours(numberInput.value)
    return paragraphe[2].innerHTML = 'In ' + numberInput.value + ' hours we will be ' + future
}

//EXERCICE 4 





//OUTPUT
paragraphe[0].innerHTML = `Brussels - ${current}<br>Anchorage - ${american}<br>Reykjavik - ${iceland}`
paragraphe[1].innerHTML = 'Between today  ' + today + ' and your birthday ' + birthday + ' We have ' + days + ' days, ' + nbrmonths + ' months, ' + nbrYears + ' years'
paragraphe[2].innerHTML = 'We find the exact time and date we will be in 80000 hours.'

/*timeZone for d.localString https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a*/
