import SoldItemsModel from "../models/SoldItems.js";



export const GetAllSoldItems = async (req, res) => {
    try {
        let Order;
        if (req.params.id) {
            SoldItems = await SoldItemsModel.findByPk(req.params.id);
            if (!Order) {
                return res.status(404).json({ message: '404 SoldItems not found' });
            }
        } else {
            Order = await SoldItemsModel.findAll();
        }
        res.json(Order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const UpdateSoldItems = async (req, res) => {
    try{
        await SoldItemsModel.update(req.body,{where: { id : req.params.id}})

        res.json({message: "The SoldItems has been updated successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const DeleteSoldItems = async (req, res) => {
    try{
        let OrderDeleted
        if (req.params.id){
        OrderDeleted = await SoldItemsModel.destroy({where: { id : req.params.id}})
        res.json({message: "The SoldItems has been deleted successfully!"})
            if (!OrderDeleted){
                return res.status(404).json({ message: 'No se encontró el zapato' });
            }
    }else{
        res.status(201).json({message:"404 SoldItems not found"})
    }
    }catch(error){
        res.status(500).json({message:"404 SoldItems not found"})
    }
}