declare interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (config: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      // Add other FB methods you use
    };
  }

  // Update the Facebook SDK loading code in useEffect
(js as HTMLScriptElement).src = 'https://connect.facebook.net/en_US/sdk.js';

// Add null check for parentNode
if (fjs && fjs.parentNode) {
  fjs.parentNode.insertBefore(js, fjs);
}