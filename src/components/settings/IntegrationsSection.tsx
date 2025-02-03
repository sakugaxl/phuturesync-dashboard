// src/components/settings/IntegrationsSection.tsx
import { useEffect, useState } from "react";
import { auth, db, doc, getDoc, setDoc } from "../firebaseconfig/firebaseconfig"; // Import necessary Firestore functions

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Settings2,
  CheckCircle2,
  XCircle,
  BarChart,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// Initial integrations data
const integrations = [
  {
    name: "Facebook",
    icon: Facebook,
    color: "blue",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/facebook`,
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "blue",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/instagram`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "blue",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/linkedin`,
  },
  {
    name: "Twitter",
    icon: Twitter,
    color: "blue",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/twitter`,
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    color: "blue",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/tiktok`,
  },
  {
    name: "Google AdSense",
    icon: BarChart,
    color: "green",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/googleAdsense`,
  },
];

const statusColors = {
  connected: "text-green-600",
  "not-connected": "text-red-600",
};

export default function IntegrationsSection() {
  const [statuses, setStatuses] = useState<
    Record<string, "connected" | "not-connected">
  >({
    facebook: "not-connected",
    instagram: "not-connected",
    linkedin: "not-connected",
    twitter: "not-connected",
    tiktok: "not-connected",
    googleAdsense: "not-connected",
  });

  // Get the current user from Firebase Auth
  const user = auth.currentUser;

  // Fetch the integration statuses from Firestore
  const fetchIntegrationStatus = async () => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setStatuses(data?.integrations || {});
      }
    }
  };

  // Handle the connection for Facebook
  const handleConnect = async (platform: string) => {
    if (platform === "facebook") {
      const provider = new FacebookAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);
        const accessToken = FacebookAuthProvider.credentialFromResult(result)?.accessToken;

        if (accessToken && user) {
          alert("Facebook connected successfully!");

          // Update the status in the Firestore
          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, {
            integrations: {
              ...statuses,
              [platform]: "connected",
            },
          }, { merge: true });

          // Update the statuses in state
          const newStatuses = { ...statuses, [platform]: "connected" };
          setStatuses(newStatuses);
        }
      } catch (error) {
        alert(`Error connecting to ${platform}: ${error.message}`);
      }
    }
  };

  // Fetch integration statuses on component mount
  useEffect(() => {
    fetchIntegrationStatus();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Integrations</h3>
      <div className="grid gap-4">
        {integrations.map(({ name, icon: Icon, color, connectUrl }) => {
          const platform = name.toLowerCase().replace(" ", "");
          const isConnected = statuses[platform] === "connected";

          return (
            <div
              key={name}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center">
                <Icon className={`h-5 w-5 mr-3 text-${color}-500`} />
                <span className="font-medium text-gray-900">{name}</span>
              </div>

              <div className="flex items-center">
                <span
                  className={`flex items-center mr-4 text-sm ${statusColors[isConnected ? "connected" : "not-connected"]}`}
                >
                  {isConnected ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Connected
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 mr-1" />
                      Not Connected
                    </>
                  )}
                </span>

                {!isConnected && (
                  <button
                    onClick={() => handleConnect(platform)}
                    className={`bg-${color}-500 text-white px-4 py-2 rounded-lg hover:bg-${color}-600 transition-colors`}
                  >
                    Connect
                  </button>
                )}

                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings2 className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
