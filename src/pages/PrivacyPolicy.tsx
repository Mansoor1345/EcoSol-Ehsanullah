import { Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div className="bg-white pt-32 pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: March 26, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-12">
        <div className="prose prose-lg prose-green max-w-none text-gray-600">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-green-600" /> 
              1. Information We Collect
            </h2>
            <p className="mb-4">
              At ECO-SOL ENERGIES, we are committed to protecting your privacy. We collect information that you manually provide to us during inquiries, such as your name, contact details (phone number, email address), and property location. This information is strictly used to evaluate your solar feasibility and provide specialized energy audits or quotations.
            </p>
            <p className="mb-4">
              When you use our website, we may automatically collect non-personally identifiable technical data such as browser type, IP address, and site interactions to improve user experience.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-green-600" /> 
              2. How We Use Your Data
            </h2>
            <p className="mb-4">
              The data we collect is utilized to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Conduct off-site and on-site solar feasibility studies for your specific property.</li>
              <li>Communicate directly regarding your project requirements, maintenance schedules, and warranties.</li>
              <li>Facilitate the Net-Metering approval process with NEPRA and local utilities on your behalf.</li>
              <li>Improve our website architecture and service offerings.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-green-600" /> 
              3. Data Protection & Sharing
            </h2>
            <p className="mb-4">
              ECO-SOL ENERGIES does not sell, trade, or rent your personal identification information to third parties. We may share necessary demographic and identity details exclusively with our registered banking partners for solar financing (if requested by you) and governmental utility bodies strictly for securing operational licenses and Net-Metering approvals.
            </p>
            <p className="mb-4">
              We employ industry-standard digital security measures to ensure all collected data remains deeply protected against unauthorized access or breaches.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Your Rights
            </h2>
            <p className="mb-4">
              You maintain the absolute right to request access to the personal data we hold about you. You may also request corrections to inaccurate data or ask for your information to be entirely deleted from our internal CRM systems, provided it does not conflict with active governmental solar licenses linked to your property.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy, please reach out to our compliance team:
            </p>
            <p className="font-medium text-gray-900 mb-8">
              Email: ecosolenergiespak@gmail.com<br />
              Phone: +92 335 3444801<br />
              Address: ECO-SOL ENERGIES Headquarters, Karachi, Pakistan
            </p>
            <button 
              onClick={() => onNavigate('home')}
              className="px-6 py-3 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
