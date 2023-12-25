import db from '../config/database.js';

// tat ca san pham trong don thuoc

export const getPrescrips = (result) => {
    db.query("SELECT * FROM donThuoc dt inner join masoDT ms  on ms.id_DT = dt.id_DT inner join nguoiDung nd on nd.id_ND = dt.id_ND inner join sanPham sp on sp.id_SP = dt.id_SP",
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

// lay thong tin 1 don thuoc

export const getPrescripById = (id,result)=>{
    db.query('select * from masoDT where id_DT = ? ',[id],(err,results)=>{
        if(err) {
            console.log(err);
            result(err,null);
        }
        else {
            result(null,results)
        }
    })
}

// ma so

export const insertMS = (data,result)=>{
    db.query('inser into masoDT set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
}


// don thuoc

export const insertPrescrip = (data,result)=>{
    db.query('insert into donThuoc set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};
//cap nhat thong tin don thuoc

export const updatePrescripById = (data,id,result)=>{
    db.query('update donThuoc set id_ND = ? , id_SP = ? , soLuong = ? , suDung = ?',
    [data.id_nd,data.id_sp,data.soluong,data.sudung],(err,result)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,result);
        }
    });
}

// xoa thong tin don thuoc

export const deletePrescripById = (id,result)=>{
    db.query('delete from masoDt where id_Dt = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 