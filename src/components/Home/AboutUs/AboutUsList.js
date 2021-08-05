import React from "react";
import { Container } from "react-bootstrap";
import AboutListTitle from "./AboutListTitle";
const List = [
    {
        imageUrl:
            "https://scontent.fhan3-4.fna.fbcdn.net/v/t31.18172-8/26116026_879876612190310_2087503745655205680_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1J7NTCRgZLoAX-rM3MK&_nc_ht=scontent.fhan3-4.fna&oh=d95b6277999922f50db63553c87430e8&oe=613213F9",
        Name: "Nguyễn Đức Dũng",
        position: "TNV phỏng vấn tìm chủ",
        description: "",
    },
    {
        imageUrl:
            "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/51499525_748572515498314_5406901498204389376_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=FCWYksOZI-8AX-tT7Hc&_nc_ht=scontent.fhan3-1.fna&oh=56d372eeaba875972ff472895c1f3b8e&oe=6131E6B0",
        Name: "Trần Văn Quang",
        position: "Thư ký",
        description:
            "Là một người yêu chó, Quang đảm nhận vai trò chính trong việc phỏng vấn tìm chủ cho chó mèo, điều phối cứu hộ và thậm chí trực tiếp tham gia cứu hộ. Quang là người nói năng nhẹ nhàng và thân thiện, nhưng khi cần đấu tranh cho chó mèo, Quang rất kiên quyết.",
    },
    {
        imageUrl:
            "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/174438760_111693284523597_5829751894956919062_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qE-UfT6atOcAX_RmQ0T&_nc_ht=scontent.fhan3-3.fna&oh=d43678ad2959eea8261a2ab2b7277cdb&oe=6110D1E2",
        Name: "Nguyễn Khắc Duy",
        position: "Nhà sáng lập",
        description:
            "Trước khi sáng lập nên Hanoi Pet Adoption vào năm 2015, Duy đã từng tham gia hoạt động cứu hộ chó mèo ở Hà Nội nhiều năm. Nhìn vóc dáng nhỏ bé và trẻ trung của Duy, không ai nghĩ rằng anh có được sức mạnh và quyết tâm to lớn để mang lại cuộc sống tốt đẹp hơn cho chó mèo, cũng như năng lượng tích cực để kết nối những người cùng chung chí hướng. Duy luôn ấp ủ ước mơ xây dựng được nhà chung to đẹp nhất Việt Nam để có thể cưu mang nhiều bé chó mèo cơ nhỡ hơn.",
    },
    {
        imageUrl:
            "https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/70556962_3026046404287500_3895979999731122176_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4dQ2HxCOYqoAX_csb-y&_nc_ht=scontent.fhan3-4.fna&oh=a94898e1f9eaaa5492268d3734ef1797&oe=61301EAA",
        Name: "Nguyễn Hoàng Long",
        position: "Đồng sáng lập",
        description:
            "Cùng với Duy, Long đã chung tay sáng lập ra Hanoi Pet Adoption. Sau một thời gian du học tại Anh, hiện tại Long đã quay về và đảm nhận công việc thuộc các mảng Phỏng vấn tìm chủ, Phỏng vấn và đào tạo Tình nguyện viên, Cùng lên kế hoạch phát triển nhóm. Long có lối làm việc lịch sự mà vẫn cứng rắn, giúp Hanoi Pet Adoption luôn giữ được hướng đi đúng.",
    },
    {
        imageUrl:
            "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/177994222_1469777546691999_2230447057873160953_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qoY6RAL-qKgAX8dIKRl&_nc_ht=scontent.fhan4-1.fna&oh=0069e69272e7c44a1fb2f3b7edd458a6&oe=611130E9",
        Name: "Lương Thái Sơn",
        position: "Tư vấn truyền thông và sự kiện",
        description:
            "Gia nhập HPA từ năm 2018 với mục đích tình nguyện phiên dịch và giúp bán hàng tại các hội chợ gây quỹ, sau đó, Sơn tham gia nhiều hơn vào hoạt động phỏng vấn tìm chủ và foster. Với kinh nghiệm truyền thông và tổ chức sự kiện, Sơn cùng các đối tác của HPA tổ chức nhiều sự kiện quy mô vừa và lớn cho những người yêu thú cưng tại Hà Nội như Barkfest, Running Paws, Hachiko Festival, HPA Garage Sale. Hiện tại, Sơn đang cùng HPA hoàn thiện website và lên kế hoạch cho những dự án gây quỹ nhằm xây dựng nhà chung mới cho HPA.",
    },
];
export default function AboutUsList() {
    return (
        <section className="about-list">
            <Container>
                <AboutListTitle />
                <div className="item-listt">
                    {List.map((item, index) => {
                        return (
                            <div key={index} className="us-item">
                                <div className="item-image">
                                    <img src={item.imageUrl} alt="" />
                                </div>
                                <h5 className="item-name">{item.Name}</h5>
                                <div className="item-position">{item.position}</div>
                                <div className="item-space"/>
                                <p className="item-discription">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
