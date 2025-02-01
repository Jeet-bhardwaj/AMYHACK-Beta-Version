import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Rules from './components/Rules';
import Location from './components/Location';
import Footer from './components/Footer';
import styles from './App.module.css';
import Countdown from './components/ui/countdown-timer';

function App() {
  const components = [

    { id: 'hero', component: <Hero /> },
    { id: 'timeline', component: <Timeline /> },
    { id: 'tracks', component: <Tracks /> },
    { id: 'prizes', component: <Prizes /> },
    { id: 'sponsors', component: <Sponsors /> },
    { id: 'rules', component: <Rules /> },
    { id: 'location', component: <Location /> },
    { id: 'footer', component: <Footer /> },
  ];

  return (
    <div className={styles.appContainer}>
      <TransitionGroup>
        {components.map(({ id, component }) => (
          <CSSTransition
            key={id}
            timeout={500}
            classNames={{
              enter: styles.fadeEnter,
              enterActive: styles.fadeEnterActive,
              exit: styles.fadeExit,
              exitActive: styles.fadeExitActive,
            }}
          >
            {component}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
