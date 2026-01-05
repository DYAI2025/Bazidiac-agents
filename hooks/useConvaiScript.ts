import { useEffect, useState } from 'react';
import { CONVAI_SCRIPT_URL } from '../constants';

export const useConvaiScript = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${CONVAI_SCRIPT_URL}"]`);

    if (existingScript) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = CONVAI_SCRIPT_URL;
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      setLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      // Intentionally not removing script on unmount to persist across navigation/re-renders
      // as per requirement to load only once.
    };
  }, []);

  return loaded;
};
