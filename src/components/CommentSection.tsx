import Comments from "./Comments"

import { useState, useEffect } from "react";

const comments = [
    {
        name: "Varun Sharma",
        comment: "Having worked with him, I can confidently say he delivers nothing short of perfection. Always striving to improve, his work speaks volumes for itself—no words needed.",
        title: "Software Engineer at Equaim",
        image: "/testimonials/varun.png"
    },
    {
        name: "Er. Nitish Kumar",
        comment: "Having taught dhruv, I was consistently impressed by his strong coding skills, clear communication, and positive attitude. He always showed a genuine curiosity to learn and the ability to grasp complex concepts quickly. I assigned him a project which he completed exceptionally well—better than expected, with added creativity and attention to detail. Dhruv is someone who not only performs but also uplifts the environment around him. I genuinely look forward to seeing him do great things in the future.",
        title: "Assistant Professor | Web Development | AI/ML Researcher",
        image: ""
    },
    {
        name: "Salil Batra",
        comment: "I am pleased to recommend dhruv Agarwal, an exceptionally resourceful and intellectually curious B.Tech student, whose outstanding problem-solving abilities and coding proficiency set him apart from his peers. dhruv consistently demonstrates a deep understanding of core programming concepts and applies them effectively to solve complex problems. His ability to break down challenges into manageable components and implement efficient, well-structured solutions reflects a mature and methodical approach to software development.",
        title: "Assistant Professor at Lovely Professional University | University Gold Medalist",
        image: ""
    },
    {
        name: "Vaibhav Prabhakar Raibole",
        comment: "I taught Dhruv Agarwal in DSA. He understood concepts well, had good logical thinking, and wrote clean, efficient code. I especially liked his curiosity—he often explored topics beyond the syllabus. Dhruv was consistent with his efforts and never hesitated to ask questions, which showed his genuine interest in learning. He also worked well with peers and was always ready to help others when needed. Dhruv has good potential, and I'm confident he'll do well in whatever he chooses to pursue.",
        title: "Assistant Professor | NIT Calicut Alumnus (M.Tech CSE-IS)",
        image: ""
    }
];

export const LazyImage = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
    const [loaded, setLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setLoaded(true);
        };
    }, [src]);

    return (
        <img
            src={loaded ? imageSrc : "placeholder.jpg"}
            alt={alt}
            className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
    );
};

export default function CommentSection() {
    return (
        <div className="max-w-screen-xl px-4 mx-auto flex flex-col mt-40 gap-48 items-center justify-center relative min-h-screen">
            {
                comments.map((comment, index) => (
                    <Comments
                        key={index}
                        index={index}
                        name={comment.name}
                        comment={comment.comment}
                        image={comment.image || ""}
                        title={comment.title}
                    />
                ))
            }
        </div>
    )
}