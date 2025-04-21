import React, { useState, useEffect } from "react";

const TeachingList = ({ teachings }) => {
    return (
        <div className="info-list">
            {teachings.map((item, index) => (
                <div className="info-card" key={index}>
                    <h2 className="info-title">{item.title}</h2>
                    <p className="info-content">{item.content}</p>
                    <a
                        className="info-link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default TeachingList;
