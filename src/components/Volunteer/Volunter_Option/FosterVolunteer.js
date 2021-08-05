import React from "react";

export default function FosterVolunteer() {
    return (
        <div className="option-item ">
            <div className="item-image">
                <img className="image rounded-circle" src="https://hanoipetadoption.com/admin/user-content/Volunteer/220885ad-73cd-4f2f-96e4-df481fb11400.jpg" />
            </div>
            <div className="option-content">
                <h4 className="option-title">TNV Foster</h4>
                <p className="option-description">
                    Foster là người giúp nhóm chăm sóc tạm thời trong thời gian
                    các bé chưa tìm được chủ. Đây có thể là các bé khỏe mạnh
                    hoặc cần chăm sóc đặc biệt hơn. Nếu bạn không thể nhận nuôi,
                    hãy mở cửa để cho các bé một mái ấm tạm thời, giúp các bé
                    khỏe mạnh hơn, ngoan ngoãn hơn cũng như tận hưởng tình
                    thương từ một người yêu động vật, đồng thời giúp chúng tôi
                    giảm tải khối lượng công việc.
                </p>
                <div className="option-condition">
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Người nhận nuôi tạm thời (Foster) chịu trách nhiệm
                            cung cấp nơi ở, thức ăn, nước uống, các vật dụng cần
                            thiết và tình thương cho bé.
                        </span>
                    </div>
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Trong trường hợp cần thiết, foster đảm nhận việc
                            theo dõi quá trình chữa trị cho bé, đảm bảo chế độ
                            ăn theo yêu cầu và giúp huấn luyện bé. Mọi chi phí y
                            tế sẽ do Hanoi Pet Adoption chi trả. Foster có thể
                            đóng góp vào chi phí này nhưng không bắt buộc.
                        </span>
                    </div>
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Foster cần thông báo ngay cho người phụ trách bé nếu
                            có bất cứ phát sinh gì xảy ra: ốm đau, biểu hiện lạ,
                            hành vi khác thường v.v...
                        </span>
                    </div>
                    <div className="condition-item">
                        <i className="fas fa-paw"></i>
                        <span className="item-text">
                            Không tự ý chuyển động vật mà tôi nhận chăm sóc tạm
                            thời sang người khác chăm sóc hoặc nhận nuôi nếu
                            không có sự đồng ý từ nhóm HPA.
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
