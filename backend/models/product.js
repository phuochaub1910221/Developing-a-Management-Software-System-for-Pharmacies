import db from '../config/database.js'

// lay tat ca san pham 
export const getAllProducts = (result) => {
    db.query("SELECT * FROM sanpham sp inner join hinhAnh ha on ha.id_SP = sp.id_SP inner join motaSP mt on mt.id_SP = sp.id_SP", 
        (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// san pham
export const getProducts = (result) => {
    db.query("SELECT * FROM sanpham", 
        (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// lay hinh anh

export const getImgs = (result) => {
    db.query("SELECT * FROM hinhAnh", 
        (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// lay mo ta 

export const getMotas = (result) => {
    db.query("SELECT * FROM moTaSP", 
        (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

//lay thong tin san 1 san pham

export const getProduct = (id,result) =>{
    db.query("SELECT * FROM sanPham WHERE id_SP = ?",[id],(err,results) =>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    })
};

//lay thong tin san 1 san pham

export const getImgId = (id,result) =>{
    db.query("SELECT * FROM hinhanh WHERE id_HA = ?",[id],(err,results) =>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    })
};


//lay thong tin san 1 san pham

export const getMotaId = (id,result) =>{
    db.query("SELECT * FROM motaSP WHERE id_MT = ?",[id],(err,results) =>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0]);
        }
    })
};


//tao moi san pham

export const insertProduct = (data,result)=>{
    db.query("insert into sanPham set ? ",data,
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0])
        }
    }
    )
}


// tao hinh anh
export const insertImg = (data,result)=>{
    db.query("insert into hinhanh set ? ",data,
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0])
        }
    }
    )
}

export const insertMota = (data,result)=>{
    db.query("insert into moTaSP set ? ",data,
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results[0])
        }
    }
    )
}

// cap nhat thong tin san pham 

export const updateProduct = (data,id,result) =>{
    db.query("UPDATE sanPham SET ten = ?,giaGoc = ? ,giaBanle = ?,soLuongNhap = ?,soLuongBan = ?,ngayTao = ?,donVi = ?,thanhPhan = ?,ngaySanXuat = ?,hanSuDung = ?,giamGia = ?,phanLoai = ? ,ngayCapNhat = ? ,tenSP = ? , danhMuc = ? ,dangBaoChe = ?, quyCach = ? , xuatSu = ? , nhaSanXuat = ? , congDung = ? , doiTuong = ? , tacDung = ?,hinhanh = ?,moTaGan = ? where id_SP = ? ",
    [data.ten , data.giagoc ,data.giabanle ,data.soluongnhap, data.soluongban , data.ngaytao, data.donvi ,  data.thanhphan, data.ngaysanxuat , data.hansudung,data.giamgia, data.phanloai,data.ngaycapnhat,data.tensp,data.danhmuc,data.dangbaoche,data.quycach,data.xuatsu,data.nhasanxuat,data.congdung,data.doituong,data.tacdung,data.hinhanh,data.motagan,id],
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

//cap nhat hinh hinh anh

export const updateimg = (data,id,result)=>{
    db.query("update hinhAnh set hinhanh = ? where id_HA = ?",
    [data.hinhanh,id],
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,results);
        }
        else{
            result(null,results)
        }
    });
};

//cap nhat thong tin mo ta san pham

export const updatemota = (data,id,result)=>{
    db.query("update moTaSP set noiDung = ? where id_Mt = ?",
    [data.hinhanh,id],
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};

// xoa thong tin san pham

export const deleteProduct = (id,result)=>{
    db.query("delete from sanPham where id_SP = ?",[id],
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};

export const deleteImg = (id,result)=>{
    db.query("delete from hinhAnh where id_HA = ?",[id],
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};

export const deleteMota = (id,result)=>{
    db.query("delete from moTaSP where id_MT = ?",[id],
    (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results)
        }
    });
};