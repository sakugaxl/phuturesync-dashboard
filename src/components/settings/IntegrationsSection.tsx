import { useEffect, useState } from "react";
import {
  Facebook,
  CheckCircle2,
  XCircle,
  Settings2,
} from "lucide-react";
import axios from "axios";

// Helper to handle unknown error types
function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

function openAuthPopup(url: string, platform: string, onSuccess: () => void, onError: (err: any) => void) {
  const popup = window.open(url, "_blank", "width=600,height=600");

  if (popup) {
    const interval = setInterval(async () => {
      if (popup.closed) {
        clearInterval(interval);

        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/auth/${platform}/status`,
            {
              params: { userId: "currentUserId" }, // Adjust dynamically
            }
          );
          if (response.data.isConnected) {
            onSuccess();
          } else {
            onError("Failed to connect. Please try again.");
          }
        } catch (err: unknown) {
          onError(getErrorMessage(err));
        }
      }
    }, 500);
  } else {
    onError("Failed to open popup. Please check your browser settings.");
  }
}

const integrations = [
  {
    name: "Facebook",
    icon: Facebook,
    color: "blue",
    connectUrl: `${import.meta.env.VITE_API_URL}/auth/facebook`,
  },
];

const statusColors = {
  connected: "text-green-600",
  "not-connected": "text-red-600",
};

export default function IntegrationsSection() {
  const [statuses, setStatuses] = useState<Record<string, "connected" | "not-connected">>({
    facebook: "not-connected",
  });

  const handleConnect = (platform: string, connectUrl: string) => {
    openAuthPopup(
      connectUrl,
      platform,
      () => setStatuses((prev) => ({ ...prev, [platform]: "connected" })),
      (err) => alert(`Error connecting ${platform}: ${getErrorMessage(err)}`)
    );
  };

  useEffect(() => {
    const checkStatus = async (platform: string) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/${platform}/status`,
          {
            params: { userId: "currentUserId" },
          }
        );
        if (response.data.isConnected) {
          setStatuses((prev) => ({ ...prev, [platform]: "connected" }));
        }
      } catch (error: unknown) {
        console.error(`Error checking ${platform} status:`, getErrorMessage(error));
      }
    };

    integrations.forEach(({ name }) =>
      checkStatus(name.toLowerCase().replace(" ", ""))
    );
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
                  className={`flex items-center mr-4 text-sm ${
                    statusColors[isConnected ? "connected" : "not-connected"]
                  }`}
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
                    onClick={() => handleConnect(platform, connectUrl)}
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
