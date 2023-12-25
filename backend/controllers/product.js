
import {
    getAllProducts,
    getProducts,
    getImgs,
    getMotas,
    getProduct,
    getImgId,
    getMotaId,
    insertProduct,
    insertImg,
    insertMota,
    updateProduct,
    updateimg,
    updatemota,
    deleteProduct,
    deleteImg,
    deleteMota
} from "../models/product.js";

export const showAllProducts=(req,res)=>{
    getAllProducts((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.send(results);
        }
    });
};

// lay tat ca san pham 

export const showProducts=(req,res)=>{
    getProducts((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.send(results);
        }
    });
};
// lay tat ca hinh anh

export const showImgs=(req,res)=>{
    getImgs((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.send(results);
        }
    });
};
// lay tat ca mo ta san pham

export const showMotas=(req,res)=>{
    getMotas((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.send(results);
        }
    });
};

// lay thong tin 1 san pham

export const showProductById = (req,res)=>{
    getProduct(req.params.id,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results)
        }
    });
};

// lay thong tin 1 san pham

export const showImgById = (req,res)=>{
    getImgId(req.params.id,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results)
        }
    });
};

// lay thong tin 1 san pham

export const showMotaById = (req,res)=>{
    getMotaId(req.params.id,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results)
        }
    });
};

// them moi san pham 

export const createImg = (req,res)=>{
    const data = req.body;
    insertImg(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
};

// them moi san pham 

export const createMota = (req,res)=>{
    const data = req.body;
    insertMota(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
};

// them moi san pham 

export const createProduct = (req,res)=>{
    const data = req.body;
    insertProduct(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
};

//cap nhat thong tin san pham 

export const updateProductById = (req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateProduct(data,id,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}

// cap nhat hinh anh

export const updateImg = (req, res)=>{
    const data = req.body;
    const id = req.params.id;
    updateimg(data,id,(err, results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}


// cap nhat thong tin mo ta san pham

export const updateMt = (req, res)=>{
    const data = req.body;
    const id = req.params.id;
    updatemota(data,id,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}

// xoa thong tin san pham

export const deleteProductById = (req, res)=>{
    const data = req.params.id;
    deleteProduct(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
    
}

export const deleteImgId = (req, res)=>{
    const data = req.params.id;
    deleteImg(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
    
}

export const deleteMotaId = (req, res)=>{
    const data = req.params.id;
    deleteMota(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
    
}