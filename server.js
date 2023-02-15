const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const { authUser, authRole } = require('./auth')

app.use(express.json())

// make setUser middleware execute before every single controller action,
// insted of doing...
// app.get('/', setUser, (req, res) => {
//     res.send('Home Page')
// })
app.use(setUser)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page')
})

app.get('/admin',authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page')
})

// require("./routes/projects")(app) ??
// const projectRouter = require('./routes/projects')
// app.use('/projects', projectRouter)

// middleware to find the user 
function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
      req.user = users.find(user => user.id === userId)
    }
    next()
}

app.listen(3000)