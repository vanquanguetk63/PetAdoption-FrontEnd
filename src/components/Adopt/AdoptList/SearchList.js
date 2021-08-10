import axios from "axios";
import React, { useEffect, useState } from "react";
export var ListAnimal = []
export default function SearchList() {
    const [list,setList] = useState([])
    const [sex,setSex] = useState("")
    const [ageInMonths,setAgeInMonths] = useState("")
    const [color,setcolor] = useState("")
    const [isNeutered,setIsNeutered] = useState("")
    const [name,setName] = useState("Sasin")
    const param = {
        sex: "",
        // ageInMonths: ageInMonths,
        // color: color,
        // isNeutered: isNeutered,
        // name: name
        

    }
    useEffect(() => {
        axios.post('https://pure-earth-99144.herokuapp.com/api/pet/find',param)
        .then(function (response) {
            console.log(response.data);
            setList(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })  
    },[])
    ListAnimal = list;
    console.log(ListAnimal);
    
    return (
        <div className="search-list">
            <div className="search-title">
                Tìm Thú cưng
                <i className="fas fa-paw"></i>
            </div>
            <div className="search-form row">
                <div className="col-md-4">
                    <div className="group">
                        <div className="name-form">Giới tính</div>
                        <select id="gender" className="form-input">
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="group">
                        <div className="name-form">Giới tính</div>
                        <input type="text" id="hoten" name="name" className="form-input"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="group">
                        <div className="name-form">Giới tính</div>
                        <input type="text" id="hoten" name="name" className="form-input"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="group">
                        <div className="name-form">Giới tính</div>
                        <input type="text" id="hoten" name="name" className="form-input"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="group">
                        <div className="name-form">Giới tính</div>
                        <input type="text" id="hoten" name="name" className="form-input"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="group">
                    <input type="button" value="Tìm Kiếm" className="send-button"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
