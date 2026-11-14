import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "./assets/NewPro.jpeg";

const profile = {
    name: "Sharara Naderi",
    roles: ["Frontend Developer", "React Developer", "Software Engineer"],
    intro:
        "I build clean, fast and responsive websites using React, JavaScript and CSS. Passionate about turning ideas into user-friendly web experiences.",
      photo: profilePic,
    social: [
        { icon: "fa-linkedin", url: "https://linkedin.com/" },
        { icon: "fa-github", url: "https://github.com/" },
        { icon: "fa-instagram", url: "https://instagram.com/" },
       
    ],
    stats: [
        { num: 2, label: "Years of learning" },
        { num: 7, label: "Projects completed" },
        { num: 70, label: "Technologies Learning" },
        { num: 100, label: "Hours of practice" },
    ],
};


function useTyping(words, speed = 110, pause = 1400) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];
        let delay = deleting ? speed / 2 : speed;

        if (!deleting && text === word) delay = pause;

        const timer = setTimeout(() => {
            if (!deleting && text === word) {
                setDeleting(true);
            } else if (deleting && text === "") {
                setDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            } else {
                setText(
                    deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
                );
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, deleting, wordIndex, words, speed, pause]);

    return text;
}


export function Home() {
    const typed = useTyping(profile.roles);

    return (
        <div className="page">
            <section className="hero">
                <div className="hero__image-wrap">
                    <div className="hero__blob"></div>
                       <img className="hero__img" src={profilePic} alt={profile.name} />
                </div>

                <div className="hero__content">
                    <p className="hero__hello">Hello, I'm</p>
                    <h1 className="hero__name">{profile.name}</h1>
                    <h2 className="hero__role">
                        And I'm a <span className="typing">{typed}</span>
                    </h2>
                    <p className="hero__text">{profile.intro}</p>

                    <div className="hero__social">
                        {profile.social.map((s) => (
                            <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" aria-label={s.icon}>
                                <i className={`fab ${s.icon}`}></i>
                            </a>
                        ))}
                    </div>

                    <div className="hero__buttons">
                        <Link to="/contact" className="btn btn--blue">Hire Me</Link>
                        <Link to="/contact" className="btn btn--outline">Contact Me</Link>
                    </div>
                </div>
            </section>

            <section className="stats">
                {profile.stats.map((s) => (
                    <div className="stats__item" key={s.label}>
                        <span className="stats__num">{s.num}+</span>
                        <span className="stats__label">{s.label}</span>
                    </div>
                ))}
            </section>
        </div>
    );
}


export function About() {
    return (
        <div className="page">
            <section className="page-section">
                <h1>About <span>Me</span></h1>
                <p>
                    I am a passionate Software Engineer who believes that technology is more than just writing code—it is about solving problems, creating meaningful solutions, and making people's lives easier. 
                    I enjoy transforming ideas into functional, creative, and user-friendly applications. With a strong interest in software development and continuous learning, I am always exploring new technologies, improving my skills, and challenging myself to grow. 
                    My goal is to build innovative, reliable, and impactful digital experiences that make a difference.
                </p>
            </section>
        </div>
    );
}

const skills = [
    { icon: "fa-html5", title: "HTML5", text: "Semantic, accessible markup." },
    { icon: "fa-css3-alt", title: "CSS3", text: "Responsive layouts, Flexbox and Grid." },
    { icon: "fa-js", title: "JavaScript", text: " DOM and async code." },
    { icon: "fa-react", title: "React", text: "Components, hooks and routing." },
    { icon: "fa-python", title: "Python", text: "Functional and object-oriented programming." },
    { icon: "fa-java", title: "Java", text: "Object-oriented programming." },
];

export function Skills() {
    return (
        <div className="page">
            <section className="page-section">
                <h1>My <span>Skills</span></h1>
                <p>Technologies I work with.</p>
                <div className="card-grid">
                    {skills.map((s) => (
                        <div className="card" key={s.title}>
                            <i className={`fab ${s.icon}`}></i>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

const services = [
    { icon: "fa-laptop-code", title: "Web Development", text: "Modern websites built with React." },
    { icon: "fa-mobile-screen", title: "Responsive Design", text: "Looks great on every screen size." },
    { icon: "fa-pen-ruler", title: "UI Design", text: "Clean and user-friendly interfaces." },
];

export function Services() {
    return (
        <div className="page">
            <section className="page-section">
                <h1>My <span>Services</span></h1>
                <p>What I can build for you.</p>
                <div className="card-grid">
                    {services.map((s) => (
                        <div className="card" key={s.title}>
                            <i className={`fas ${s.icon}`}></i>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

const projects = [
    { title: "Project One", text: "Pharmarcy Management System using Java,fxml and MySQL." },
    { title: "Project Two", text: "Course Registration System using HTML and CSS." },
    { title: "Project Three", text: "Website of Dry Fruits Named Sheern Dry fruits using  JavaScript, HTML and CSS." },
];

export function Portfolio() {
    return (
        <div className="page">
            <section className="page-section">
                <h1>My <span>Portfolio</span></h1>
                <p>I really enjoy working on projects that challenge me and allow me to grow as a developer.</p>
                <div className="card-grid">
                    {projects.map((p) => (
                        <div className="card" key={p.title}>
                            <i className="fas fa-folder-open"></i>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="page">
            <section className="page-section">
                <h1>Contact <span>Me</span></h1>
                <p>Have a project or an opportunity? Send me a message.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
                    <textarea name="message" rows="5" placeholder="Your message" value={form.message} onChange={handleChange} required />
                    <button type="submit" className="btn btn--blue">Send Message</button>
                    {sent && <p className="form-success">Thanks! Your message was sent.</p>}
                </form>
            </section>
        </div>
    );
}

export function Login({ onLogin }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
        navigate("/");
    };

    return (
        <div className="page">
            <section className="page-section">
                <h1>{isSignUp ? "Sign " : "Log"}<span>{isSignUp ? "Up" : "in"}</span></h1>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {isSignUp && (
                        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                    )}
                    <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                    <button type="submit" className="btn btn--blue">
                        {isSignUp ? "Create Account" : "Login"}
                    </button>
                </form>

                <p style={{ marginTop: 18 }}>
                    {isSignUp ? "Already have an account? " : "New here? "}
                    <button type="button" className="link-btn" onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </p>
            </section>
        </div>
    );
}

export function NotFound() {
    return (
        <div className="page">
            <section className="page-section">
                <h1>404 - Page Not Found</h1>
            </section>
        </div>
    );
}