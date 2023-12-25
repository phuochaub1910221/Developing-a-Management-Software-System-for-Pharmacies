import db from '../config/database.js';

// lay tat ca thong tin nguoi dung

export const getUsers = (result) => {
    db.query("SELECT * FROM dangNhap dn inner join nguoiDung nd on nd.id_DN = dn.id_DN",
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

// lay thong tin dang nhap 
export const getLogins = (result) => {
    db.query("SELECT * FROM dangNhap",
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


//thong tin dang nhap

export const getLoginById = (id,result)=>{
    db.query("SELECT * FROM dangNhap where id_dn = ?",[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

// thong tin 1 nguoi dung 

export const getUserById = (id,result)=>{
    db.query("SELECT * FROM nguoiDung where id_ND = ?",[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

// tao tai khoan moi

export const insertLogin = (data,result)=>{
    db.query('insert into dangNhap set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    })
}

// tao thong tin nguoi dung

export const insertUser = (data,result)=>{
    db.query('insert into nguoiDung set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};


// cap nhat thong tin dang nhap
export const updateLoginById = (data,id,result)=>{
    db.query("update dangNhap set mail = ?,matKhau = ? where id_DN = ?",
    [data.mail,data.matkhau,id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else(
            result(null,results)
        )
    })
};

//cap nhat thong tin nguoi dung

export const updateUserById = (data,id,result)=>{
    db.query("UPDATE nguoiDung SET hoTen = ? ,diachi = ? ,SDT = ? , hinhAnh = ? , quyen = ?",
    [data.hoten, data.dichi, data.sdt , data.hinhanh, data.quyen,id],(err, results)=>{
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

export const deleteUserById = (id,result)=>{
    db.query('delete from dangNhap where id_DN = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
} 



// thong tin tai khoan nguoi dung

export const getTKs = (result) => {
    db.query("SELECT * FROM taiKhoan",
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


export const getTKById = (id,result)=>{
    db.query("SELECT * FROM taikhoan where id_TK = ?",[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

export const insertTK = (data,result)=>{
    db.query('insert into taikhoan set ?',[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    });
};

export const deleteTKById = (id,result)=>{
    db.query('delete from taikhoan where id_TK = ?',[id],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    })
}