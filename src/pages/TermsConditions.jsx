import React from 'react'

function TermsConditions() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-[20vw]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12">Terms & Conditions</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-light mb-4 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using OneForAll, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">2. Use License</h2>
            <p>
              Permission is granted to temporarily use OneForAll for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not modify or 
              copy the materials, use the materials for any commercial purpose, or remove any copyright or other proprietary 
              notations from the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept 
              responsibility for all activities that occur under your account or password. You must notify us immediately 
              of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">4. User Content</h2>
            <p>
              You retain ownership of any content you submit, post, or display on or through OneForAll. By submitting 
              content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute 
              your content solely for the purpose of providing and improving our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">5. Prohibited Uses</h2>
            <p>
              You may not use OneForAll in any way that causes, or may cause, damage to the service or impairment of 
              the availability or accessibility of the service. You may not use the service in any way which is unlawful, 
              illegal, fraudulent, or harmful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">6. Service Availability</h2>
            <p>
              We strive to provide continuous availability of our service, but we do not guarantee that the service 
              will be available at all times. We reserve the right to modify, suspend, or discontinue the service 
              at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">7. Limitation of Liability</h2>
            <p>
              In no event shall OneForAll or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">8. Modifications</h2>
            <p>
              OneForAll may revise these terms of service at any time without notice. By using this service you are 
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws. 
              Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts 
              in the applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at legal@oneforall.app
            </p>
          </section>

          <div className="pt-8 text-sm text-gray-400">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions
