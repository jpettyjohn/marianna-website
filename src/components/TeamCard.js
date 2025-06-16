import React, { useState, useEffect } from "react";

const TeamCard = ({ member }) => {
    return (
        <div className="team-list">
            {member.map((item, index) => (
                <div className="team-card" key={index}>
                    <div className="team-card-image">
                        <img src={item.image} alt={member.title} />
                    </div>
                    <div className="team-card-text">
                        {" "}
                        <h2 className="team-name">{item.title}</h2>
                        {item.occupation && (
                            <p className="team-occupation">
                                {item.opccupation}
                            </p>
                        )}
                        <p className="team-content">{item.content}</p>
                        <div className="team-additional">
                            {item.email && (
                                <p className="team-link">{item.email}</p>
                            )}
                            {item.linkedin && (
                                <p className="team-link">{item.linkedin}</p>
                            )}
                            {item.website && (
                                <p className="team-link">{item.website}</p>
                            )}
                        </div>
                    </div>
                    <hr className="team-seperator"></hr>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;
