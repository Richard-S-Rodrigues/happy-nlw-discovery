// Dependencies
const express = require('express')
const path = require('path')

const pages = require('./pages.js')

const server = express()

// Use req body
server.use(express.urlencoded({ extended: true }))

// Using the static files
server.use(express.static('public'))

// Config template engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

// Get routes
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)