import React from "react";

export default function AdoptCondition() {
    return (
        <div className="adopt-infor-condition">
            <div className="condition-title">Điều kiện nhận nuôi</div>
            <div className="condition-item">
                <i className="fas fa-paw"></i>
                <span className="item-text">Tài chính tự chủ và ổn định.</span>
            </div>
            <div className="condition-item">
                <i className="fas fa-paw"></i>
                <span className="item-text">
                    Chỗ ở cố định, ưu tiên tại Hà Nội.
                </span>
            </div>
            <div className="condition-item">
                <i className="fas fa-paw"></i>
                <span className="item-text">
                    Cam kết tiêm phòng và triệt sản.
                </span>
            </div>
        </div>
    );
}
