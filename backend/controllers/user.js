import {
    getUsers,
    getLoginById,
    getUserById,
    insertLogin,
    insertUser,
    updateLoginById,
    updateUserById,
    deleteUserById,
    getLogins,
    getTKs,
    getTKById,
    deleteTKById,
    insertTK
} from "../models/user.js";

// lay tat ca nguoi dung 

export const showUsers=(req,res)=>{
    getUsers((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// lay thong tin nguoi dung

export const showLogins=(req,res)=>{
    getLogins((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// lay mot nguoi dung 

export const showLoginById=(req,res)=>{
    getLoginById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
// lay mot nguoi dung 

export const showUserById=(req,res)=>{
    getUserById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// tao tai khoan moi

export const createLogin=(req,res)=>{
    const data = req.body;
    insertLogin(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// tao thong tin nguoi dung

export const createUser=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
// cap nhat dang nhap
export const updateLogin=(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateLoginById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// cap nhat nguoi dung
export const updateUser=(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateUserById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// xoa nguoi dung
export const deleteUser=(req,res)=>{
    const id = req.params.id;
    deleteUserById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// thong tin tai khoan

export const showTKs=(req,res)=>{
    getTKs((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const showTKById=(req,res)=>{
    getTKById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const createTK=(req,res)=>{
    const data = req.body;
    insertTK(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const deleteTK=(req,res)=>{
    const id = req.params.id;
    deleteTKById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};