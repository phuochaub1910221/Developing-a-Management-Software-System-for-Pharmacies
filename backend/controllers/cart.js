import {
    getCarts,
    insertCart,
    updateCartById,
    deleteCartById,
} from "../models/cart.js";

// lay tat ca san pham trong  gio hang 

export const showCarts=(req,res)=>{
    getCarts((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// tao thong tin gio hang

export const createCart=(req,res)=>{
    const data = req.body;
    insertCart(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// cap nhat gio hang
export const updateCart=(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateCartById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// xoa gio hang
export const deleteCart=(req,res)=>{
    const id = req.params.id;
    deleteCartById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};