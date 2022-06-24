# E-Commerce Backend
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
### Description
This app is a ecommerce backend utilizing sequalize modeling and CRUD operations 

[Video Walkthrough](https://drive.google.com/file/d/1xfjL2B_jAmcoPIzYzZcEe7njtnDPPRCd/view)
### Installation
install dependancies

    npm install 

setup database in mysql shell

    source db/schema.sql

seed database

    npm run seed

start server

    npm run watch

### Contributions
[Issues and Pull requests can be made to this repo](https://github.com/SuedePritch/solid-meme)

### Technology
* NodeJS
* Express
* SQL
* Sequalize
* dotenv 

### API routes

* Get all products - GET - /api/products/
* Get one product - GET - /api/products/:id
* Update product - PUT - /api/products/:id
* Delete product - DELETE - /api/products/:id

* Get all catergories - GET - /api/catergories/
* Get one catergory - GET - /api/catergories/:id
* Update catergory - PUT - /api/catergories/:id
* Delete catergory - DELETE - /api/catergories/:id

* Get all tags - GET - /api/tags/
* Get one tags - GET - /api/tags/:id
* Update tag - PUT - /api/tags/:id
* Delete tag - DELETE - /api/tags/:id