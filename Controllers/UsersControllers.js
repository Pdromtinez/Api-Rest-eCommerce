import UsersModel from "../models/Users.js";
import ShoesModel from "../models/Shoes.js";
//aqui voy a escribir todas las funciones que van a se el CRUD de mi aplicacion

//Voy a hacer el Read de mi CRUD con el metodo GET


export const GetAllUsers = async (req, res) => {
    try {
        let User;
        if (req.params.id) {
            User = await UsersModel.findByPk(req.params.id);
            if (!User) {
                return res.status(404).json({ message: 'No se encontró el usuario' });
            }
        } else {
            User = await UsersModel.findAll();
        }
        res.json(User);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Voy a hacer el Create de mi CRUD con el metdo POST

    export const CreateUser = async (req, res) => {
        try{
            await UsersModel.create(req.body)
            res.json({message: "The User has been created successfully!"})
        }catch(error){
            res.status(500).json({message: "Field 'title' doesn't have a default value"})
        }
    }

    export const UpdateUsers = async (req, res) => {
        try{
            await UsersModel.update(req.body,{where: { id : req.params.id}})

            res.json({message: "The User has been updated successfully!"})
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }

    export const DeleteUsers = async (req, res) => {
        try{
            let UsersDeleted
            if (req.params.id){
            UsersDeleted = await UsersModel.destroy({where: { id : req.params.id}})
            res.json({message: "The User has been deleted successfully!"})
                if (!UsersDeleted){
                    return res.status(404).json({ message: 'No se encontró el usuario' });
                }
            }else{
                res.status(201).json({message:"no se ha encontrado el usuario"})
            }
        }catch(error){
            res.status(500).json({message: "Field 'title' doesn't have a default value"})
        }
    }

    export const UserscheckRole = (req, res, next) => {
        if (req.user && req.user.role === 'admin') {
          return next(); 
        } else {
          return res.status(403).json({ message: 'Acceso denegado. Debes ser un administrador.' });
        }
      };

      export const GetUserProduct = async (req, res) => {

        const {id} = req.params
        try {
            const Shoes = await ShoesModel.findAll({
              where: { user_id: id },
            });
            res.json(Shoes);
          } catch (e) {
            return res.status(500).json({ message: e.message });
          }
    }
    