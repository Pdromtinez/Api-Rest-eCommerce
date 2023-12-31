import CategoriesModel from "../models/Categories.js";
import ShoesModel from "../models/Shoes.js";
export const GetAllCategories = async (req, res) => {
    try {
        let category;
        if (req.params.id) {
            category = await CategoriesModel.findByPk(req.params.id);
            if (!category) {
                return res.status(404).json({ message: 'No se encontró el usuario' });
            }
        } else {
            category = await CategoriesModel.findAll();
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Voy a hacer el Create de mi CRUD con el metdo POST

    export const CreateCategory = async (req, res) => {
        try{
            await CategoriesModel.create(req.body)
            res.json({message: "The category has been created successfully!"})
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }

    export const UpdateCategories = async (req, res) => {
        try{
            await CategoriesModel.update(req.body,{where: { id : req.params.id}})

            res.json({message: "The category has been updated successfully!"})
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }

    export const DeleteCategories = async (req, res) => {
        const {id} = req.params
        try{
            let CategoriesProduct
            let CategoriesDeleted
            if (req.params.id){
            CategoriesProduct = await ShoesModel.destroy({where:{category_id: id}})
            CategoriesDeleted = await CategoriesModel.destroy({where: { id : req.params.id}})
            res.json({message: "The category has been deleted successfully!"})
                if (!CategoriesDeleted){
                    return res.status(404).json({ message: 'No se encontró el usuario' });
                }
            }else{
                res.status(201).json({message:"no se ha encontrado el usuario"})
            }
        }catch(error){
            res.status(500).json({message: "The Operation has failed fantastically"})
        }
    }

    export const GetCategoriesProducts = async (req, res) => {

        const {id} = req.params
        try {
            const Shoes = await ShoesModel.findAll({
              where: { category_id: id },
            });
            res.json(Shoes);
          } catch (e) {
            return res.status(500).json({ message: e.message });
          }
    }
    