const express = require('express')
const app = express()
const { users } = require('./data')

app.use(express.json())

// make setUser middleware execute before every single controller action
// app.use(setUser)

app.get('/', setUser, (req, res) => {
    res.send('Home Page')
})

app.get('/admin', setUser, (req, res) => {
    res.send('Admin Page')
})

app.get('/user',setUser, (req, res) => {
    res.send('User Page')
})

// require("./routes/projects")(app);
const projectRouter = require('./routes/projects')
app.use('/projects', projectRouter)

// middleware to find the user 
function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
      req.user = users.find(user => user.id === userId)
    }
    next()
}

app.listen(3000)