import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto px-3 sm:px-0 ">
        <blockquote className="w-4/5 px-3 py-3 text-lg mx-auto bg-gray-300 text-gray-700 mb-8 mt-4">
          <p>
            <strong>
              We grant permission to use this website to all visitors who agree
              to abide by the terms of use that follow.
            </strong>
          </p>
        </blockquote>
        <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Website Terms of Use
          </h2>
          <p className="mb-4">
            The website charityshopexchange.com is owned and operated by Beyond
            Bazaar Limited, trading as 'Charity Shop Exchange'. References to
            "we", "us", or "our" are references to Beyond Bazaar Limited. We are
            a company registered in England and Wales (company number 12583240).
          </p>
          <p className="mb-4">
            By accessing the website, you agree to be bound by the terms of use,
            including our{' '}
            <Link className="italic text-md text-gray-500" to="/privacy">
              Privacy Policy
            </Link>
            . If you do not agree with the terms of use, do not use the website.
            These Website Terms of Use apply to all users of the website,
            including without limitation users who are browsers, vendors,
            customers, merchants, and/ or contributors of content.
          </p>
          <p className="mb-4">
            You may not in any way use the Charity Shop Exchange website or any
            content for any purpose prohibited by law or otherwise prohibited by
            these Website Terms of Use, or to solicit the performance of any
            illegal activity, or any activity which infringes the legal rights
            of Beyond Bazaar Limited, any of its subsidiaries, or partners.
          </p>
          <blockquote className="w-4/5 px-3 py-3 text-lg mx-auto bg-gray-300 text-gray-700 mb-8 mt-4">
            <p className="mb-4">
              <strong>
                If you visit our website and place a subscription order, you are
                engaging in our service and expressly agree to our{' '}
                <Link
                  className="italic text-md text-gray-500"
                  to="/customer-terms">
                  Terms and Conditions
                </Link>
                .
              </strong>
            </p>
            <p>
              <strong>
                Placing an order involves creating an account on our website,
                accounts are for your personal use only and are
                non-transferable. You must not authorise or permit any other
                person to use your account. You must take reasonable care to
                protect and keep confidential your password and other account or
                identity information. You must notify us immediately of any
                apparent breach of security such as loss, theft, misuse or
                unauthorised disclosure or use of a password
              </strong>
            </p>
          </blockquote>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Privacy
          </h3>
          <p className="mb-4">
            Your submission of personal information through the website is
            governed by our
            <Link to="/privacy" className="italic text-md text-gray-500">
              {' '}
              Privacy Policy
            </Link>
            .
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Intellectual Property
          </h3>
          <p className="mb-4">
            All code, text, software, scripts, graphics, files, photos, images,
            logos, and materials contained on this website, or within the
            services, are the property of Beyond Bazaar Limited and its
            suppliers. They&rsquo;re covered by the provisions of Copyright,
            Designs and Patents Act 1988 and related regulations and
            international agreements
          </p>
          <p className="mb-4">
            Some of the materials on the website might be subject to copyrights
            held by third parties. If you wish to use any material included on
            this website, it&rsquo;s your responsibility to determine who holds
            the copyright to the content and to get permission from the author
            or copyright owner before you use the materials.
          </p>
          <p className="mb-4">
            Unauthorized use of any materials contained on this website or
            within the service may violate copyright laws, trademark laws, the
            laws of privacy and publicity, and/or other regulations and
            statutes. If you believe that any of the materials infringe on any
            third party's rights, please contact Beyond Bazaar Limited at the
            address provided below.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Limitations of warranties and disclaimer
          </h3>
          <p className="mb-4">
            The information contained on, and accessed from, this website is
            intended to provide the website visitor information of general
            interest in our products and services.
          </p>
          <p className="mb-4">Beyond Bazaar Limited;</p>

          <ul className="m-4 pl-4 list-roman">
            <li className="mb-4">
              provides information on an &ldquo;as is&rdquo; basis, without any
              kind of warranty.
            </li>
            <li className="mb-4">
              assumes no liability for any direct, indirect, consequential, or
              other damages whatsoever arising out of, or in connection with,
              the website and any of its contents.
            </li>
            <li className="mb-4">
              does not guarantee, represent or warrant that your use of our
              service will be uninterrupted, timely or error-free.
            </li>
          </ul>
          <p className="mb-4">
            In no event shall Beyond Bazaar Limited or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on Charity Shop Exchange's
            website.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Accuracy of materials
          </h3>
          <p className="mb-4">
            Beyond Bazaar Limited does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any websites linked to this website.
          </p>
          <p className="mb-4">
            The materials appearing on the Charity Shop Exchange website could
            include technical, typographical, or photographic errors. Beyond
            Bazaar Limited does not warrant that any of the materials on its
            website are accurate, complete or current. Beyond Bazaar Limited may
            make changes to the materials contained on the Charity Shop Exchange
            website at any time without notice, but we have no obligation to
            update any information on our website.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Links to other websites
          </h3>
          <p className="mb-4">
            The Charity Shop Exchange website provides links to other websites
            but Charity Shop Exchange is not responsible in any way for the
            information provided on other websites. Links to other websites do
            not imply that Beyond Bazaar Limited endorses or guarantees anything
            about operators of these websites, or about the information,
            products, or services provided by them.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Modifications
          </h3>
          <p className="mb-4">
            Beyond Bazaar Limited may revise these Website Terms of Use from
            time to time without notice. It is your responsibility to check this
            page periodically for changes. Your continued use of or access to
            the website following the posting of any revisions constitutes
            acceptance of those revisions. We shall not be liable to you or to
            any third-party for any modification, price change, suspension or
            discontinuance of the service or website.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Governing law and jurisdiction
          </h3>
          <p className="mb-4">
            By visiting the Charity Shop Exchange website, or accessing
            information on it, you agree that all matters relating to access, or
            use of this website are governed by the laws of the United Kingdom,
            and you irrevocably submit to the exclusive jurisdiction of the
            courts in England and Wales.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Entire agreement
          </h3>
          <p className="mb-4">
            The information set out in these Website Terms of Use constitutes
            the entire agreement between you, a visitor to the website, and
            Beyond Bazaar Limited with respect to the use of the Charity Shop
            Exchange website. Any ambiguities in the interpretation of these
            Website Terms of Use shall not be construed against the drafting
            party.
          </p>
          <p className="mb-4">
            Questions about the Terms of Use should be sent by email to{' '}
            <a
              className="italic text-md text-gray-500"
              href="mailto:together@charityshopexchange.com"
              target="_top">
              together@charityshopexchange.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
