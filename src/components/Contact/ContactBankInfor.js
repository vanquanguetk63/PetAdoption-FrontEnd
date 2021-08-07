import React from "react";

export default function ContactBankInfor() {
    return (
        <div className="bank-infor">
            <div className="title">
                Thông tin liên hệ
                <p className="description">
                    Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây
                    dựng nhà chung.
                </p>
            </div>
            <div className="bank-list">
                <div className="bank-item">
                    <b className="bank-name"><i class="fas fa-university"></i>Vietcombank</b>
                    <div className="bank-acount">Nguyyễn Khắc Duy</div>
                    <div className="bank-acount">0451000496181</div>
                    <div className="bank-acount">Sở giao dịch Vietcombank</div>
                </div>
                <div className="bank-item">
                    <b className="bank-name"><i class="fas fa-university"></i>BIDV</b>
                    <div className="bank-acount">Nguyyễn Khắc Duy</div>
                    <div className="bank-acount">21510002579699</div>
                    <div className="bank-acount">Chi nhánh Cầu Giấy</div>
                </div>
                <div className="bank-item">
                    <b className="bank-name"><i class="fas fa-university"></i>Techcombank</b>
                    <div className="bank-acount">Nguyyễn Khắc Duy</div>
                    <div className="bank-acount">0451000496181</div>
                    <div className="bank-acount">Chi nhánh Duy Tân</div>
                </div>
                <div className="bank-item">
                    <b className="bank-name"><i class="fab fa-paypal"></i>Paypal</b>
                    <div className="bank-acount">duy02102000@gmail.com</div>
                </div>
            </div>
        </div>
    );
}
