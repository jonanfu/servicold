import React from 'react';
import { Hero, Features, Payment, Album, Contact5, Button } from '../components/index';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Button />
      <Hero />
      <Features />
      {/* <Downloads /> */}
      <Album />
      <Payment />
      <Contact5 />
    </>
  );
}
