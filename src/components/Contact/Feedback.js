import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import { message } from "antd";
export default function Feedback() {
    const param = {
        Name: "",
        email: "",
        title: "",
        content: "",
    }
    var check = 1;
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const checkparam = () => {
        
        if(name == "") {
            document.getElementById("contact-result").innerHTML = "Bạn cần nhập trường Họ và tên";
            document.getElementById("contact-result").style = "display: block";
            check = 0;
            return;
        }
        else if(email == "") {
            document.getElementById("contact-result").innerHTML = "Bạn cần nhập trường Email";
            document.getElementById("contact-result").style = "display: block";
            check = 0;
            return;
        }
        else if(title == "") {
            document.getElementById("contact-result").innerHTML = "Bạn cần nhập trường Tiêu đề";
            document.getElementById("contact-result").style = "display: block";
            check = 0;
            return;
        }
        else if(content == "") {
            document.getElementById("contact-result").innerHTML = "Bạn cần nhập trường Nội dung";
            document.getElementById("contact-result").style = "display: block";
            check = 0;
            return;
        }
        else {
            document.getElementById("contact-result").style = "display: none";
            message.success("Bạn đã gửi góp ý thành công");
        }
    }
    const handleClickButton = () => {
        checkparam();
        if (check) {
            // useEffect(() => {
            //     api.post(url, {
            //         name: name,
            //         email: email,
            //         title: title,
            //         content: content
            //     })
            // },[])
            setName("");
            setTitle("");
            setEmail("");
            setContent("");
        }
    }
    return (
        <div className="feedback">
            <h3 className="feedback-title">Gửi Góp Ý</h3>
            <div className="feedback-form">
                <form id="main" className="form" method="POST">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="group">
                                <div className="name-form">Họ và tên *</div>
                                <input type="text" id="hoten" name="name" className="form-input" value={name} onChange={(event) => {setName(event.target.value)}}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group">
                                <div className="name">Email *</div>
                                <input type="email" id="email" name="email" className="form-input" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="group">
                                <div className="name">Tiêu đề *</div>
                                <input type="text" id="tieude" name="subject" className="form-input" value={title} onChange={(event) => {setTitle(event.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="group">
                                <div className="name">Nội dung *</div>
                                <textarea name="message" id="noidung" className="form-input" rows="5" value={content} onChange={(event) => {setContent(event.target.value)}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <input type="button" id="chapnhan" value="Gửi tin nhắn" className="send-button" onClick={handleClickButton}/>
                    </div>
                </form>
                <div id="contact-result">
                    
                </div>
            </div>
        </div>
    )

}




