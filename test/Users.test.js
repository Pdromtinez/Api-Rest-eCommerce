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

        const newUser = {
            username: "test",
            role: "test"
        }

    

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/Users').send(newUser)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message User created successfully', async () =>{
            const response = await request(app).post('/Users').send(newUser)
            expect(response.body.message).toContain("The User has been created successfully!")
        })


    })

    describe('PUT /Users', () =>{
        let createdUser = {};
        beforeEach(async () => {
            createdUser = await UsersModel.create({ 
                username: "test",
                role: "test"
            });
        });

        afterAll(async() =>{
            await UsersModel.destroy({where:{ id: createdUser.id}})
        })

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/Users/${createdUser.id}`).send({title: "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The User has been updated successfully!")
        })
    })

    describe('DELETE /Users', () =>{
        let createdUser = {};
        beforeEach(async () => {
            createdUser = await UsersModel.create({ 
                username: "test",
                role: "test"
            });
        });

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).delete(`/Users/${createdUser.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The User has been deleted successfully!")
        })
    })

    afterAll(()=> {
        server.close();
        db.close()
    })
})