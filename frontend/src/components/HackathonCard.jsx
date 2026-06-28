import React from "react";
import "../styles/HackathonCard.css";

const HackathonCard = ({
  title = "Code the Future",
  description = "",
  image = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  status = "Upcoming",
  date = "",
  participants = "",
}) => {
  return (
    <div className="hackathon-card">
      <div className="card-image">
        <img src={image} alt={title} />

        <span
          className={`status ${status.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {status}
        </span>
      </div>

      <div className="card-body">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="card-footer">
          <div>📅 {date}</div>
          <div>👥 {participants}</div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;