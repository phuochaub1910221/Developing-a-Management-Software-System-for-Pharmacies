create Database data_nha_thuoc;

use data_nha_thuoc;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


-- mô tả thông tin sản phâm 

create table sanPham(
	id_SP int primary key,
    ten varchar(100),
    giaGoc int,
    giaBanle int,
    soLuongNhap int,
    soLuongBan int,
    ngayTao date,
    donVi varchar(10),
    thanhPhan text,
    ngaySanXuat date,
    hanSuDung date,
    giamGia int,
    phanLoai varchar(30),
    ngayCapNhat date,
    tenSP text,
    danhMuc varchar(150),
    dangBaoChe varchar(50),
    quyCach varchar(50),
    xuatSu varchar(50),
    nhaSanXuat varchar(50),
    congDung text,
    doiTuong text,
    tacDung text
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table moTaSP(
	id_MT int primary key,
    id_SP int ,
    tieuDe text,
    noiDung text,
	foreign key (id_SP) references sanPham(id_SP)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;


create table hinhAnh(
	id_HA int primary key,
    id_SP int,
    hinhanh varchar(255),
    foreign key (id_SP) references sanPham(id_SP)
) ENGINE=INNODB DEFAULT CHARSET=UTF8;


--  thông tin người dung

create table dangNhap(
	id_DN int primary key ,
    mail varchar(50),
    matKhau varchar(10),
    ngayTao timestamp
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table nguoiDung(
	id_ND int primary key,
    id_DN int,
    hoTen varchar(50),
    diChi varchar(200),
    SDT int,
    ngayTao date,
    hinhAnh varchar(55),
    quyen varchar(20),
    foreign key (id_DN) references dangNhap(id_DN)
) ENGINE=INNODB DEFAULT CHARSET=UTF8;

-- thông tin nôi dung đánh giá của khách hàng và phản hồi 

create table binhLuan(
	id_BL int primary key,
    id_ND int,
    id_SP int ,
    noiDung text,
    danhGia int,
    ngayTao timestamp,
    foreign key (id_ND) references nguoiDung(id_ND),
    foreign key (id_SP) references sanPham(id_SP)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table traLoiBL (
	id_TL int primary key,
    id_BL int ,
    noiDung text,
    ngayTao timestamp,
    foreign key (id_BL) references binhLuan(id_BL)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table hinhAnhBL (
	id_HA int primary key,
    id_BL int ,
    hinh varchar(50),
    foreign key (id_BL) references binhLuan(id_BL)
    
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

-- sản phẩm được người dùng yêu thích

create table yeuThich (
	id_YT int primary key,
    id_SP int ,
    id_Nd int,
    foreign key (id_SP) references sanPham(id_SP),
    foreign key (id_ND) references nguoiDung(id_ND)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

-- thông tin sản phẩm có trong giỏ hàng
 
create table gioHang(
	id_GH int,
	id_SP int ,
    id_ND int,
    soLuongSP int ,
	tien int,
    foreign key (id_SP) references sanPham(id_SP),
    foreign key (id_ND) references nguoiDung(id_ND)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

-- thông tin đơn hàng 

create table maSoDH (
	id_DH int primary key,
    ngayTao timestamp
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table donHang(
	id_SP int ,
    id_ND int,
    id_DH int,
    soLuongSP int ,
	trangthai varchar(100),
	thanhToan varchar(100),
    foreign key (id_SP) references sanPham(id_SP),
    foreign key (id_ND) references nguoiDung(id_ND),
    foreign key (id_DH) references maSoDH(id_DH)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

-- thông tin đơn thuốc  

create table maSoDT (
	id_DT int primary key,
    ngayTao timestamp
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table donThuoc (
	id_SP int ,
    id_ND int ,
    id_DT int ,
    soLuong int,
    suDung varchar(30),
    foreign key (id_SP) references sanPham(id_SP),
    foreign key (id_ND) references nguoiDung(id_ND),
    foreign key (id_DT) references maSoDT(id_DT)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;



create table lichSuMuaHang (
	id_LS int primary key,
    id_ND int ,
    id_SP int,
    ngayMua date,
    foreign key (id_SP) references sanPham(id_SP),
    foreign key (id_ND) references nguoiDung(id_ND)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table phanloai(
	id_PL int primary key,
    tenPhanLaoi varchar(150)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table danhmuc(
	id_DM int primary key ,
    id_PL int ,
    tenDanhMuc varchar(150),
    foreign key (id_PL) references phanloai(id_PL)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

create table hotro (
	id_HT int primary key ,
    id_DM int ,
    tenHoTro varchar(150),
    foreign key (id_DM) references danhmuc(id_DM) 

)ENGINE=INNODB DEFAULT CHARSET=UTF8;


 select *   from sanpham;

DROP DATABASE data_nhathuoc;

ALTER TABLE hinhanh
DROP column hinhanh;

ALTER TABLE hinhanh
ADD hinhanh varchar(255) ;


select * from sanPham;

delete from sanPham where id_SP = '1';
delete from hinhAnh where id_HA = '1';
delete from moTaSP where id_MT = '1';


INSERT INTO hotro (id_HT,id_DM,tenHoTro)
VALUES



INSERT INTO hotro (id_HT,id_DM,tenHoTro)
VALUES
(15,4,'Sinh lý nam'),
(16,4,'Sức Khỏe tinh dục'),
(17,4,'Cân bằng nôi tiết tố'),
(18,4,'sinh lý nữ'),
(19,4,'Hỗ trợ mang kinh'),
(20,5,'Dạ tràng , Tá tràng'),
(21,5,'Táo bón'),
(22,5,'Vi sinh - Probiotic'),
(23,5,'Đại tràng'),
(24,5,'Khó tiêu'),
(25,6,'Giảm Cholesterol'),
(26,6,'Huyết áp'),
(27,6,'Suy giãn tĩnh mạch'),
(28,7,'Chức năng gan'),
(29,7,'Tăng sức đề kháng, miễn dịch'),
(30,7,'Bổ mắt , bảo vẹ mắt'),
(31,7,'Hổ trợ trảo đổi chất '),
(32,7,'Giải rượu , cai rượu'),
(33,7,'Chống lão hóa'),
(34,8,'Bổ não - cải thiện trí nhớ'),
(35,8,'Hổ trợ giấc ngủ ngon'),
(36,8,'Tuần hoàn máu'),
(37,8,'Kiểm soát căng thẳng'),
(38,8,'Hoạt huyết'),
(39,9,'Sữa'),
(40,9,'Dinh dưỡng trẻ em'),
(41,10,'Sữa rửa mặt (kem , gel , sữa)'),
(42,10,'Chống nắng da mặt'),
(43,10,'Dương da mặt'),
(44,10,'Mặt nạ'),
(45,10,'Serum , Essence hoặc Ampoule'),
(46,10,'Toner (nước hoa hồng)/ Lotion'),
(47,10,'Tẩy tế bào chết'),
(48,10,'Xịt khoáng'),
(49,10,'Tẩy trang'),
(50,11,'Dầu gọi dầu xả'),
(51,11,'Dầu gọi trị nấm'),
(52,11,'Dưởng tóc ủ tóc'),
(53,11,'Đặc trị cho tóc'),
(54,12,'Sữa tắm , xà bông'),
(55,12,'Chống nắng toàn thân'),
(56,12,'Khử mùi'),
(57,12,'Dưởng thể'),
(58,12,'Trị nứt da'),
(59,12,'Dương tay, chân'),
(60,12,'Chắm sóc ngực'),
(61,12,'Masage'),
(62,13,'Trị sẹo , mờ vết thâm'),
(63,13,'Trị mụn'),
(64,13,'Da bị khô , thiếu ẩm'),
(65,13,'Nám, tàn nhang, đốm nâu'),
(66,13,'Viêm da cơ địa'),
(67,13,'Da bị kích ứng'),
(68,13,'Tái tạo , chống lảo hóa'),
(69,13,'Da sạm , xỉn màu'),
(70,14,'Son môi'),
(71,14,'Trang điểm mặt'),
(72,15,'Trị quầng thầm , bọng mắt'),
(73,15,'Xóa nếp nhăn vùng mắt'),
(74,15,'Dương da mắt'),
(75,16,'Tinh dầu'),
(75,16,'Dầu dừa'),
(76,17,'Bao cao su'),
(77,17,'Gel bôi trơn'),
(78,18,'Nước yến'),
(79,18,'Kẹo cứng '),
(80,18,'Nước uống không gas'),
(81,18,'Đường ăn kiêng'),
(82,18,'Trà thảo dược'),
(83,19,'Dung dịch vệ sinh phụ nữ'),
(84,19,'Vệ sinh tai'),
(85,19,'Băng vệ sinh'),
(86,19,'Nước rửa tay'),
(87,20,'Kem đánh răng'),
(88,20,'Bàn chải điện'),
(89,20,'Chỉ nha khoa'),
(90,20,'Chăm sóc răng'),
(91,20,'Nước súc miệng'),
(92,21,'Chống muỗi & côn trùng'),
(93,21,'Đồ dùng cho bé'),
(94,21,'Đồ dùng cho mẹ'),
(95,22,'Khăn giấy , khăn ướt'),
(96,23,'Tinh dầu masage'),
(97,23,'Tinh dầu trị cảm'),
(98,23,'Tinh dầu xông'),
(99,24,'Dụng cụ tẩy lông'),
(100,24,'dụng cụ cạo râu'),
(101,52,'Dụng cụ khác'),
(102,52,'Dụng cụ vệ sinh mũi'),
(103,52,'Kim các loại'),
(104,52,'Máy massage'),
(105,52,'Túi chườm'),
(106,53,'Máy đo huyết áp'),
(107,53,'Máy , que thử đường huyết'),
(108,53,'Thử thai'),
(109,53,'Nhiệt kế'),
(110,53,'Máy đo SqO2'),
(111,54,'Băng y tế'),
(112,54,'Bông y tế'),
(113,54,'Cồn và nước sát trùng'),
(114,54,'Chăm sóc vết thương'),
(115,54,'Xịt giảm đau'),
(116,54,'Khẩu trang y tế'),
(117,54,'Khẩu trang vải');