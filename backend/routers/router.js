import express from 'express';

// ------ san pham ------

import {
    showAllProducts,
    showProducts,
    showImgs,
    showMotas,
    showProductById,
    showImgById,
    showMotaById,
    createProduct,
    createImg,
    createMota,
    updateProductById,
    updateImg,
    updateMt,
    deleteProductById,
    deleteImgId,
    deleteMotaId,
} from "../controllers/product.js";

// ------ nguoi dung ------

import {
    showUsers,
    showLoginById,
    showUserById,
    createLogin,
    createUser,
    updateLogin,
    updateUser,
    deleteUser,
    showLogins,
    //tai khoan
    showTKs,
    showTKById,
    createTK,
    deleteTK

} from "../controllers/user.js";


// ------ binh luan ------
import {
    showComments,
    showCommentById,
    createCom,
    createComment,
    updateComment,
    deleteComment
} from "../controllers/comment.js";


// ------ gio hang ------
import {
    showCarts,
    createCart,
    updateCart,
    deleteCart
} from "../controllers/cart.js";

// ------ don hang ------
import {
    showOrders,
    createOrder,
    createMs,
    deleteOrder,
    showMas,
    createdonhang,
    CNDonhang,
} from "../controllers/order.js";

// ------ don thuoc ------
import {
    showPrescrips,
    showPrescripsById,
    createPrescrip,
    create,
    updatePrescrip,
    deletePrescrip
} from "../controllers/prescrip.js";


// ------ danh Muc ------
import {
    xemPhanLoais,
    xemDanhMucs,
    xemHoTros,
    taoPhanLoai,
    taoDanhMuc,
    taoHoTro,
    boPhanLoai,
    boDanhMuc,
    boHoTro
} from '../controllers/phanloai.js'


const router = express.Router();
// ----- dia chi san pham -----

// thong tin toan bo san pham
router.get("/api/AllProducts", showAllProducts);
// thong tin  san pham
router.get("/api/Products", showProducts);
// thong tin toan bo hinh anh
router.get("/api/Imgs", showImgs);
// thong tin toan bo mo ta
router.get("/api/Motas", showMotas); 
//duong dan toi mot san pham 
router.get("/api/Product/:id", showProductById);
//duong dan toi mot san pham 
router.get("/api/Img/:id", showImgById);
//duong dan toi mot san pham 
router.get("/api/Mota/:id", showMotaById);
//duong dan tao moi san pham 
router.post("/api/Product",createProduct);
//duong dan tao moi hinh anh
router.post("/api/Img",createImg);
//duong dan tao moi mo ta san pham
router.post("/api/Mota",createMota);
//duong dan cap nhat san pham
router.put("/api/Product/:id",updateProductById);
//duong dan cap nhat hinh anh san pham
router.put("/api/ProductImg/:id",updateImg);
//duong dan cap nhat hinh anh san pham
router.put("/api/ProductMt/:id",updateMt);
//duong dan xoa san pham
router.delete("/api/Product/:id",deleteProductById);
router.delete("/api/Img/:id",deleteImgId);
router.delete("/api/Mota/:id",deleteMotaId);


// ----- dia chi nguoi dung -----

//duong dan toan bo  thong tin nguoi dung 
router.get("/api/users", showUsers);
// duong dan thong tin nguoi dungn dung
router.get("/api/logins", showLogins);
//duong dan toi dang nhap
router.get("/api/login/:id", showLoginById);
//duong dan toi mot nguoi dung 
router.get("/api/user/:id", showUserById);
//duong dan tao tai khoan moi
router.post("/api/login",createLogin);
//duong dan tao moi nguoi dung 
router.post("/api/user",createUser);
//duong dan cap nhat dang nhap
router.put("/api/login/:id",updateLogin);
//duong dan cap nhat nguoi dung
router.put("/api/user/:id",updateUser);
//duong dan xoa nguoi dung
router.delete("/api/user/:id",deleteUser);

// tai khoan 
router.get("/api/tks", showTKs);

router.get("/api/tk/:id", showTKById);

router.post("/api/tk",createTK);

router.delete("/api/tk/:id",deleteTK);


// ----- dia chi binh luan -----

//duong dan toan bo  thong tin binh luan
router.get("/api/Comments", showComments);
//duong dan toi mot binh luan
router.get("/api/Comment/:id", showCommentById);
//duong dan tao tai khoan moi
router.post("/api/addCom",createCom);
//duong dan tao moi binh luan
router.post("/api/Comment",createComment);
//duong dan cap nhat binh luan
router.put("/api/Comment/:id",updateComment);
//duong dan xoa binh luan
router.delete("/api/Comment/:id",deleteComment);


// ----- dia chi gio hang -----

//duong dan toan bo  thong tin binh luan
router.get("/api/giohangs", showCarts);
//duong dan tao moi binh luan
router.post("/api/giohang",createCart);
//duong dan cap nhat binh luan
router.put("/api/giohang/:id",updateCart);
//duong dan xoa binh luan
router.delete("/api/giohang/:id",deleteCart);

// ----- dia chi gio hang -----

//duong dan toan bo  thong tin don hang
router.get("/api/donhangs", showOrders);
router.get("/api/mas", showMas);
//duong dan tao moi don hang
router.post("/api/maso",createOrder);
router.post("/api/donhang",createdonhang);

router.put("/api/Donhang/:id",CNDonhang);
//duong dan tao moi ma so don hang
router.post("/api/OrderMs",createMs);
//duong dan xoa don hang
router.delete("/api/Order/:id",deleteOrder);

// ----- dia chi gio thuoc -----

//duong dan toan bo  thong tin don thuoc
router.get("/api/Prescrips", showPrescrips);
// duong dan toi 1 don thuoc
router.get("/api/Prescrip/:id", showPrescripsById)
//duong dan tao moi don thuoc
router.post("/api/Prescrip",createPrescrip);
//duong dan tao moi ma so don thuoc
router.post("/api/PrescripMs",create);
//cap nhat thong tin don thuoc
router.put("/api/Prescrip/:id",updatePrescrip);
//duong dan xoa don thuoc
router.delete("/api/Prescrip/:id",deletePrescrip);

// ----- Danh Muc -----

//duong dan toan bo  thong tin don thuoc
router.get("/api/Phanloai", xemPhanLoais);
router.get("/api/Danhmuc", xemDanhMucs);
router.get("/api/HoTro", xemHoTros);
//duong dan tao moi don thuoc
router.post("/api/PhanLoai",taoPhanLoai);
router.post("/api/Danhmuc",taoDanhMuc);
router.post("/api/Hotro",taoHoTro);
//duong dan xoa don thuoc
router.delete("/api/Phanloai/:id",boPhanLoai);
router.delete("/api/DanhMuc/:id",boDanhMuc);
router.delete("/api/HoTro/:id",boHoTro);






export default router;