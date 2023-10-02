## Title and description
This is the backend of an e-commerce.

## Deployment

To deploy this project install:

```bash
npm init -y --> "type":"module"
npm install express sequelize mysql2
npm install -D nodemon
npm install --save-d jest
npm install --save-d supertest
```
And modify package.json > "scripts" >
```bash
"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll --no-cache --detectOpenHandles"
"dev": "nodemon app.js"
```

For testing:

```bash
npm run test
```

To make request you can use Postman or ThunderClient, for example.


## Stack

[![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]()
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)]()
[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)]()
[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)]()