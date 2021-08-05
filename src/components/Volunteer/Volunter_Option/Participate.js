import React from "react";

export default function Participate() {
    return (
        <div className="participate">
            <div className="content">
                <h4 className="content-title">Bạn muốn tham gia</h4>
                <p className="content-discription">
                    Tham gia tình nguyện cho Hanoi Pet Adoption, bạn đang góp
                    phần thay đổi số phận của những bé chó mèo bị bỏ rơi hay bạo
                    hành. Bên cạnh đó, bạn còn có cơ hội tìm hiểu thêm...
                </p>
                <div className="text-center">
                    <a
                        href="https://forms.gle/ZMydY5XNdG9UrL4R7"
                        target="_blank"
                        className="content-button"
                    >
                        Tham gia ngay
                    </a>
                </div>
            </div>
        </div>
    );
}
