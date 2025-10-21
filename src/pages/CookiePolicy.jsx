import { motion } from 'framer-motion'
import AnimationWrapper from '../components/AnimationWrapper'

const CookiePolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-300">Last updated: October 21, 2025</p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <AnimationWrapper>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-primary">What Are Cookies?</h2>
              <p className="mb-6 text-gray-600">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and to provide information to the owners of the site.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">How We Use Cookies</h2>
              <p className="mb-4 text-gray-600">
                Property Now uses cookies for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Enabling certain functions of the website</li>
                <li>Providing analytics and measuring website traffic</li>
                <li>Storing your preferences and settings</li>
                <li>Remembering your property searches and saved listings</li>
                <li>Understanding how you interact with our website</li>
                <li>Improving our services and user experience</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold mb-3 text-primary">1. Essential Cookies</h3>
              <p className="mb-6 text-gray-600">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and session management. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-primary">2. Performance Cookies</h3>
              <p className="mb-6 text-gray-600">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if visitors receive error messages. These cookies help us improve how our website works by understanding how users interact with it.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-primary">3. Functionality Cookies</h3>
              <p className="mb-6 text-gray-600">
                These cookies allow the website to remember choices you make (such as your preferred location, language, or saved property searches) and provide enhanced, more personalized features. They may also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-primary">4. Targeting/Advertising Cookies</h3>
              <p className="mb-6 text-gray-600">
                These cookies are used to deliver content more relevant to you and your interests. They may be used to deliver targeted advertising or to limit the number of times you see an advertisement. They also help us measure the effectiveness of advertising campaigns.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Third-Party Cookies</h2>
              <p className="mb-4 text-gray-600">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements. These include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Google Analytics:</strong> To analyze how users interact with our website</li>
                <li><strong>Social Media Plugins:</strong> To enable social sharing features</li>
                <li><strong>Advertising Partners:</strong> To display relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Cookie Duration</h2>
              <p className="mb-4 text-gray-600">
                Cookies can be either "session cookies" or "persistent cookies":
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period specified in the cookie or until you manually delete them</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Managing Cookies</h2>
              <p className="mb-4 text-gray-600">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-primary">Browser Controls</h3>
              <p className="mb-4 text-gray-600">
                Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
              </ul>

              <p className="mb-6 text-gray-600">
                Please note that if you choose to block cookies, some features of our website may not function properly, and your user experience may be affected.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Do Not Track Signals</h2>
              <p className="mb-6 text-gray-600">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no uniform technology standard for recognizing and implementing DNT signals, so we do not respond to DNT browser signals at this time.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Cookies Used on Our Website</h2>
              <div className="bg-neutral p-6 rounded-card mb-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="pb-3 pr-4">Cookie Name</th>
                      <th className="pb-3 pr-4">Type</th>
                      <th className="pb-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">session_id</td>
                      <td className="py-3 pr-4">Essential</td>
                      <td className="py-3">Maintains user session</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">user_preferences</td>
                      <td className="py-3 pr-4">Functionality</td>
                      <td className="py-3">Stores user settings</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">_ga</td>
                      <td className="py-3 pr-4">Analytics</td>
                      <td className="py-3">Google Analytics tracking</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 pr-4">saved_searches</td>
                      <td className="py-3 pr-4">Functionality</td>
                      <td className="py-3">Remembers property searches</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">Updates to This Policy</h2>
              <p className="mb-6 text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about our use of cookies.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-primary mt-8">More Information</h2>
              <p className="mb-4 text-gray-600">
                For more information about how we handle your personal data, please see our Privacy Policy. If you have specific questions about cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy
