import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import GetRequest from '../../components/GetRequest/GetRequest';
import PostRrequest from '../../components/PostRequest/PostRequest';

function Home() {
  const [successRegister, setSuccessRegister] = useState(false);
  const getRequestRef = useRef(null);

  useEffect(() => {
    if (successRegister && getRequestRef.current) {
      getRequestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [successRegister]);

  console.log('HOME successRegister', successRegister);

  return (
    <>
      <Header successRegister={successRegister} />
      <Hero />
      <GetRequest
        successRegister={successRegister}
        scrollToRef={getRequestRef}
      />
      <PostRrequest
        successRegister={successRegister}
        setSuccessRegister={setSuccessRegister}
      />
    </>
  );
}

export default Home;
