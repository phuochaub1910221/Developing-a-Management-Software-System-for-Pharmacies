import {
    getComments,
    getCommentById,
    insertCom,
    insertComment,
    updateCommentById,
    deleteCommentById,
} from "../models/comment.js";

// lay tat ca binh luan 

export const showComments=(req,res)=>{
    getComments((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// lay mot binh luan 

export const showCommentById=(req,res)=>{
    getCommentById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// phan hoi binh luan

export const createCom=(req,res)=>{
    const data = req.body;
    insertCom(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// tao thong tin binh luan

export const createComment=(req,res)=>{
    const data = req.body;
    insertComment(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// cap nhat binh luan
export const updateComment=(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateCommentById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// xoa binh luan
export const deleteComment=(req,res)=>{
    const id = req.params.id;
    deleteCommentById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};