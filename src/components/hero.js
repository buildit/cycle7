import React from "react";

const Hero = () => (
  <section className="grav-c-hero">
    <div className="hero-img"></div>
    <div className="grav-c-hero__container">
    <svg className="hero-logo-lockup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64.69">
  <g data-name="Layer 2">
    <path d="M199.43 22.47L183.24 55a8.91 8.91 0 0 1-8 5h-1.05a9 9 0 0 1-8-12.94l20.39-40.89a1.67 1.67 0 0 0-.06-1.63 1.65 1.65 0 0 0-1.42-.79h-20.69a5.17 5.17 0 0 0-4.64 2.85l-.24.48a5.21 5.21 0 0 0 4.64 7.57h15.32l-1.88 3.74h-13.44a9 9 0 0 1-8-13l.25-.48a8.91 8.91 0 0 1 8-4.9h20.68a5.41 5.41 0 0 1 4.82 7.87l-20.41 40.85a5.2 5.2 0 0 0 4.66 7.52h1.05a5.15 5.15 0 0 0 4.66-2.89l16.19-32.56a1.65 1.65 0 0 0-.07-1.62 1.67 1.67 0 0 0-1.42-.79h-7.22l1.91-3.74h5.31a5.41 5.41 0 0 1 4.85 7.82zM33.55 43.84a1.73 1.73 0 0 0-1.4.44 19.26 19.26 0 0 1-5.1 2.85 16.4 16.4 0 0 1-5.71 1 16 16 0 0 1-6.66-1.4 17.2 17.2 0 0 1-5.46-3.87 18.34 18.34 0 0 1-3.71-5.7 18.14 18.14 0 0 1-1.34-7 17.81 17.81 0 0 1 1.34-6.86 18.38 18.38 0 0 1 3.71-5.71 17.74 17.74 0 0 1 5.46-3.89 15.71 15.71 0 0 1 6.66-1.43 17.19 17.19 0 0 1 5.87.91A14.44 14.44 0 0 1 31.88 16a2.14 2.14 0 0 0 1.12.49 1.89 1.89 0 0 0 1-.16 1 1 0 0 0 .54-.66 1.39 1.39 0 0 0 .66-.69 1.6 1.6 0 0 0 .14-1 1.42 1.42 0 0 0-.58-.9 20.52 20.52 0 0 0-6.25-3.68 21.27 21.27 0 0 0-7.19-1.15A20.25 20.25 0 0 0 13 10 21.76 21.76 0 0 0 1.62 21.7a22.94 22.94 0 0 0 0 17 22.14 22.14 0 0 0 4.58 7 21.24 21.24 0 0 0 6.8 4.78 20.49 20.49 0 0 0 8.31 1.7 24.26 24.26 0 0 0 7.19-1.07 16.29 16.29 0 0 0 6.25-3.65 2.59 2.59 0 0 0 .47-.74 2.24 2.24 0 0 0 .14-.8 1.94 1.94 0 0 0-.55-1.42 2.24 2.24 0 0 0-1.26-.66zm32.51-22.06a1.81 1.81 0 0 0-2.64 1l-10.21 22.5-10.69-22.56a1.89 1.89 0 0 0-1.1-1.07 2 2 0 0 0-1.53.13 2 2 0 0 0-1.1 1.1 1.91 1.91 0 0 0 .11 1.54l12.23 25.34-5.46 12a1.76 1.76 0 0 0 1 2.64 2.88 2.88 0 0 0 1 .22 1.73 1.73 0 0 0 1.59-1.27L67.1 24.36a1.7 1.7 0 0 0-1.04-2.58zm23.62.88a14.46 14.46 0 0 0-6.18-1.32 13.87 13.87 0 0 0-7.46 2 14.12 14.12 0 0 0-5.1 5.46 16.28 16.28 0 0 0-1.87 7.84 15.56 15.56 0 0 0 2 7.79 14.45 14.45 0 0 0 5.32 5.46 14.77 14.77 0 0 0 7.71 2 14.21 14.21 0 0 0 10-3.67 1.52 1.52 0 0 0 .52-1.32 2.16 2.16 0 0 0-.74-1.37 1.8 1.8 0 0 0-1.32-.44 2.46 2.46 0 0 0-1.37.6 8.91 8.91 0 0 1-3.19 1.8 12.76 12.76 0 0 1-3.92.57 10.76 10.76 0 0 1-5.65-1.48 10.21 10.21 0 0 1-3.84-4.06 12.34 12.34 0 0 1-1.37-5.87 13.06 13.06 0 0 1 1.29-5.92 9.76 9.76 0 0 1 9-5.55 10.2 10.2 0 0 1 8 3.63 2.23 2.23 0 0 0 1.29.79 1.71 1.71 0 0 0 1.35-.3 2.2 2.2 0 0 0 .93-1.3 1.52 1.52 0 0 0-.44-1.4 14 14 0 0 0-4.96-3.94zm21 24.8h-1.37a2.83 2.83 0 0 1-2.46-1.46 7 7 0 0 1-1-3.84v-31.3a2 2 0 0 0-.58-1.5 2.08 2.08 0 0 0-3.59 1.5v31.28a12 12 0 0 0 1 4.94 7.87 7.87 0 0 0 2.69 3.34 6.64 6.64 0 0 0 3.92 1.21h.71a2.68 2.68 0 0 0 1.79-.58 1.88 1.88 0 0 0 .68-1.51A2.2 2.2 0 0 0 112 48a1.64 1.64 0 0 0-1.34-.54zm31.16-19a16.5 16.5 0 0 1 1.7 7.62 1.85 1.85 0 0 1-.54 1.4 2 2 0 0 1-1.43.52h-22.16a11.45 11.45 0 0 0 1.37 4.56 10.77 10.77 0 0 0 4 4.06 11.34 11.34 0 0 0 5.82 1.48 12.11 12.11 0 0 0 4-.69 9.52 9.52 0 0 0 3.21-1.73 2.27 2.27 0 0 1 1.38-.52 1.91 1.91 0 0 1 1.31.41 2 2 0 0 1 .74 1.43 1.59 1.59 0 0 1-.63 1.32 14.94 14.94 0 0 1-4.61 2.57 15.59 15.59 0 0 1-5.37 1A15.76 15.76 0 0 1 122.7 50a14 14 0 0 1-5.37-5.41 15.79 15.79 0 0 1-2-7.9 16.49 16.49 0 0 1 1.84-7.93 13.87 13.87 0 0 1 5.07-5.4 14 14 0 0 1 7.46-2 13.59 13.59 0 0 1 7.27 1.9 12.74 12.74 0 0 1 4.85 5.22zm-2.26 6a12.13 12.13 0 0 0-1.08-4 9.39 9.39 0 0 0-3.43-4 9.61 9.61 0 0 0-5.3-1.43 10.06 10.06 0 0 0-5.48 1.48 9.86 9.86 0 0 0-3.65 4.09 12.41 12.41 0 0 0-1.13 3.81z" data-name="Layer 1"/>
  </g>
</svg>
      {/* <h1>Cycle 7</h1> */}
      <p>
        A lean understanding and rapid prototyping process broken down into <strong>3 phases</strong> of activity over <strong>7 weeks</strong>.
      </p>
    </div>
  </section>
);

export default Hero;
