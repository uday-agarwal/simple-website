'use strict'

// New comment
/* This one too! */

console.log('what a day!')

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

