const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Phuture Sync: Terms of Service (ToS)</h1>
      <p><strong>A Digital Product of Phuture Digital (Pty) Ltd</strong></p>
      <p>Effective Date: 2024/11/23</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p>By accessing or using Phuture Sync, you agree to these Terms of Service and all related policies.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <p>As a user of Phuture Sync, you are expected to:</p>
      <ul className="list-disc list-inside">
        <li>Provide accurate and up-to-date information.</li>
        <li>Use the platform lawfully and in accordance with its intended purpose.</li>
        <li>Not reverse-engineer or exploit any platform features.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Limitation of Liability</h2>
      <p>Phuture Digital (Pty) Ltd and Phuture Sync are not liable for:</p>
      <ul className="list-disc list-inside">
        <li>Data loss caused by third-party service providers.</li>
        <li>Disruptions caused by unforeseen technical issues.</li>
        <li>Unauthorized use of your account due to insufficient safeguarding of login credentials.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination</h2>
      <p>
        We reserve the right to terminate or suspend access to the platform for violations of these terms
        or for any activity deemed harmful to the service or its users.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
      <p>
        For support and inquiries, email us at 
        <a href="mailto:support@phuturesync.com" className="text-blue-500 underline">support@phuturesync.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
