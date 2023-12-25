import {
    getPrescrips,
    getPrescripById,
    insertPrescrip,
    updatePrescripById,
    insertMS,
    deletePrescripById,
} from "../models/prescrip.js";

// lay tat ca san pham trong  don thuoc 

export const showPrescrips=(req,res)=>{
    getPrescrips((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// lay thong tin 1 don thuoc 

export const showPrescripsById = (req,res)=>{
    getPrescripById(req.params.id,(err,results)=>{
        if(err) res.send(err);
        else res.json(results);
    })
     
}


// tao thong tin don thuoc

export const createPrescrip=(req,res)=>{
    const data = req.body;
    insertPrescrip(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// cap nhat don thuoc
export const create=(req,res)=>{
    const data = req.body;
    insertMS(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// cap nhat thong tin don thuoc

export const updatePrescrip = (req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updatePrescripById(data,id,(err,results)=> {
        if(err) res.send(err);
        else res.json(results);
    })
}


// xoa don thuoc
export const deletePrescrip=(req,res)=>{
    const id = req.params.id;
    deletePrescripById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};