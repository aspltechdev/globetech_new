import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="ms-root">
      <nav className={`ms-nav${scrolled ? ' ms-nav--scrolled' : ''}`}>
        <div className="ms-nav__brand">
          <span className="ms-nav__note">♪</span>
          <span className="ms-nav__name">Meha Sruthi <em>Entertainers</em></span>
        </div>
        <ul className="ms-nav__links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" className="ms-nav__cta">Book Now</a></li>
        </ul>
      </nav>

      <section className="ms-hero">
        <div className="ms-hero__noise" />
        <div className="ms-hero__glow ms-hero__glow--gold" />
        <div className="ms-hero__glow ms-hero__glow--red" />

        <div className="ms-hero__left">
          <p className="ms-hero__eyebrow">Chennai Meera Sridharan's</p>
          <h1 className="ms-hero__title">
            Meha<br />
            <em>Sruthi</em><br />
            <span>Entertainers</span>
          </h1>
          <p className="ms-hero__tagline">Good music, good times, and good vibes.</p>
          <p className="ms-hero__desc">
            Live music performances for Corporate, Temple, Marriage shows,
            Dance, Mimicry, Magic Show, Standup Comedy & Fashion Shows.
          </p>
          <div className="ms-hero__actions">
            <a href="tel:9442657611" className="ms-btn ms-btn--primary">📞 Book a Show</a>
            <a href="#services" className="ms-btn ms-btn--ghost">Our Services</a>
          </div>
          <div className="ms-hero__contacts">
            <span>94426 57611</span>
            <span className="ms-dot">·</span>
            <span>95002 86507</span>
            <span className="ms-dot">·</span>
            <span>94432 29254</span>
          </div>
        </div>

        <div className="ms-hero__right">
          <div className="ms-hero__vinyl">
            <div className="ms-hero__vinyl-ring ms-hero__vinyl-ring--1" />
            <div className="ms-hero__vinyl-ring ms-hero__vinyl-ring--2" />
            <div className="ms-hero__vinyl-ring ms-hero__vinyl-ring--3" />
            <div className="ms-hero__vinyl-center">
              <span>𝄞</span>
            </div>
          </div>
          <div className="ms-hero__floating-notes">
            {['♩','♫','♬','♭','♪'].map((n, i) => (
              <span key={i} className="ms-fn" style={{'--i': i}}>{n}</span>
            ))}
          </div>
          <div className="ms-hero__badge">
            <span>Vijay TV</span>
            <strong>Airtel Super Singer</strong>
            <em>S. Kaushik</em>
          </div>
        </div>
      </section>
    </div>
  );
}