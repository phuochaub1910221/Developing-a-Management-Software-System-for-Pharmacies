import {
    getOrders,
    insertOrder,
    insertMS,
    deleteOrderById,
    insertdonhang,
    getmas,
    updatedonhang,
} from "../models/order.js";

// lay tat ca san pham trong  don hang 

export const showOrders=(req,res)=>{
    getOrders((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const showMas=(req,res)=>{
    getmas((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// tao thong tin don hang

export const createOrder=(req,res)=>{
    const data = req.body;
    insertOrder(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const createdonhang=(req,res)=>{
    const data = req.body;
    insertdonhang(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// cap nhat don hang
export const createMs=(req,res)=>{
    const data = req.body;
    insertMS(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// xoa don hang
export const deleteOrder=(req,res)=>{
    const id = req.params.id;
    deleteOrderById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const CNDonhang = (req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updatedonhang(data,id,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}