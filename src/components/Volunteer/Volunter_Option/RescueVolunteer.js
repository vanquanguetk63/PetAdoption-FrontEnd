import React from "react";

export default function RescueVolunteer() {
    return (
        <div className="option-item ">
            <div className="item-image">
                <img
                    className="image rounded-circle"
                    src="https://hanoipetadoption.com/admin/user-content/Volunteer/262d40ba-c398-4f3f-85b3-cd9d18d0d373.jpeg"
                />
            </div>
            <div className="option-content">
                <h4 className="option-title">TNV Cứu Hộ</h4>
                <p className="option-description">
                    Khi một bé chó hay mèo gặp nạn, cần cứu các bé càng sớm càng
                    tốt để tránh trường hợp các bé lang thang gặp kẻ xấu hoặc bị
                    xe tông. Vì thế, Tình nguyện viên cứu hộ đóng vai trò quan
                    trọng trong việc các bé có sống sót và được giải cứu kịp
                    thời hay không. Công việc này đòi hỏi việc di chuyển bất
                    ngờ, thậm chí vào đêm khuya hay ngày nghỉ, có thể phải đi
                    xa. Ngoài ra, Tình nguyện viên cũng cần được trang bị kiến
                    thức để bảo đảm an toàn cho bản thân khi cứu hộ.
                </p>
                <div className="option-condition">
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">Tuổi 20+</span>
                    </div>
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Có kinh nghiệm với chó/mèo
                        </span>
                    </div>
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Có khả năng tiếp cận hiện trường trong các khung giờ
                            linh hoạt
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
