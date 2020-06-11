import React from "react";
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';


export default function Cookies() {
    return (
        <Layout>
            <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto px-3 sm:px-0 ">
                <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
                    <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug"><strong>Cookie Statement</strong></h2>
                    <blockquote className="w-4/5 px-3 py-3 text-lg mx-auto bg-gray-300 text-gray-700 mb-8 mt-4">
                        <p><strong>What is a cookie? Cookies are small pieces of information which are issued to your computer / device when you visit a website and which store and sometimes track information about your use of that website.</strong></p>
                    </blockquote>

                    <p className="mb-4">When you visit charityshopexchange.com, the pages you look at, and a short text file called a cookie, are stored in your computers / devices web browser. The cookie does not contain personal details and will not let a website know any information that could identify you.</p>
                    <p className="mb-4">We use analytical cookies to analyze website visits. We use GoSquared&rsquo;s analytic software to collect information about how you use charityshopexchange.com. The data is anonymised before being used for analytics processing. GoSquared processes anonymised information about the pages you visit, how long you spend on each page, how you got to the site, what you click on while you&rsquo;re visiting the site.</p>
                    <p className="mb-4">We do not store your personal information through GoSquared (for example your name or address). We will not identify you through analytics information, and we will not combine analytics information with other data sets in a way that would identify who you are. Beyond Bazaar Limited does not sell, give, or trade the statistics that cookies store to any third parties.</p>
                    <p className="mb-4">You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
                    <p className="mb-4">The ICO provide an extensive explanation of the ways that you can block cookies, please visit <a className="italic text-md text-gray-500" href="https://ico.org.uk/for-the-public/online/cookies/">https://ico.org.uk/for-the-public/online/cookies/</a> for more information. Additionally, you can opt out of some targeted advertising services by visiting the Digital Advertising Alliance&rsquo;s opt-out portal at: <a className="italic text-md text-gray-500" href="http://optout.aboutads.info/">http://optout.aboutads.info/.</a></p>
                    <p className="mb-4">The website charityshopexchange.com is owned and operated by Beyond Bazaar Limited, trading as 'Charity Shop Exchange'. We are a company registered in England and Wales (company number 12583240).</p>

                    <blockquote  className="w-4/5 pl-3 py-3 text-lg mx-auto bg-gray-300 text-gray-700 mb-8 mt-4">
                        <p className="mb-4"><strong>Please remember that your use of charityshopexchange.com is at all times subject to the <Link className="italic text-md text-gray-500" to="/terms">Website Terms of Use</Link> and <Link className="italic text-md text-gray-500" to="/privacy">Privacy Policy</Link>,
                         which incorporate this Cookie Statement.</strong></p>
                    </blockquote>


                </div>
            </div>
        </Layout>
    )
}