import { 
    layPhanLoais,
    layDanhMucs,
    layHoTros,
    themPhanLoai,
    themDanhMuc,
    themHoTro,
    xoaPhanLoai,
    xoaDanhMuc,
    xoaHoTro
} from '../models/phanoai.js'

//thong tin 

export const xemPhanLoais =(req,res)=>{
    layPhanLoais((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const xemDanhMucs =(req,res)=>{
    layDanhMucs((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const xemHoTros =(req,res)=>{
    layHoTros((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// tao moi

export const taoPhanLoai=(req,res)=>{
    const data = req.body;
    themPhanLoai(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const taoDanhMuc=(req,res)=>{
    const data = req.body;
    themDanhMuc(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const taoHoTro=(req,res)=>{
    const data = req.body;
    themHoTro(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// xoa thong tin 

export const boPhanLoai=(req,res)=>{
    const id = req.params.id;
    xoaPhanLoai(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const boDanhMuc=(req,res)=>{
    const id = req.params.id;
    xoaDanhMuc(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

export const boHoTro=(req,res)=>{
    const id = req.params.id;
    xoaHoTro(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

