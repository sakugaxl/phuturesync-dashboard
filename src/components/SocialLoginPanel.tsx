import React, { useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

// Initialize Facebook SDK
const loadFacebookSDK = () => {
  window.fbAsyncInit = () => {
    window.FB.init({
      appId: import.meta.env.VITE_FACEBOOK_APP_ID,
      cookie: true,
      xfbml: true,
      version: 'v22.0'
    });
  };

  (function(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    const js = d.createElement(s) as HTMLScriptElement;
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode?.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

interface SocialPlatform {
  name: string;
  icon: React.ElementType;
  color: string;
  onConnect: () => void;
}

export default function SocialLoginPanel() {
  useEffect(() => {
    loadFacebookSDK();
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(response => {
      if (response.authResponse) {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/facebook?token=${response.authResponse.accessToken}`;
      }
    }, {
      scope: 'pages_show_list,pages_read_engagement,instagram_basic,ads_read',
      return_scopes: true
    });
  };

  const platforms = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'bg-blue-600', 
      onConnect: handleFacebookLogin 
    },
    // Keep other platforms as alerts for now
    ...defaultPlatforms.filter(p => p.name !== 'Facebook')
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect Social Media</h3>
      <div className="grid grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <button
            key={platform.name}
            onClick={platform.onConnect}
            className={`${platform.color} text-white p-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity`}
          >
            <platform.icon size={20} className="mr-2" />
            <span>Connect {platform.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}