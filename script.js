// setTimeout(() =>{
//     console.log(123)
// }, 2000)
//
// const handleInterval = setInterval(() => {
//     console.log('its interval')
// }, 2000)
//
// const handleClear = () => {
//     clearInterval(handleInterval)
// }
//
// setTimeout(() => {
//     handleClear()
// }, 10000)
//
// console.log(333)
// console.log('hello')
// console.log('world')

const name = document.querySelector('#name')
const color = document.querySelector('#color')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const vehicle = document.querySelector('#vehicle')
const model = document.querySelector('#model')
const manufacturer = document.querySelector('#manufacturer')
 submit.addEventListener('click', () => {
     let value = input.value
     fetch(`https://swapi.dev/api/people/${value}`)
         .then(res => res.json())
         .then(json => {
             console.log(json)
             name.innerHTML = json.name
             color.innerHTML = json.hair_color
             const fetchUrl = json.vehicles[0]
               if (fetchUrl){
                   fetch(fetchUrl)
                       .then(result => result.json())
                       .then(vehicle => {
                           vehicle.innerHTML = vehicle.name
                           model.innerHTML = vehicle.model
                           manufacturer.innerHTML = vehicle.manufacturer
                       })
               } else {

               }
         })
 })