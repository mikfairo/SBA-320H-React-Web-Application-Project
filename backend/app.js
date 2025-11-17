import express from 'express'
import CORS from 'cors'

const app = express()
app.use(CORS())

app.get('/get_random_seed', async (req, res) => {
    
    const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1')
    const data = await response.json()
    res.send({'seed': data})
})

app.listen(3000, () => {
    console.log("LIstening on 3000")
})