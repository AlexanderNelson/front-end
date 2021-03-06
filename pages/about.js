import React from 'react';
import Head from 'components/head';
import Section from 'common/components/Section/Section';
import ImageCard from 'components/Single-Purpose/Cards/ImageCard/ImageCard';
import HeroBanner from 'common/components/HeroBanner/HeroBanner';
import ValueCard from 'components/Single-Purpose/Cards/ValueCard/ValueCard';
import { s3 } from 'common/constants/urls';
import styles from './styles/about.css';

export default () => (
  <>
    <Head title="About" />

    <HeroBanner
      className={styles.hero}
      imageSource={`${s3}heroBanners/stock_family-2.jpg`}
      title="About Us"
    />

    <Section theme="white">
      <h6>
        Operation Code is a non-profit charity helping the military community learn software
        development, enter the tech industry, and code the future.
      </h6>
      <p>
        We at Operation Code strive to provide an efficient way into a tech career for veterans and
        their families. We work directly with Senators, Congressmen, and Congresswomen to allow
        veterans total control of their future by permitting the use of the GI Bill on coding
        bootcamps. You can read about our organization &apos;s history here
      </p>
      <p>
        Aside from our work on the Hill, we offer many services to the military community and are
        continuing to expand our offerings as often as possible. First and foremost, our staff works
        tirelessly to provide mentorship for veterans interested in learning about various tech
        careers. Dozens of software engineers, product managers, system architects, security
        engineers, and various other IT professionals act as 1 - on - 1 mentors to all of our
        members. We also have a hardware loan program to help veterans in need of a laptop!
      </p>
      <p>
        As a non - profit organization, we rely heavily on your support. If you are interested in
        helping us financially, please donate here or set your Amazon Smile organization to
        &ldquo;Operation Code&rdquo;. If you have questions about our organization, platforms, or
        services, please reference our FAQ page. Otherwise, do not hesitate to reach out to our
        staff.
      </p>
    </Section>

    <Section theme="mist" title="What We Do">
      <div className={styles.flexGrid}>
        <ImageCard
          title="Mentorship Program"
          imageSource={`${s3}stock_teamwork-1.jpg`}
          cardText="Our mentorship program connects members with seasoned software developers
              to help you progress and achieve your goals."
        />
        <ImageCard
          title="Code School Scholarships"
          imageSource={`${s3}photo_red-hat-summit-2.jpg`}
          cardText="Our scholarships to code schools provide opportunities for the
              military community to kickstart their careers in software development."
        />
        <ImageCard
          title="Career Services"
          imageSource={`${s3}stock_paired-programming.jpg`}
          cardText="Our career services team provides job opportunities, career guidance and
              resume reviews, and prep for technical interviews."
        />
        <ImageCard
          title="Conference Scholarships"
          imageSource={`${s3}stock_laptop-working.jpg`}
          cardText="We partner with tech conferences around the country and offers
              scholarship tickets to events throughout the year."
        />
        <ImageCard
          title="Community Events"
          imageSource={`${s3}photo_oc-seattle-meetup.jpg`}
          cardText="Join one of our chapters throughout the country at our local meetups,
              and learn with fellow members of the military community."
        />
      </div>
    </Section>

    <Section theme="white" title="Mission">
      <p>
        Operation Code is leading the way to expand opportunities for military veterans and their
        families. We aim to help veterans learn new skills and build their careers in the
        fast-growing technology sector. Our team’s mission - led by veterans and other dedicated,
        passionate volunteers - is to help open doors for our diverse member base through unique
        program offerings, such as our Software Mentor Program, conference scholarships, and
        employment services. All of this is made possible by individual donations and corporate
        partnerships.
      </p>
    </Section>
    <Section theme="mist" title="Core Values">
      <div className={styles.flexGrid}>
        <ValueCard
          name="Integrity"
          description="We hold ourselves accountable for obtaining results
            that fulfill our Mission and work towards our Vision.
            As leaders, we are responsible for what we do, or fail to do.
            We act consistently with Operation Code's mission, being honest
            in what we do and say, and accept responsibility for our collective
            and individual actions."
        />
        <ValueCard
          name="Transparency"
          description="By being transparent in everything Operation Code does,
            from our open source code base to our financial operations, our
            community can trust that we will do our best with the resources we're given."
        />
        <ValueCard
          name="Agility"
          description="We run fast and we run lean. When our operating environment changes,
            and new challenges emerge, we're ready to respond. We communicate as early and as
            often as possible, and default to overcommunication in all of our interactions.
            We always look for a better, more effective, and more efficient way to run our
            operations."
        />
        <ValueCard
          name="Curiosity"
          description="Innovation is central to our mindset. We maintain an attitude of
            continuous improvement, and we constantly look for new and better ways to
            serve our community - we owe them nothing less."
        />
        <ValueCard
          name="Responsibility"
          description="We exist to meet the needs of the military community.
            We will humbly remember that their service was of the highest order and
            that Operation Code works for them. When it comes to the welfare and
            well-being of our community, the buck stops here."
        />
        <ValueCard
          name="Clarity"
          description="In the words of the US Army Signal Corps, we get the
            message through. We ensure that we are clear and concise in how we
            communicate, in support of our operations. We are considerate of the
            sender and the receiver, and communicate in the manner that best suits
            the needs of the mission and the vision."
        />
        <ValueCard
          name="Community"
          description="We look out for the people to our left and right,
            nd always keep a hand free to help. We listen to our community
            and our people to ensure we are working towards the mission and the vision."
        />
      </div>
    </Section>
  </>
);
