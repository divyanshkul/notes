# Notes

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2c145dae30a147af9160bbe01ffb907d)](https://www.codacy.com/app/jboss-outreach/notes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jboss-outreach/notes&amp;utm_campaign=Badge_Grade)
[![Gitter chat](https://badges.gitter.im/gitterHQ/services.png)](https://gitter.im/jboss-outreach)
A node application to manage notes

## Setting up the project

1. Install [Node.js](https://nodejs.org/en)
2. Install [MongoDB](https://www.mongodb.com)
3. Clone this repository:
```bash
$ git clone https://github.com/jboss-outreach/notes
```

## Running the project locally

1. Install dependencies:
```bash
$ npm install
```

2. Start the MongoDB server *as root*:

#### For Linux,
```bash
$ sudo mongod
```

#### For Windows,
```bash
$ "C:\Program Files\MongoDB\Server\[MongoDB version]\bin\mongod.exe"
```
where [MongoDB version] is the version of the MongoDB installation you have.

3. Run the app
```bash
$ node server.js
```
