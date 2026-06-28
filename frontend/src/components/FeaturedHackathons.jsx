import React from "react";
import HackathonCard from "./HackathonCard";
import "../styles/featuredHackathons.css";

const hackathonsData = [
  {
    id: 1,
    title: "Code the Future 2025",
    description: "Build innovative solutions for real-world problems.",
    date: "May 10 - May 25, 2025",
    participants: "320+ Participants",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Innovate to Elevate",
    description: "Unleash your creativity and solve challenges that matter.",
    date: "Jun 01 - Jun 20, 2025",
    participants: "210+ Participants",
    status: "Upcoming",
  },
];

const FeaturedHackathons = () => {
  return (
    <section className="featured-section">
      <div className="hackathons-grid">
        {hackathonsData.map((hack) => (
          <HackathonCard
            key={hack.id}
            title={hack.title}
            description={hack.description}
            status={hack.status}
            date={hack.date}
            participants={hack.participants}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedHackathons;