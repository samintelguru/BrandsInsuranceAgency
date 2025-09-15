import React from 'react';
import { Shield, FileText, AlertCircle } from 'lucide-react';

const RegulatoryDisclosure = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Regulatory & Corporate Disclosure</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Regulatory Information</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Licensed Insurance Agency:</strong>Brands insurance Agency is authorised and regulated by the Insurance Regulatory Authority of Kenya Licence number IRA/05/25043/2025
              </p>
              <p>
                <strong>Lloyd's of London Partnership:</strong> We operate in strategic partnership with 
                Lilly Plummer Risks Ltd, a market-leading Lloyd's broker headquartered in London, 
                providing international coverage with local accessibility.
              </p>
              <p>
                <strong>Compliance:</strong> All insurance products are underwritten by admitted insurance 
                carriers rated A- or better by A.M. Best Company.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Important Disclosures</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Coverage Limitations:</strong> Insurance coverage is subject to policy terms, 
                conditions, and exclusions. Please review all policy documents carefully.
              </p>
              <p>
                <strong>Claims Process:</strong> All claims are subject to investigation and approval 
                by the underwriting insurance carrier. Coverage decisions are made in accordance 
                with policy terms.
              </p>
              <p>
                <strong>Professional Advice:</strong> This website provides general information only. 
                Consult with our licensed agents for specific coverage recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> The information provided on this website is for general informational 
              purposes only and does not constitute professional advice. Insurance coverage and availability 
              may vary by state and individual circumstances. All insurance products are subject to underwriting 
              approval and policy terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryDisclosure;