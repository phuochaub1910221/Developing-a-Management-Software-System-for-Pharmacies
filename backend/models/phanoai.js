import db from '../config/database.js';


// lay toan bo thong tin 

export const layPhanLoais = (result) => {
    db.query("SELECT * FROM phanloai ",
    (err,results)=>{
        if(err) {
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};

export const layDanhMucs = (result) => {
    db.query("SELECT * FROM danhmuc ",
    (err,results)=>{
        if(err) {
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};

export const layHoTros = (result) => {
    db.query("SELECT * FROM hotro ",
    (err,results)=>{
        if(err) {
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};



// tao thong tin moi


export const themPhanLoai = (data,result)=>{
    db.query('insert into phanloai set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

export const themDanhMuc = (data,result)=>{
    db.query('insert into danhmuc set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

export const themHoTro = (data,result)=>{
    db.query('insert into hotro set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};


// xoa thong tin 

export const xoaPhanLoai = (id,result)=>{
    db.query('delete from phanloai where id_PL = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 


export const xoaDanhMuc = (id,result)=>{
    db.query('delete from danhmuc where id_dDM = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 

export const xoaHoTro = (id,result)=>{
    db.query('delete from hotro where id_HT = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 