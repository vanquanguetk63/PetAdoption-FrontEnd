import React from "react";
import OwlStageList from "./OwlStageList";
const List = [
    {
        path:"/donate",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/03fc601a-a150-4d55-b051-15d6d3ced88e.jpg",
        title: "Ủng hộ",
        description:"Giúp duy trì hoạt động của HPA qua hình thức quyên góp tiền hoặc nhu yếu phẩm."
    },
    {
        path:"/volunteer",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/28516d17-6278-4bd4-8eb7-0f3400d07969.jpg",
        title: "Tình nguyện",
        description:"Hành động để thay đổi cuộc sống của chó, mèo và thú cưng khác."
    },
    {
        path:"/adopt",
        imageUrl:"https://hanoipetadoption.com/admin/user-content/423cf220-b557-4644-a769-dd508226180d.jpg",
        title: "Nhận nuôi",
        description:"Hãy nhận nuôi, cưu mang, đừng xua đuổi và yêu thương loài động vật bị bỏ rơi."
    }
]
export default function OwlStage() {
    return (
        <div className="owl-stage">
            <OwlStageList List={List}/>
        </div>
    )
}