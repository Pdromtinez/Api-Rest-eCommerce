import OrdersModel from "../models/Orders.js"
import SoldItemsModel from "../models/SoldItems.js";




export const GetAllOrders = async (req, res) => {
    try {
        let Orders;
        if (req.params.id) {
            Orders = await OrdersModel.findByPk(req.params.id);
            if (!Orders) {
                return res.status(404).json({ message: '404 Orders not found' });
            }
        } else {
            Orders = await OrdersModel.findAll({
                include: {
                    model: SoldItemsModel,
                    as: "order"
                }
            });
        }
        res.json(Orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const CreateOrder = async (req, res) => {
    try{
        await OrdersModel.create(req.body)
        res.json({message: "The category has been created successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}



export const UpdateOrders = async (req, res) => {
    try{
        await OrdersModel.update(req.body,{where: { id : req.params.id}})

        res.json({message: "The Orders has been updated successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const DeleteOrders = async (req, res) => {
    try{
        let OrdersDeleted
        if (req.params.id){
        OrdersDeleted = await OrdersModel.destroy({where: { id : req.params.id}})
        res.json({message: "The Orders has been deleted successfully!"})
            if (!OrdersDeleted){
                return res.status(404).json({ message: 'No se encontró el zapato' });
            }
    }else{
        res.status(201).json({message:"404 Orders not found"})
    }
    }catch(error){
        res.status(500).json({message: "Field 'title' doesn't have a default value"})
    }
}