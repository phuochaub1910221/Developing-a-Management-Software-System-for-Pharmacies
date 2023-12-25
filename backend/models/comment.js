import db from '../config/database.js';

// tat ca binh luan 

export const getComments = (result) => {
    db.query("SELECT * FROM binhLuan bl inner join hinhAnhBL ha nd on ha.id_BL = bl.id_BL",
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

// thong tin 1 noi dung binh luan

export const getCommentById = (id,result)=>{
    db.query("SELECT * FROM binhLuan where id_BL = ?",[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

// tra loi binh luan

export const insertCom = (data,result)=>{
    db.query('insert into traLoiBL set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    })
}

// binh luan

export const insertComment = (data,result)=>{
    db.query('insert into BinhLuan set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

//cap nhat thong tin nguoi dung

export const updateCommentById = (data,id,result)=>{
    db.query("UPDATE binhLuan SET danhGia = ?",
    [data.sao , id],(err, results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
};


// xoa thong tin nguoi dung

export const deleteCommentById = (id,result)=>{
    db.query('delete from binhLuan where id_BL = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 