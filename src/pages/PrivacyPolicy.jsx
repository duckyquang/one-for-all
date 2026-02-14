import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-[20vw]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-light mb-4 text-white">1. Information We Collect</h2>
            <p>
              OneForAll collects information that you provide directly to us when you use our service. 
              This includes account information, content you create, and data you choose to share with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services. 
              This includes processing your requests, providing customer support, and personalizing your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit 
              and at rest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only in the circumstances described in this policy, such as with your consent or to comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. 
              You can also opt out of certain data processing activities through your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">7. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@oneforall.app
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

export default PrivacyPolicy
