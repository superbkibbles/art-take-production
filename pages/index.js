import Head from 'next/head';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from '../components/header';
import styles from '../styles/Home.module.css';

export default function Home() {
  const alignCenter = { display: 'flex', alignItems: 'center' };
  return (
    <div className={styles.background}>
      <Head>
        <title>Art Take</title>
        <meta name="description" content="Video Productions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={7}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 1 }} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src='/static/david.jpg' width={300} /> 
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2, end: 2 }} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src='/static/hussein.jpg' width={300} /> 
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 3 }} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src='/static/person.jpg' width={500} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 4, end: 4 }} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src='/static/history.jpg' width={500} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5, end: 5 }} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src='/static/culture.jpg' width={500} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 6, end: 6 }} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src='/static/giving.jpg' width={500} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end', background: '#eee' }}>
          <div className={`${styles.card} ${styles.parallax}`}>
          <img src='/static/david.jpg' width={300} className={styles.pic} />
            <h2 style={{marginBottom: '0.2rem'}}>WHAT?</h2>
            <p>We are a production company that focuses on forgotten history & humanizing people and their
            culture. Every culture has its own beauty, positivity and philosophy that separates it from
            another culture. Our main goal is to reveal to people tales that have been forgotten. We have
            put our energy in resurrection. Revival of forgotten aspects of cults and traditions in the form of
            art.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end', background: '#eee'}}>
          <div className={`${styles.card} ${styles.parallax}`}>
          <img src='/static/hussein.jpg' width={300} className={styles.pic} />
            <h2 style={{marginBottom: '0.2rem'}}>HOW?</h2>
            <p>With Hussein & David, the co-founders of Art Take Productions, having a healthy mix of
            experience through film and the creative arts as well as a credible business background, Art
            Take is confident with their abilities to transform stories into what modern day has forgotten and
            have gotten lost in translation.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end', background: '#eee'}}>
          <div className={`${styles.card} ${styles.parallax}`}>
          <img src='/static/person.jpg' width={300} className={styles.pic} />

            <h2 style={{marginBottom: '0.2rem'}}>WHY?</h2>
            <p>To be a storyteller for the ones that missed the chance to tell their story, we at Art Take
              Productions are built around 3 pillars to share such stories.
            </p>
            <ul style={{textAlign: 'left'}}>
              <li>Forgotten history</li>
              <li>Humanizing people and their culture</li>
              <li>Giving back</li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end', background: '#eee'}}>
          <div className={`${styles.card} ${styles.parallax}`}>
          <img src='/static/history.jpg' width={300} className={styles.pic} />

            <h2 style={{marginBottom: '0.2rem'}}>FORGOTTEN HISTORY</h2>
            <p>
              Whether it is based on race, gender, class status, whichever controversial issue, we want to
              partner with that community of people and bring it to light (camera lights that is). Because those
              individuals will be the most passionate about the project. And we’ll share that passion as we
              both look for ways to be better and more self-aware on the next story that comes along.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end', background: '#eee'}}>
          <div className={`${styles.card} ${styles.parallax}`}>
          <img src='/static/culture.jpg' width={300} className={styles.pic} />
            
            <h2 style={{marginBottom: '0.2rem'}}>HUMANIZING PEOPLE AND THEIR CULTURE</h2>
            <p>
              Whether it is based on race, gender, class status, whichever controversial issue, we want to
              partner with that community of people and bring it to light (camera lights that is). Because those
              individuals will be the most passionate about the project. And we’ll share that passion as we
              both look for ways to be better and more self-aware on the next story that comes along.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0.5} style={{ ...alignCenter, alignItems: 'flex-end', justifyContent: 'space-between',background: '#eee', flexDirection: 'column', paddingTop: '18rem'}}>
          <div className={`${styles.card} ${styles.parallax}`}>
          <img src='/static/giving.jpg' width={300} className={styles.pic} />

            <h2 style={{marginBottom: '0.2rem'}}>GIVING BACK</h2>
            <p>
              Giving back is our base. Our structure. Our end goal. Without it, the pillars topple. Consider us
              the Robinhood of the film industry. We take their stories and return back a service specific to
              their struggles. Those sharing their story with us are as much a partner to Art Take as Hussein
              and David are.
            </p>
          </div>
          <div style={{background: 'black', width: '100%', height: '50px'}}></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
