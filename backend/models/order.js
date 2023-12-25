import db from '../config/database.js';

// tat ca san pham trong don 

export const getOrders = (result) => {
    db.query("SELECT * FROM donHang dt inner join masoDH ms  on ms.id_DH = dt.id_DH inner join nguoiDung nd on nd.id_ND = dt.id_ND inner join sanPham sp on sp.id_SP = dt.id_SP",
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

// ma so

export const insertMS = (data,result)=>{
    db.query('inser into masoDH set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
}


// don hang

export const insertOrder = (data,result)=>{
    db.query('insert into DonHang set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

// xoa thong tin don

export const deleteOrderById = (id,result)=>{
    db.query('delete from masoDH where id_DH = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 


// ma thong tin don hang

export const getmas = (result) => {
    db.query("SELECT * FROM masodh",
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

export const insertdonhang = (data,result)=>{
    db.query('inser into donhang set ?',data,(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
}

export const updatedonhang = (data,id,result) =>{
    db.query("UPDATE donhang SET trangthai = ? where id_SP = ? ",
    [data.trang,id],
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });  
};