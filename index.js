const express = require('express')
const path = require('path')
const app = express()
const port = 5000

let currentHour = new Date().getHours()
let currentDay = new Date().getDay()
app.use((req, res, next) => {
  if (
    currentHour <= 8 ||
    currentHour > 16 ||
    currentDay === 0 ||
    currentDay === 6
  ) {
    return res.send(
      `<h1 style='text-align: center; margin: 50px'>Sorry we are out of the service at the moment, Come back later !!</h1>
      <h2 style='text-align: center; margin: 100px'>We are open from Monday to Friday, 09:00 --> 17:00</h2>`
    )
    // res.set('Content-Type', 'text/html')
    // res.send(new Buffer("<img src='" + "./public/Out_Of_Service.jpg" + "'>"))
  } else {
    next()
  }
})
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, (err) =>
  err
    ? console.log('OUPS!!! Somthing went wrong', err)
    : console.log(`Listening on http://localhost:${port}`)
)
