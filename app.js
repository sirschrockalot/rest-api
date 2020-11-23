const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// Load config
dotenv.config({ path: './config/config.env' })



const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }


const PORT = process.env.PORT || 3000

// Routes
app.use('/', require('./routes/index'))

app.listen(process.env.PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))