console.log('Client side javascript file is loaded!')




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageTwo.textContent = "" 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const place = search.value
    const forcast = {
                        Latitude: 45,
                        Longitude: -75,
                        Location: 'Philadelphia',
                        Forecast: 'Suny Day'
                    }
    fetch('http://puzzle.mead.io/puzzle').then((response) => {
        response.json().then((data) => {
     //       console.log(data)
            if (data.error) {
             //   console.log(data.error)
                messageOne.textContent = data.error

            } else {
             //   console.log("My game is puzzle " + data.puzzle)
             //   console.log(forcast)
                  messageOne.textContent = "My game is puzzle " + data.puzzle
                  messageTwo.textContent = "Latitude: " + forcast.Latitude + " Longitude: " + forcast.Longitude + " Location: " + forcast.Location + " Forecast: " + forcast.Forecast
                
            }
        })
    })
    console.log(place)
})