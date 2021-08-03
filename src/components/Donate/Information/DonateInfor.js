import React from "react";

export default function DonateInfor() {
    return (
        <div className="donate-infor">
            <div className="donate-infor-content">
                <h4 className="donate-infor-title">Tôi Muốn Ủng Hộ</h4>
                <div className="space"/>
                <p className="donate-infor-descript">
                    Mọi hoạt động cứu hộ của Hanoi Pet Adoption hoàn toàn dựa
                    trên các khoản quyên góp từ cộng đồng. Chi phí trung bình
                    hàng tháng của nhóm rơi vào khoảng 70 triệu đồng, bao gồm
                    tiền thuê nhà, tiền viện phí, thức ăn, điện, nước, thuốc men
                    và đồ dùng, bỉm tã, lương hỗ trợ các bạn tnv dọn dẹp... Nhóm
                    rất cần sự giúp đỡ của các bạn để có thể duy trì nhà chung
                    cũng như đội cứu hộ. Chỉ cần cố định 50k - 100k hàng tháng
                    là các bạn đã giúp đỡ được cho nhóm và cách bé rất nhiều!
                </p>
                <p className="donate-infor-descript">
                    Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây
                    dựng nhà chung. Ngoài ra Nhóm cũng tiếp nhận quyên góp bằng
                    hiện vật như quần áo cũ (để lót chuồng), bỉm, găng tay y tế,
                    thức ăn, cát vệ sinh v.v...
                </p>
                <p className="donate-infor-descript">
                    *Lưu ý: nhóm không dùng zalo và KHÔNG BAO GIỜ yêu cầu Mạnh
                    Thường Quân cung cấp thông tin thẻ hoặc mã OTP
                </p>
                <p className="donate-infor-descript item">
                    *Danh sách Mạnh Thường Quân quyên góp cho nhóm sẽ được cập
                    nhật thường xuyên tại đây:
                    <div className="donate-infor-descript ">2021: http://bit.ly/3oOVp3N</div>
                    <div className="donate-infor-descript ">2020: http://bit.ly/2RLgOgs</div>
                    <div className="donate-infor-descript ">2019: http://bit.ly/31cYEXs</div>
                    <div className="donate-infor-descript ">2018: http://bit.ly/2K5hr1K</div>
                </p>
                <p className="donate-infor-descript item">
                    *Địa điểm đặt hòm quyên góp:
                    <div className="donate-infor-descript ">Better World Hanoi số 8 Xuân Diệu Hà Nội</div>
                    <div className="donate-infor-descript ">Phòng khám Animal Care: nhà 20 ngõ 424 Thuỵ Khuê</div>
                </p>
                <a href="/contact">
                    <button className="donate-infor-button">Ủng hộ ngay</button>
                </a>
            </div>
            <div className="donate-infor-img">
                <img src="https://hanoipetadoption.com/admin/user-content/256b940f-9028-443d-8fcf-f39f5f1618af.jpg" />
            </div>
        </div>
    );
}
