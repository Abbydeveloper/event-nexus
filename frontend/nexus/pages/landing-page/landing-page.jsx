// import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './landingPage.module.css';

export default function LandingPage() {

    const navigate = useNavigate();
 
    const goToLogin = (e) => {
        e.preventDefault();
    
        navigate('/auth/login');
    };

    const goToSignup = (e) => {
        e.preventDefault();
    
        navigate('/auth/signup');
    };

    
  return (
    <>
      <header>
        <div className={styles.container}>
            <img src="./src/assets/logo.png" alt="Event Nexus logo" className={styles.logo} />
            <nav className={styles.buttons}>
                <button className=" text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-small font-thin rounded-lg text-sm px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={goToLogin}>Login</button>
                <button className="text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-small font-thin rounded-lg text-sm px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={goToSignup}>Sign up</button>
            </nav>
        </div>
    </header>
    <main>
        <section className={styles["section-hero"]}>
            <div className={ styles.container }>
                <h1 className="font-semibold">Bringing the events you love closer to you</h1>
                {/* <img src="" alt="An image of the Event Nexus Dashboard" /> */}
            </div>
        </section>
        <section>
            <div className={ styles.container }>
                <p>From concerts and conferences to festivals and fundraisers, Event Nexus empowers you to</p>
                <div className={ styles["inner-section"]}>
                    <div className={styles.article}>
                        <h3>Manage your guest list</h3>
                        <p>Track RSVPs, check-in attendees, and manage your guest list with ease</p>
                    </div>
                    <div>
                        <img src="./src/assets/panel.svg" alt="" />
                    </div>
                </div>
                <div className={ styles["inner-section"]}>
                    <div className={styles.article}>
                        <h3>Sell tickets online</h3>
                        <p>Offer a seamless and secure ticketing experience for your attendees</p>
                    </div>
                    <div>
                        <img src="./src/assets/tickets.svg" alt="" />
                    </div>
                </div>
                <div className={styles["inner-section"]}>
                    <div className={ styles.article }>
                        <h3>Boost your marketing</h3>
                        <p>Promote your event with built-in marketing tools and social media integration</p>
                    </div>
                    <div>
                        <img src="./src/assets/report.svg" alt="" />
                    </div>
                </div>
                <div className={styles["inner-section"]}>
                    <div className={ styles.article }>
                        <h3>Get paid faster</h3>
                        <p>Receive payments directly into your account and access real-time sales data</p>
                    </div>
                    <div>
                        <img src="./src/assets/payment.svg" alt="" />
                    </div>
                </div>
                <div className={styles["inner-section"]}>
                    <div className={ styles.article }>
                        <h3>Create stunning event pages</h3>
                        <p>Showcase your event in the best possible light with customizable layouts and high-quality images</p>
                    </div>
                    <div>
                        <img src="./src/assets/program.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className={ styles.container }>
                <h2 className='text-5xl font-semibold'>Sign up today.</h2>
                <div className='py-10'>
                    <button className='text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-small font-thin rounded-lg text-sm px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={goToSignup}>Get started</button>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div className={ styles["footer-logo"]}>
            <img src="./src/assets/event.png" alt="Event Nexus logo" />
        </div>
        <p>Copyright 2025 | Event Nexus</p>
        <div></div>
    </footer>
    </>
  )
}