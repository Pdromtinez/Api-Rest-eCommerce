import request  from "supertest";
import db from "../Controllers/database/database.js";
import { app, server } from "../App.js";
import CategoriesModel from "../models/Categories.js";

describe("Test de CRUD Category",() =>{
    describe("GET /Category", () =>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/Category').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all Category",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })


describe('POST /Category',() =>{ 

        const newCategory = {
            categoryName: "test"
        }

       
        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/Category').send(newCategory)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message category created successfully', async () =>{
            const response = await request(app).post('/Category').send(newCategory)
            expect(response.body.message).toContain("The category has been created successfully!")
        })


    })

    describe('PUT /Category', () =>{
        let createdCategory = {};
        beforeEach(async () => {
            createdCategory = await CategoriesModel.create({ 
               categoryName: "test"
            });
        });

        afterAll(async() =>{
            await CategoriesModel.destroy({where:{ id: createdCategory.id}})
        })

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/Category/${createdCategory.id}`).send({title: "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The category has been updated successfully!")
        })
    })

    describe('DELETE /Category', () =>{
        let createdCategory = {};
        beforeEach(async () => {
            createdCategory = await CategoriesModel.create({ 
                categoryName: "test"
            });
        });

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).delete(`/Category/${createdCategory.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The category has been deleted successfully!")
        })
    })

    afterAll(()=> {
        server.close();
        db.close()
    })
})