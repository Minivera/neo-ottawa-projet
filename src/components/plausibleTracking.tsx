import React, {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
} from 'react';
import Plausible from 'plausible-tracker';

type PlausibleReturn = ReturnType<typeof Plausible>;

export const PlausibleContext = createContext<PlausibleReturn | null>(null);

export const PlausibleProvider: FunctionComponent = ({ children }) => {
  const plausible = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        enableAutoPageviews: () => () => {},
        enableAutoOutboundTracking: () => () => {},
        trackEvent: () => {},
        trackPageview: () => {},
      } as PlausibleReturn;
    }

    const plausible = Plausible({
      domain: 'reset2047.ca',
      hashMode: true,
    });

    plausible.enableAutoPageviews();

    return plausible;
  }, []);

  return (
    <PlausibleContext.Provider value={plausible}>
      {children}
    </PlausibleContext.Provider>
  );
};

export const usePlausible = (): PlausibleReturn => {
  const plausible = useContext(PlausibleContext);
  if (!plausible) {
    throw new Error('plausible must be used in a PlausibleProvider');
  }

  return plausible;
};
