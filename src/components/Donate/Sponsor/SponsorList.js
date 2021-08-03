import React from "react";

export default function SponsorList({ List }) {
    return (
        <div className="sponsor-list">
            {List.map((item, index) => {
                return (
                    <div key={index} className="sponcer-item">
                        <div className="item-img">
                            <img src={item.imageUrl} alt="" />
                            <div className="item-description">{item.description}</div>
                        </div>
                        <h5 className="item-name">{item.Name}</h5>
                        <h5 className="item-name">{item.location}</h5>
                        <span className="space">
                            <hr className="space-item" />
                            <span className="icon-dog">
                                <i class="fas fa-paw"></i>
                            </span>
                            <hr className="space-item" />
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
