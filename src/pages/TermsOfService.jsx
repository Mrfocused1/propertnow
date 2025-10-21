import { motion } from 'framer-motion'
import AnimationWrapper from '../components/AnimationWrapper'

const TermsOfService = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">Last updated: October 21, 2025</p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <AnimationWrapper>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-primary">Agreement to Terms</h2>
              <p className="mb-6 text-gray-600">
                By accessing or using Property Now's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Use License</h2>
              <p className="mb-4 text-gray-600">
                Permission is granted to temporarily access the materials (information or software) on Property Now's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">User Accounts</h2>
              <p className="mb-4 text-gray-600">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Maintaining the confidentiality of your account and password</li>
                <li>Restricting access to your computer and account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Property Listings</h2>
              <p className="mb-6 text-gray-600">
                All property listings are provided for informational purposes only. While we strive to ensure the accuracy of property information, we do not guarantee that all details are accurate, complete, or current. Property availability, prices, and specifications are subject to change without notice.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Prohibited Activities</h2>
              <p className="mb-4 text-gray-600">
                You may not access or use the site for any purpose other than that for which we make the site available. The site may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Systematically retrieving data or content to create a collection, database, or directory</li>
                <li>Making unauthorized use of the site, including harvesting email addresses</li>
                <li>Using the site to advertise or offer to sell goods and services</li>
                <li>Engaging in any automated use of the system</li>
                <li>Harassing, annoying, intimidating, or threatening any of our employees or agents</li>
                <li>Interfering with, disrupting, or creating an undue burden on the site</li>
                <li>Attempting to impersonate another user or person</li>
                <li>Using any information obtained from the site to harass, abuse, or harm another person</li>
                <li>Uploading or transmitting viruses, malware, or any other malicious code</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Intellectual Property Rights</h2>
              <p className="mb-6 text-gray-600">
                The content on Property Now, including but not limited to text, graphics, logos, images, and software, is the property of Property Now or its content suppliers and is protected by UK and international copyright laws. The compilation of all content on this site is the exclusive property of Property Now.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Third-Party Links</h2>
              <p className="mb-6 text-gray-600">
                Our website may contain links to third-party websites or services that are not owned or controlled by Property Now. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Disclaimer</h2>
              <p className="mb-6 text-gray-600">
                The materials on Property Now's website are provided on an 'as is' basis. Property Now makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Limitations of Liability</h2>
              <p className="mb-6 text-gray-600">
                In no event shall Property Now or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Property Now's website, even if Property Now or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Indemnification</h2>
              <p className="mb-6 text-gray-600">
                You agree to defend, indemnify, and hold harmless Property Now and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of and access to the site, or your violation of these Terms of Service.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Termination</h2>
              <p className="mb-6 text-gray-600">
                We may terminate or suspend your account and bar access to the site immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms of Service.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Governing Law</h2>
              <p className="mb-6 text-gray-600">
                These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Changes to Terms</h2>
              <p className="mb-6 text-gray-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the site after any changes constitutes acceptance of those changes.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Contact Information</h2>
              <p className="mb-4 text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-neutral p-6 rounded-card mb-8">
                <p className="mb-2"><strong>Property Now</strong></p>
                <p className="mb-2">123 Property Lane, London, UK, SW1A 1AA</p>
                <p className="mb-2">Email: legal@propertynow.co.uk</p>
                <p>Phone: +44 20 7123 4567</p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
