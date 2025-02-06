// src/components/settings/SecuritySection.tsx

const SecuritySection = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
    <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded-lg">
        <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
        <button className="btn btn-primary bg-blue-500 text-white">
          Enable 2FA
        </button>
      </div>
      <div className="p-4 border border-gray-200 rounded-lg">
        <h4 className="font-medium mb-2">Password Management</h4>
        <button className="btn btn-primary bg-blue-500 text-white">
          Change Password
        </button>
      </div>
    </div>
  </div>
);

export default SecuritySection;