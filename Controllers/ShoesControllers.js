import CategoriesModel from "../models/Categories.js";
import ShoesModel from "../models/Shoes.js"
import UsersModel from "../models/Users.js";

import BrandModel from "../models/brands.js";



//aqui voy a escribir todas las funciones que van a se el CRUD de mi aplicacion

//Voy a hacer el Read de mi CRUD con el metodo GET


export const GetAllShoes = async (req, res) => {
    try {
        let Shoes;
        if (req.params.id) {
            Shoes = await ShoesModel.findByPk(req.params.id);
            if (!Shoes) {
                return res.status(404).json({ message: 'No se encontró el zapato' });
            }
        } else {
            Shoes = await ShoesModel.findAll({
                include:[ {
                    model :  BrandModel,
                    as:"Brand"
                },
                {
                    model :  CategoriesModel,
                    as:"Category"
                },
                {
                    model : UsersModel,
                    as:'Users',
                }
            ]
            });
        }
        res.json(Shoes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Voy a hacer el Create de mi CRUD con el metdo POST

    export const CreateShoe = async (req, res) => {
        try{
            await ShoesModel.create(req.body)
            res.json({message: "The Shoe has been created successfully!"})
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }

    export const UpdateShoes = async (req, res) => {
        try{
            await ShoesModel.update(req.body,{where: { id : req.params.id}})

            res.json({message: "The book has been updated successfully!"})
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }

    export const DeleteShoes = async (req, res) => {
        try{
            let ShoesDeleted
            if (re.params.id){
            ShoesDeleted = await ShoesModel.destroy({where: { id : req.params.id}})
            res.json({message: "The Shoe has been deleted successfully!"})
                if (!ShoesDeleted){
                    return res.status(404).json({ message: 'No se encontró el zapato' });
                }
        }else{
            res.status(201).json({message:"no se ha encontrado el zapato"})
        }
        }catch(error){
            res.status(500).json({message: "Field 'title' doesn't have a default value"})
        }
    }