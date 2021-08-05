import React from "react";
import { Container } from "react-bootstrap";

export default function AboutInformation() {
    return (
        <section className="information">
            <Container>
                <h4 className="about-infor-title">VỀ CHÚNG TÔI</h4>
                <div className="about-space" />
                <p className="about-infor-descript">
                    Chúng tôi là một nhóm trẻ gồm tình nguyện viên Việt Nam và
                    một số bạn nước ngoài, cùng hoạt động vì tình yêu chó mèo.
                    Tôn chỉ hoạt động của chúng tôi là không từ bỏ nỗ lực với
                    bất kỳ con vật nào, dù bé có ốm yếu hay tàn tật tới đâu, bởi
                    mỗi thú cưng đều cần có cơ hội hi vọng vào một tương lai tốt
                    đẹp. Chúng tôi cố gắng chăm sóc tốt nhất có thể, phần nào bù
                    đắp lại những tổn thương cho các bé được cứu hộ về dù là
                    hoang, lạc, bị bỏ rơi hay bạo hành. Ngoài ra, chúng tôi cũng
                    luôn nỗ lực tìm mái ấm yêu thương các bé trọn đời . Và cuối
                    cùng, chúng tôi giúp nâng cao nhận thức về trách nhiệm của
                    chủ nuôi thông qua mạng xã hội và các hoạt động thiện
                    nguyện.
                </p>
                <p className="about-infor-descript">
                    Là một trong những trạm cứu hộ thú cưng ít ỏi tại Hà Nội,
                    hoạt động từ năm 2015 đến nay, Nhóm đã góp phần cứu giúp
                    trên 2,000 ca chó mèo bị bỏ rơi, hoang lạc, bị bạo hành,
                    đồng thời tìm mái ấm mới cho hàng trăm bé.
                </p>
            </Container>
        </section>
    );
}
