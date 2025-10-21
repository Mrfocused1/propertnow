import { motion } from 'framer-motion'
import AnimationWrapper from '../components/AnimationWrapper'

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Last updated: October 21, 2025</p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <AnimationWrapper>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
              <p className="mb-6 text-gray-600">
                Property Now ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website propertynow.site.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-primary">Personal Information</h3>
              <p className="mb-4 text-gray-600">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Register on the website</li>
                <li>Express interest in obtaining information about us or our products and services</li>
                <li>Participate in activities on the website</li>
                <li>Contact us via our contact forms</li>
                <li>Request property viewings or information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary">Information Collected Automatically</h3>
              <p className="mb-4 text-gray-600">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Access times</li>
                <li>Pages viewed directly before and after accessing the website</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">How We Use Your Information</h2>
              <p className="mb-4 text-gray-600">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Facilitate property searches and viewings</li>
                <li>Send you property listings matching your preferences</li>
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze usage and trends</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Sharing Your Information</h2>
              <p className="mb-4 text-gray-600">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Property Owners and Landlords:</strong> When you express interest in a property, we share your contact information with the relevant property owner or landlord</li>
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Data Security</h2>
              <p className="mb-6 text-gray-600">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Your Privacy Rights</h2>
              <p className="mb-4 text-gray-600">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Cookies and Tracking</h2>
              <p className="mb-6 text-gray-600">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. For more information, please see our Cookie Policy.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Third-Party Websites</h2>
              <p className="mb-6 text-gray-600">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Children's Privacy</h2>
              <p className="mb-6 text-gray-600">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Changes to This Privacy Policy</h2>
              <p className="mb-6 text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Contact Us</h2>
              <p className="mb-4 text-gray-600">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-neutral p-6 rounded-card mb-8">
                <p className="mb-2"><strong>Property Now</strong></p>
                <p className="mb-2">123 Property Lane, London, UK, SW1A 1AA</p>
                <p className="mb-2">Email: privacy@propertynow.co.uk</p>
                <p>Phone: +44 20 7123 4567</p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
