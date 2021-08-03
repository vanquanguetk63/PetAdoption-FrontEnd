import React from "react";
import { Container } from "react-bootstrap";
import SponsorList from "./SponsorList";
import SponsorTitle from "./SponsorTitle";
const List = [
    {
        Name: "Me-O",
        description: "Me-O: Nhà cung cấp thức ăn dinh dưỡng chó mèo",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/Sponsor/74d2c776-c41d-4be9-aac5-2b54ff8a3817.png",
        location: "Việt Nam"
    },
    {
        Name: "SmartHeart",
        description: "SmartHeart Việt Nam: Nhà cung cấp thức ăn dinh dưỡng cho chó",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/Sponsor/20604b71-cead-4041-a6d7-ff66f9604056.jpg",
        location: "Việt Nam"
    },
    {
        Name: "Better World",
        description: "Shop đồ lưu niệm bán đồ gây quỹ cho các nhóm từ thiện và tổ chức chính phủ",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/Sponsor/7f7df734-8d0f-4ec5-bff8-a26555d4a7c0.jpg",
        location: "Ha Noi"
    },
    {
        Name: "IELTS THẦY JIM",
        description: "IELTS THẦY JIM",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/Sponsor/6bf5c6cd-3ab8-4783-8909-4fe711e2c185.jpg",
        location: "Việt Nam"
    }
]
export default function Sponsor() {
    return (
        <section className="sponsor">
            <Container>
                <SponsorTitle />
                <SponsorList List={List} />
            </Container>
        </section>
    );
}