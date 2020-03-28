import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Current URL is '/'
export default () => {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', null, { shallow: false });
  }, []);

  useEffect(() => {
    // The counter changed!
    
  }, [router.query.counter]);

  return <div value="hola" />;
};
