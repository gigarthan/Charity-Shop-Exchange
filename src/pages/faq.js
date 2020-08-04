import { Link } from 'gatsby';
import React from 'react';

import Layout from '~/components/Layout';

export default function Faq() {
  return (
    <Layout>
      <div className="bg-new-navy w-full">
        <h1 className="font-header text-lg leading-normal  sm:text-4xl px-8 sm:px-0 text-center font-medium max-w-screen-sm sm:max-w-screen-md mx-auto tracking-wide text-white mb-2 sm:mb-4 pt-8 sm:pt-12 pb-8 sm:pb-12">
          Frequently asked questions
        </h1>
      </div>
      <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto px-3 sm:px-0 ">
        <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What is Charity Shop Exchange?
          </h2>
          <p className="mb-4">
            Charity Shop Exchange offers a subscription service of books & DVDs.
            People need new things to read and watch and our subscription
            service facilitates this in an economical way. Subscribers receive a
            selection of books and DVDs which have been handpicked from local
            charity shops.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Is this service fully operational now?
          </h2>
          <p className="mb-4">
            Yes we’re open for subscriptions! Some of the charities we have
            listed on our homepage right now are to demonstrate regionality,
            we’ll soon update this as we onboard more charity shops across the
            UK. If you’re a charity shop please enquire{' '}
            <a
              className="italic text-md text-gray-600"
              href="https://charityshopexchange.com/register/">
              here.
            </a>
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Is Charity Shop Exchange available in my region of the UK?
          </h2>
          <p className="mb-4">
            Yes, we deliver UK-wide. If your region isn’t listed on our homepage
            it&apos;s because we don’t yet have a charity who operates within
            your region. However don’t let that stop you, you can pick any
            listed charity, from any region, and they will deliver items to any
            UK address.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Is this a weekly subscription service?
          </h2>
          <p className="mb-4">
            Weekly, bi-weekly or monthly — it’s up to you! We think you can’t
            have too many books and movies in times like these. And if you do
            end up with more than you can manage, they can always be donated
            back to charity shops!
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What items should I expect to receive?
          </h2>
          <p className="mb-4">
            When subscribing you select from book and/or DVD genres, and with
            your preferences in mind we handpick items that we think you might
            enjoy. For example if you select ‘Adventure movie’ then we might
            send you Raiders of the Lost Ark. We don’t promise that every pick
            will be a perfect match but we’re sure we can delight you more often
            than not. And by delegating us responsibility to find you
            interesting and entertaining material you can sit back and enjoy the
            serendipity! If you’re unhappy with a selection we’ve made we’ll
            happily replace it but please consider gifting it to someone else
            who may appreciate it or donating it back to a charity shop.
          </p>
          <p className="mb-4">
            You can start a subscription with just two items per delivery or
            choose to have as many as eight, and you can change anything about
            your subscription plan at any time.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How else can I help you understand my preferences?
          </h2>
          <p className="mb-4">
            We’ll introduce further ways for you to express your preferences and
            make more granular choices. In the meantime feel free to tell us how
            this might work better for you.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How do my items arrive?
          </h2>
          <p className="mb-4">
            The charity who fulfils your order is responsible for delivery.
            Whilst many will depend on Royal Mail, each charity is entitled to
            appoint any other reputable parcel delivery service to fulfil their
            delivery duties. We’ll let you know if and when you should look out
            for a carrier which isn’t Royal Mail.
          </p>
          <p className="mb-4">
            In the future it may become more efficient / profitable for charity
            shops to do their own local deliveries, if and when they have the
            capacity to do so; again we’ll tell you if this happens.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            I’m a charity shop. What do you need from me?
          </h2>
          <p className="mb-4">
            You already have lots of books and DVDs so we just need you to
            fulfil the orders we get. We give you access to our orders and we
            pay you for the ones that you send out. As a subscription service
            this is repeatable business for you. We just ask you to sign our
            supplier agreement to get started.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How many charities are needed?
          </h2>
          <p className="mb-4">
            We’d like to have a handful of charities within each county of the
            UK. For efficiency and coordination we’ll need to limit this to ten
            charity shop listings per county.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            How are items being donated to charity shops right now?
          </h2>
          <p className="mb-4">
            Check ahead, many charity shops have put restrictions in place
            because they don’t yet have the resources, or storage space, to take
            an influx of donated items. Please be patient.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What other challenges do charity shops have right now?
          </h2>
          <p className="mb-4">
            As the high street begins to reopen, charity shops face a much
            tougher path back to normality than most other retail businesses.
            The heightened public health situation remains, and charity shops
            rely heavily upon volunteers, many who are in the shielding category
            themselves or may live with someone who is; so it could be a while
            before shops reopen at full capacity. Please ask your local charity
            shop if they need fresh volunteers to help them get back up and
            running.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What is the goal of this initiative?
          </h2>
          <p className="mb-4">
            We set out to help with the isolation that many people are facing
            right now. At the same time it keeps the charity shop sector moving,
            helping to mitigate some of the impact that lockdown has on their
            businesses.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            What inspires this initiative?
          </h2>
          <p className="mb-4">
            We’re helping the great British institution of charity shops get
            back to business by selling their books and DVDs. Our subscription
            service helps charities stay close to their existing customers and
            brings them a stream of entirely new customers. Hopefully this will
            mitigate some of the impact that lockdown and social distancing has
            had, and will have, on charities retail operations and their
            fundraising.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
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
              You can buy Kelvin a coffee{' '}
              <a
                className="italic text-md text-gray-600"
                href="https://www.buymeacoffee.com/tEYx6jc">
                here.
              </a>
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Who are you and why did you start this?
          </h2>
          <p className="mb-4">
            We are a new business that came together during the coronavirus
            lockdown. Our business is committed to creating a material positive
            impact on society and the environment through our operations. We
            explain our beginnings{' '}
            <Link className="italic text-md text-gray-600" to="/about">
              here.
            </Link>
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Where does my money go??
          </h2>
          <p className="mb-4">
            When you buy items on Charity Shop Exchange you pay a fee directly
            to us which is included in your subscription cost. The remaining
            balance goes directly to the charity your items come from.
          </p>
          <p className="mb-4">
            For each order - be it a weekly, bi-weekly or monthly delivery -
            Charity Shop Exchange recieves between £1 and £1.40, plus 20% of the
            remaining order value.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Why do you ask for a favourite charity?
          </h2>
          <p className="mb-4">
            We ask our customers to pick a charity and in doing so they choose
            the charity shop they’d prefer to supply them with their order
            items.
          </p>
          <p className="mb-4">
            However, we can’t promise that every single order will be packaged
            and shipped by the chosen charity because we’ll encounter times when
            supply doesn’t meet demand, in which case customers could receive
            their items from an alternative charity shop.
          </p>
          <p className="mb-4">
            Our aspirations are for a resilient service that empowers local
            charity shops to supply local people, please be patient as we build
            this together.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            Will this service continue post-coronavirus?
          </h2>
          <p className="mb-4">
            Of course! Equally there’s no problem if you just want to depend on
            it for the next few months. It’s easy to cancel at any time.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-left mt-12 mb-4 sm:mb-6 text-gray-700 leading-snug">
            I love Charity Shop Exchange so much that I need to hear about more
            ways to support it!
          </h2>
          <p className="mb-4">
            Philanthropic funds could subsidise our operational costs and help
            the initiative to scale faster, which means we’ll be able to send
            more money to the charity shop sector. If you’d like to provide this
            kind of support please{' '}
            <a
              className="italic text-md text-gray-600"
              href="mailto:together@charityshopexchange.com?subject=Support%20Charity%20Shop%20Exchange">
              send us an email.
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-200 items-center mx-auto pt-12 pb-32">
        <div className="flex items-center flex-col sm:max-w-screen-lg mx-auto px-3 sm:px-0">
          <div className="flex-1 text-center text-xl sm:text-3xl font-bold text-gray-700 tracking-wide">
            Do you still have questions?
          </div>
          <a href="mailto:together@charityshopexchange.com" target="_top">
            <button
              className="flex-initial py-2 sm:py-3 px-12 sm:px-12 text-sm sm:text-lg mt-20 hover:bg-red-700 font-base rounded-full text-gray-700 hover:text-white border hover:border-none border-gray-700 focus:outline-none focus:shadow-outline"
              type="submit">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
