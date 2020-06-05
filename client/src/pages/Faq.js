import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Faq() {
  return (
    <Layout>
      <div className="bg-new-navy w-full">
        <h1 className="font-header text-lg leading-normal sm:text-2xl sm:text-4xl px-8 sm:px-0 text-center font-medium max-w-screen-sm sm:max-w-screen-md mx-auto tracking-wide text-white mb-2 sm:mb-4 pt-8 sm:pt-12 pb-8 sm:pb-12">
          Frequently asked questions
        </h1>
      </div>
      <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto px-3 sm:px-0 ">
        <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Is this service fully operational now?
          </h2>
          <p className="mb-4">
            Not quite yet. Right now we’re onboarding charity shops across the
            UK. If you’re a charity shop,{" "}
            <Link className="italic text-md text-gray-500" to="/register">
              find out more here
            </Link>
            .
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Is this a weekly service?
          </h2>
          <p className="mb-4">
            Weekly, bi-weekly or monthly — it’s up to you! We think you can’t
            have too many books and movies in times like these. And if you do
            end up with more than you can manage, they can always be donated
            back to charity shops!
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How do my items arrive?
          </h2>
          <p className="mb-4">
            We’ll put Royal Mail to good use so you can expect your friendly
            postie to deliver your box. However, in the future it may become
            more profitable for charity shops to do their own deliveries — if
            and when they have the capacity to do so.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            I’m a charity shop. What do you need from me?
          </h2>
          <p className="mb-4">
            You already have lots of books and DVDs so we just need you to
            fulfil the orders we get. We give you access to our orders and we
            pay you for the ones that you send out. As a subscription box
            service this is repeatable business for you.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How many charities are needed?
          </h2>
          <p className="mb-4">
            We’d like to have a handful of charities within each county of the
            UK. For efficiency and coordination we’ll need to limit this to ten
            charity shops per county.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How are items being donated to charity shops right now?
          </h2>
          <p className="mb-4">
            With shops on the high street closed, the ability to receive
            donations in store is no longer an option. And this is a great shame
            when many of us will use the time stuck indoors to pull out the
            things we no longer need. Stock-collection vans are still operating
            in some areas but the national picture is fuzzy. In reality, there
            will be lots of items bagged up and ready for donation that can’t be
            taken in by charity shops as per usual — the coronavirus crisis has
            caused a bottleneck.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What other challenges do charity shops have right now?
          </h2>
          <p className="mb-4">
            Many charity shop volunteers need to be shielded from society for at
            least the next 12 weeks. In due course, charity shops will need
            fresh volunteers to help them get back up and running.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What is the goal of this initiative?
          </h2>
          <p className="mb-4">
            We set out to help with the isolation that many people are facing
            right now. At the same time it keeps the charity shop sector moving,
            helping to mitigate some of the impact that lockdown has on their
            businesses.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How can I contribute to this initiative?
          </h2>
          <p className="mb-4">
            We suggest three simple ways you can contribute:
          </p>
          <ul className="list-inside list-disc">
            <li className="mb-4">
              You can share our profile and highlight the difference that books
              and DVDs make during isolation.
            </li>
            <li className="mb-4">
              You can tell your local charity shop that you want to help them
              facilitate this service. For example you could fulfil their orders
              by packaging up books &amp; DVDs and taking them to the Post
              Office for Royal Mail delivery. Alternatively you can combine this
              with other local doorstep delivery services.
            </li>
            <li className="mb-4">
              You can buy Kelvin a coffee{" "}
              <a
                className="italic text-md text-gray-500"
                href="https://www.buymeacoffee.com/tEYx6jc"
              >
                here.
              </a>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            I love Charity Shop Exchange so much that I need to hear about more
            ways to support it!
          </h2>
          <p className="mb-4">
            Philanthropic funds could subsidise our operational costs and help
            the initiative to scale faster, which means we’ll be able to send
            more money to the charity shop sector. If you’d like to provide this
            kind of support please{" "}
            <a
              className="italic text-md text-gray-500"
              href="mailto:together@charityshopexchange.com?subject=Support%20Charity%20Shop%20Exchange"
            >
              send us an email
            </a>
            .
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Can I have a discount?
          </h2>
          <p className="mb-4">
            If you don’t ask you don’t get… enter <strong>nineteen</strong> at
            checkout to get 19p off your first order.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Who are you and why did you start this?
          </h2>
          <p className="mb-4">
            We explain everything{" "}
            <Link className="italic text-md text-gray-500" to="/about">
              here.
            </Link>
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How do you make money?
          </h2>
          <p className="mb-4">
            For each weekly / bi-weekly / monthly box we take the first £1.50 of
            the order, plus 20% of the remaining order value.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Why do you ask for a favourite charity?
          </h2>
          <p className="mb-4">
            We ask people to pick a charity because it’s a way to select the
            charity shop they’d prefer to supply them with the items they order.
            Our goal is to match up all of these preferences but we can’t yet
            promise that every order will be packaged and shipped from their
            favourite charity shop. Our ambition is for local charity shops to
            supply local people. Please be patient with us as we ramp up the
            service.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Is this service available in my region of the UK?
          </h2>
          <p className="mb-4">
            Yes. We supply items to all regions of the UK using Royal Mail
            delivery.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Will this service continue post-coronavirus?
          </h2>
          <p className="mb-4">
            There’s no reason why this service doesn’t have life beyond
            coronavirus. Equally there’s no problem if you just want to depend
            on it for the next few months. It’s easy to cancel at anytime.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 items-center mx-auto pt-12 pb-32">
        <div className="flex items-center flex-col sm:max-w-screen-lg mx-auto px-3 sm:px-0">
          <div className="flex-1 text-center text-xl sm:text-3xl font-bold text-gray-700 tracking-wide">
            Do you still have questions?
          </div>
          <a href="mailto:together@charityshopexchange.com" target="_top">
            <button className="flex-initial py-2 sm:py-3 px-12 sm:px-12 text-sm sm:text-lg mt-20 hover:bg-red-700 font-base rounded-full text-gray-700 hover:text-white border hover:border-none border-gray-700  focus:outline-none focus:shadow-outline ">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
