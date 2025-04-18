import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-full">
            <p className="text-muted-foreground">Last updated: April 18, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to DevPortfolioAI ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <h3>Personal Data</h3>
            <p>
              When you contact us through our contact form, we collect personal information such as your name, email address, phone number, and any other information you provide to us. This information is used to respond to your inquiries and provide our services.
            </p>
            <h3>Log Data</h3>
            <p>
              When you visit our website, our servers may automatically record information that your browser sends. This may include your IP address, browser type and version, pages you visit, time and date of your visit, time spent on each page, and other statistics.
            </p>
            
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect about you to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against, identify, and prevent fraud and other criminal activity</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may share your information with third parties only in the ways that are described in this Privacy Policy:
            </p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent</li>
            </ul>
            
            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
            
            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Data portability</li>
            </ul>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> afarenziya@gmail.com<br />
              <strong>Phone:</strong> +91 93158 69313<br />
              <strong>Address:</strong> 85 SD-II, Greater Noida West, India
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="+919315869313" />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;