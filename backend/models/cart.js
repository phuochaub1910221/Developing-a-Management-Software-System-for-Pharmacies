import db from '../config/database.js';

// tat ca san pham trong gio hang 

export const getCarts = (result) => {
    db.query("SELECT * FROM gioHang ",
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

// gio hang

export const insertCart = (data,result)=>{
    db.query('insert into gioHang set ?',data,(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

//cap nhat thong tin gio hang

export const updateCartById = (data,id,result)=>{
    db.query("UPDATE gioHang SET soLuongSP = ?",
    [data.soluong , id],(err, results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
};


// xoa thong tin gio hang

export const deleteCartById = (id,result)=>{
    db.query('delete from gioHang where id_SP = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 