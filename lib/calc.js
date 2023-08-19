const procentStavkaiInput = document.querySelector('#procentStavkaInput')

const minSumma = 10000
const maxSumma = 1000000

const minSrok = 6
const maxSrok = 60

const minDohod = 10000
const maxDohod = 250000

let summaPlateza = document.querySelector('#summaPlateza')

const summaRange = document.querySelector('#summaRange')
const summaInput = document.querySelector('#summaInput')

const rangeSummaMin = document.querySelector('#rangeSummaMin')
const rangeSummaMax = document.querySelector('#rangeSummaMax')

const rangeSrokMin = document.querySelector('#rangeSrokMin')
const rangeSrokMax = document.querySelector('#rangeSrokMax')

const srokRange = document.querySelector('#srokRange')
const srokInput = document.querySelector('#srokInput')

const dohodRange = document.querySelector('#dohodRange')
const dohodInput = document.querySelector('#dohodInput')

const dohodMin = document.querySelector('#dohodMin')
const dohodMax = document.querySelector('#dohodMax')

dohodMin.innerHTML = minDohod
dohodMax.innerHTML = maxDohod

dohodRange.setAttribute('min', minDohod) // Минимальная сумма кредита ползунок
dohodRange.setAttribute('max', maxDohod) // Максимальная сумма кредита ползунок

dohodRange.addEventListener('input', () => {
    dohodInput.value = dohodRange.value;
})

dohodInput.addEventListener('input', () => {
    dohodRange.value = dohodInput.value
})


const pereplata = document.querySelector('#pereplata')

summaRange.setAttribute('min', minSumma) // Минимальная сумма кредита ползунок
summaRange.setAttribute('max', maxSumma) // Максимальная сумма кредита ползунок

rangeSummaMin.innerHTML = minSumma
rangeSummaMax.innerHTML = maxSumma

summaInput.setAttribute('min', minSumma) // Минимальная сумма кредита инпут
summaInput.setAttribute('max', maxSumma) // Максимальная сумма кредита инпут


srokInput.setAttribute('min', minSrok) // Минимальный срок редита инпут
srokInput.setAttribute('max', maxSrok) // Максимальный срок кредита инпут

srokRange.setAttribute('min', minSrok) // Минимальный срок кредита ползунок
srokRange.setAttribute('max', maxSrok) // Максимальный срок кредита ползунок

rangeSrokMin.innerHTML = minSrok
rangeSrokMax.innerHTML = maxSrok

summaRange.value = summaInput.value
srokRange.value = srokInput.value

const odobrenie = document.querySelector('#odobrenie')

summaRange.addEventListener('input', () => {
    summaInput.value = summaRange.value
})

summaInput.addEventListener('input', () => {
    summaRange.value = summaInput.value
})

srokRange.addEventListener('input', () => {
    srokInput.value = srokRange.value
})

srokInput.addEventListener('input', () => {
    srokRange.value = srokInput.value
})

addEventListener('input', () => {
    // Месячная ставка
    let stavkaMes = (procentStavkaInput.value / 12) * 0.01

    let kAnuitet = (stavkaMes * ((1 + stavkaMes) ** srokInput.value)) / (((1 + stavkaMes) ** srokInput.value) - 1)

    // Ежемесячная сумма платежа 
    summa = summaInput.value * kAnuitet
    summa = summa.toFixed(2)
    summaPlateza.innerHTML = summa
    
    // Переплата по кредиту
    let summaPereplati = (summa * srokInput.value) - summaInput.value
    summaPereplati = summaPereplati.toFixed(2)
    pereplata.innerHTML = summaPereplati

    let creditNagruzka = dohodInput.value / summa
    creditNagruzka = 100 / creditNagruzka
    
    if (creditNagruzka < 50) {
        odobrenie.innerHTML = 'Высокая вероятность одобрения.'
        odobrenie.classList.remove('red')
        odobrenie.classList.remove('yellow')
        odobrenie.classList.add('green')
    } else if (creditNagruzka > 50 && creditNagruzka < 70) {
        odobrenie.innerHTML = 'Низкая вероятность одобрения.'
        odobrenie.classList.remove('red')
        odobrenie.classList.add('yellow')
    } else if (creditNagruzka > 70 && creditNagruzka < 80) {
        odobrenie.innerHTML = 'Очень низкая вероятность одобрения.'
        odobrenie.classList.add('red')
    } else {
        odobrenie.innerHTML = 'Кредит не одобрят!'
    }
    
})
