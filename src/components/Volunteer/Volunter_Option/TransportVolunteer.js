import React from "react";

export default function TransportVolunteer() {
    return (
        <div className="option-item ">
            <div className="option-content">
                <h4 className="option-title">TNV Vận Chuyển</h4>
                <p className="option-description">
                    Ngoài các tình huống cứu hộ, Hanoi Pet Adoption còn cần các
                    bạn giúp vận chuyển chó/mèo từ nhà chung tới bệnh viện, nhà
                    foster hoặc chủ nuôi v.v... Hoặc nhận đồ quyên góp cho Nhóm
                    và chuyển về nhà chung.
                </p>
                <div className="option-condition">
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">Tuổi 20+.</span>
                    </div>
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Có phương tiện di chuyển riêng và có tinh thần trách
                            nhiệm
                        </span>
                    </div>
                </div>
            </div>
            <div className="item-image">
                <img
                    className="image rounded-circle"
                    src="https://hanoipetadoption.com/admin/user-content/Volunteer/dd863f3e-1762-45a9-9730-922987085e97.jpeg"
                />
            </div>
        </div>
    );
}
