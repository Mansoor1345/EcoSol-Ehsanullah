import { FileText, CheckCircle, Scale, ShieldAlert } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

export default function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  return (
    <div className="bg-white pt-32 pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: March 26, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-12">
        <div className="prose prose-lg prose-green max-w-none text-gray-600">
          <p className="lead text-xl text-gray-800 font-medium mb-12">
            Welcome to ECO-SOL ENERGIES. By accessing our website, hiring our services, or interacting with our engineers, you agree to be bound by the following comprehensive terms and conditions.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-green-600" /> 
              1. Service Scope & Execution
            </h2>
            <p className="mb-4">
              ECO-SOL ENERGIES provides end-to-end solar solutions including engineering, procurement, and construction (EPC). While we strive to execute projects within the projected 2-3 week timelines, external factors such as global tier-1 supply chain constraints, localized severe weather delays, or governmental clearance bottlenecks may extend installation periods.
            </p>
            <p className="mb-4">
              Our initial site surveys and 3D architectural models are provided free of cost; however, unauthorized distribution of our proprietary design proposals to competing firms is strictly prohibited.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" /> 
              2. Net-Metering & Governmental Approvals
            </h2>
            <p className="mb-4">
              ECO-SOL ENERGIES leverages deep industry connections to expedite Net-Metering approvals with NEPRA, K-Electric, WAPDA, and IESCO. However, the final issuance of a Bi-Directional Green Meter is strictly contingent upon utility grid capacities and governmental bureaucracy.
            </p>
            <p className="mb-4">
              We do not guarantee specific timelines for net-metering commissioning outside of our internal physical installation process. Clients must ensure all property documentation and tax files are compliant to avoid automatic rejection by utility providers.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-green-600" /> 
              3. Warranties & Limitations
            </h2>
            <p className="mb-4">
              We utilize premium imported hardware with direct manufacturer warranties. Inverters generally carry 5 to 10-year warranties, and crystalline solar modules retain a 25-year linear performance warranty. Structural mounting solutions guarantee 10 years against high-velocity wind damage, excluding natural disasters or extreme acts of God.
            </p>
            <p className="mb-4">
              Warranty claims instantly become void under circumstances of unauthorized third-party tampering, gross customer negligence (cleaning with hard chemicals), or connection to unapproved hyper-generators.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Payment & Financing Structures
            </h2>
            <p className="mb-4">
              All residential deployments require milestone-based tranche payments. Material procurement will not occur until the initial mobilization deposit is cleared. For commercial entities utilizing State Bank green-refinancing schemes, ECO-SOL ENERGIES will act strictly as the EPC vendor; the financial liability remains entirely between the client and their respective banking partner.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Jurisdiction</h3>
            <p className="mb-4">
              These Terms of Service are governed by the laws of Pakistan. Any legal disputes arising directly from contractual EPC services will be settled in the jurisdiction of Karachi.
            </p>
            <p className="font-medium text-gray-900 mb-8">
              For legal inquiries: ecosolenergiespak@gmail.com
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
