import request  from "supertest";
import db from "../Controllers/database/database.js";
import { app, server } from "../App.js";
import BrandModel from "../models/brands.js";

describe("Test de CRUD Brand",() =>{
    describe("GET /Brand", () =>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/Brand').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all Brand",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })


describe('POST /Brand',() =>{ 

        const newBrand = {
            name: "test"
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/Brand').send(newBrand)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message book created successfully', async () =>{
            const response = await request(app).post('/Brand').send(newBrand)
            expect(response.body.message).toContain("The Brand has been created successfully!")
        })


    })

    describe('PUT /Brand', () =>{
        let createdBook = {};
        beforeEach(async () => {
            createdBook = await BrandModel.create({ 
                name:"test"
            });
        });

        afterAll(async() =>{
            await BrandModel.destroy({where:{ id: createdBook.id}})
        })

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/Brand/${createdBook.id}`).send({title: "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The Brand has been updated successfully!")
        })
    })

    describe('DELETE /Brand', () =>{
        let createdBrand = {};
        beforeEach(async () => {
            createdBrand = await BrandModel.create({ 
               name:"test"
            });
        });

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).delete(`/Brand/${createdBrand.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The Brand has been deleted successfully!")
        })
    })

    afterAll(()=> {
        server.close();
        db.close()
    })
})