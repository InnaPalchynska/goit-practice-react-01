// import styles from './Hero.module.css';

import heroImg from '../../images/hero.jpg';

function Hero() {
  return (
    <section className="container">
      <img src={heroImg} alt="room" />
      <div>
        <h1>Design that inspires a better way to work.</h1>
        <p>
          We've developed a series of purpose-built rooms that offer companies
          looking for change an affordable, sustainable, and flexible
          alternative to fixed construction and traditional office design.
        </p>
      </div>
    </section>
  );
}

export default Hero;
