import request  from "supertest";
import db from "../Controllers/database/database.js";
import { app, server } from "../App.js";
import ShoesModel from "../models/Shoes.js";

describe("Test de CRUD Shoes",() =>{
    describe("GET /Shoes", () =>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/Shoes').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all Shoes",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })


describe('POST /Shoes',() =>{ 

        const newShoe = {
            productName: "test",
            productDescription: "test",
            status: "test",
        }

        const wrongShoe = {
            wrong_field:'test'
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/Shoes').send(newShoe)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message book created successfully', async () =>{
            const response = await request(app).post('/Shoes').send(newShoe)
            expect(response.body.message).toContain("The book has been created successfully!")
        })

        test('should return a message insertion error If post wrong book ', async () =>{
            const response = await request(app).post('/Shoes').send(wrongShoe)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value")
        }) 

    })

    describe('PUT /Shoes', () =>{
        let createdBook = {};
        beforeEach(async () => {
            createdBook = await ShoesModel.create({ 
                title: "test",
                author: "test",
                book_description: "test",
            });
        });

        afterAll(async() =>{
            await ShoesModel.destroy({where:{ id: createdBook.id}})
        })

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/Shoes/${createdBook.id}`).send({title: "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The book has been updated successfully!")
        })
    })

    describe('DELETE /Shoes', () =>{
        let createdShoe = {};
        beforeEach(async () => {
            createdShoe = await ShoesModel.create({ 
                title: "test",
                author: "test",
                book_description: "test",
            });
        });

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).delete(`/Shoes/${createdShoe.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The book has been deleted successfully!")
        })
    })

    afterAll(()=> {
        server.close();
        db.close()
    })
})