import request  from "supertest";
import db from "../Controllers/database/database.js";
import { app, server } from "../App.js";
import UsersModel from "../models/Users.js";

describe("Test de CRUD Users",() =>{
    describe("GET /Users", () =>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/Users').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all Users",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })


describe('POST /Users',() =>{ 

        const newShoe = {
            productName: "test",
            productDescription: "test",
            status: "test",
        }

        const wrongShoe = {
            wrong_field:'test'
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/Users').send(newShoe)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message book created successfully', async () =>{
            const response = await request(app).post('/Users').send(newShoe)
            expect(response.body.message).toContain("The book has been created successfully!")
        })

        test('should return a message insertion error If post wrong book ', async () =>{
            const response = await request(app).post('/Users').send(wrongShoe)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value")
        }) 

    })

    describe('PUT /Users', () =>{
        let createdBook = {};
        beforeEach(async () => {
            createdBook = await UsersModel.create({ 
                title: "test",
                author: "test",
                book_description: "test",
            });
        });

        afterAll(async() =>{
            await UsersModel.destroy({where:{ id: createdBook.id}})
        })

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/Users/${createdBook.id}`).send({title: "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The book has been updated successfully!")
        })
    })

    describe('DELETE /Users', () =>{
        let createdShoe = {};
        beforeEach(async () => {
            createdShoe = await UsersModel.create({ 
                title: "test",
                author: "test",
                book_description: "test",
            });
        });

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).delete(`/Users/${createdShoe.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The book has been deleted successfully!")
        })
    })

    afterAll(()=> {
        server.close();
        db.close()
    })
})