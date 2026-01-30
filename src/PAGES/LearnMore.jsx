import React from 'react';

const LearnMore = () => {
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0f3d2e, #0a1f1a)",
            color: "#d1fae5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px"
        }}>
            <div style={{
                maxWidth: "900px",
                background: "rgba(15, 61, 46, 0.75)",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
                border: "1px solid rgba(16, 185, 129, 0.4)"
            }}>
                <h1 style={{
                    fontSize: "3rem",
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#34d399",
                    letterSpacing: "2px"
                }}>
                    GreenLink 🌱
                </h1>

                <p style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.8",
                    textAlign: "center",
                    marginBottom: "30px"
                }}>
                    GreenLink is a social platform built for gardeners — a place where plant lovers
                    connect, share knowledge, post updates, and grow together. Think of it as
                    <strong> Facebook, but designed for gardeners</strong>.
                </p>

                <p style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "25px"
                }}>
                    Users can create posts, explore gardening content, interact with the community,
                    and build meaningful connections around sustainability and plant care.
                    Private features are unlocked when logged in, making the experience personal
                    and secure.
                </p>

                <p style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "30px"
                }}>
                    This application was designed and developed by <strong>Ifraj Ahmed</strong> using
                    the <strong>MERN stack</strong> — MongoDB, Express, React, and Node.js — combining
                    modern web technologies with a clean, futuristic green aesthetic inspired by
                    nature and growth.
                </p>

                <div style={{
                    textAlign: "center",
                    marginTop: "40px",
                    fontSize: "0.95rem",
                    color: "#a7f3d0"
                }}>
                    🌿 Grow ideas. Share knowledge. Build community.
                </div>
            </div>
        </div>
    );
};

export default LearnMore;