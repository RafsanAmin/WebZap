'use client';

import Image from 'next/image';
import Header from './components/header';
import Steps from './components/steps';
import AI from './components/ai';
import Techs from './components/techs';
import Pricing from './components/pricings';
import Support from './components/support';
import { AOSCont } from './components/AOS';

export default function Home() {
  return (
    <>
      <AOSCont>
        {' '}
        <Header />
        <Steps />
        <br />
        <br />
        <AI />
        <br />
        <br />
        <Techs />
        <Pricing />
        <Support />
      </AOSCont>
    </>
  );
}
