import ShoesModel from "../models/Shoes.js";
import BrandModel from "../models/brands.js"




export const GetAllBrands = async (req, res) => {
    try {
        let Brand;
        if (req.params.id) {
            Brand = await BrandModel.findByPk(req.params.id);
            if (!Brand) {
                return res.status(404).json({ message: '404 Brand not found' });
            }
        } else {
            Brand = await BrandModel.findAll();
        }
        res.json(Brand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const GetBrandProduct = async (req, res) => {

    const {id} = req.params
    try {
        const Shoes = await ShoesModel.findAll({
          where: { brand_id: id },
        });
        res.json(Shoes);
      } catch (e) {
        return res.status(500).json({ message: e.message });
      }
}



export const CreateBrand = async (req, res) => {
    try{
        await BrandModel.create(req.body)
        res.json({message: "The Brand has been created successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const UpdateBrand = async (req, res) => {
    try{
        await BrandModel.update(req.body,{where: { id : req.params.id}})

        res.json({message: "The Brand has been updated successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const DeleteBrand = async (req, res) => {
    try{
        if (req.params.id){
        const BrandDeleted = await BrandModel.destroy({where: { id : req.params.id}})
        res.json({message: "The Brand has been deleted successfully!"})
            if (!BrandDeleted){
                return res.status(404).json({ message: 'No se encontró el zapato' });
            }
    }else{
        res.status(201).json({message:"404 Brand not found"})
    }
    }catch(error){
        res.status(500).json({message: "Field 'title' doesn't have a default value"})
    }
}


