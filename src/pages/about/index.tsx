import { Layout } from '../../components/layout';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import {
  AboutMeContent,
  AboutMeSiteDescription,
  AboutMeSiteTitle,
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  Quotes,
  RecommendedPodcastEpisodes,
  VideosWorthWatching,
} from '../../_data/about';
import { Navigation } from '../../components/navigation';
import { Container } from '../../components/container';
import React from 'react';
import { Title } from '../../components/title';
import { ExternalLink } from '../../components/external-link';
import { Section } from '../../components/section';
import { Quote } from '../../components/quote';

import Avatar from '../../../public/assets/blog/authors/eren.jpeg';

const AboutMe = () => {
  return (
    <Layout>
      <NextSeo
        title={AboutMeSiteTitle}
        description={AboutMeSiteDescription}
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_SITE_URL,
          title: AboutMeSiteTitle,
          description: AboutMeSiteDescription,
          images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${AboutMeSiteTitle}` }],
          site_name: AboutMeSiteTitle,
        }}
      />
      <Navigation />
      <Container>
        <header>
          <Title>About Me</Title>
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-x-12">
            <p className="mt-4 prose">{AboutMeContent}</p>
            <div className="flex-shrink-0 overflow-hidden">
              <Image src={Avatar} width="150" height="150" alt="avatar" className="rounded-full" />
            </div>
          </div>
        </header>
        <Section title="Work Experience">
          <p className="mt-4 prose">
            Embarking on a journey into the dynamic world of software development over 2 years ago,
            I discovered my passion shortly after graduating from Muhammadiyah University of
            Yogyakarta (UMY) with a degree in Business Management. From the foundations of HTML,
            CSS, and JavaScript, I progressed swiftly to mastering complex data structures,
            algorithms, and the art of writing efficient code that powers impactful applications.
            <br />
            <br />
            Joining <ExternalLink href={'https://www.celerates.com/'}>Celerates</ExternalLink> as a
            Junior Software Engineer marked the beginning of my professional odyssey. At{' '}
            <ExternalLink href={'https://www.kompasgramedia.com/'}>Kompas Gramedia</ExternalLink>, I
            contributed to transformative projects like{' '}
            <ExternalLink href={'https://mykg.id'}>MyKG</ExternalLink>,{' '}
            <ExternalLink href={'https://bentarabudaya.com/'}>Bentara Budaya</ExternalLink>, and{' '}
            <ExternalLink href={'https://purnakaryakg.id/'}>Purna Karyawan Kompas</ExternalLink>,
            where I honed my skills and solidified my understanding of user-centric design and
            scalable architecture.
            <br />
            <br />
            Transitioning to{' '}
            <ExternalLink href={'https://bizzy.co.id/'}>Bizzy Digital</ExternalLink> as a Full Stack
            Engineer, I spearheaded the development of{' '}
            <ExternalLink href={'https://distribution.bizzy.co.id/'}>Bizzy Connect</ExternalLink>, a
            platform that revolutionized supply chain efficiency. My time at Bizzy Digital was a
            period of innovation and collaboration, where I deepened my expertise in integrating
            robust backend solutions with seamless frontend experiences.
            <br />
            <br />
            Embracing the challenge of Frontend Engineer at{' '}
            <ExternalLink href={'https://efishery.com/'}>eFishery</ExternalLink>, I contributed to
            shaping user interfaces that empower aquaculture stakeholders across Indonesia. This
            role allowed me to blend creativity with technical precision, ensuring our platforms
            deliver intuitive and engaging user experiences.
            <br />
            <br />
            Transitioning into my current role as an Engineering Manager at{' '}
            <ExternalLink href={'https://efishery.com/'}>eFishery</ExternalLink> has been a
            transformative journey. Leading the logistics domain, I orchestrate strategies that
            optimize supply chain operations, leveraging technology to streamline processes and
            drive business growth.
            <br />
            <br />I thrive on collaboration and innovation. Let's connect via{' '}
            <ExternalLink href="mailto:dhoheiri@gmail.com">Email</ExternalLink> or{' '}
            <ExternalLink href="https://www.linkedin.com/in/erendhoheiri/">LinkedIn</ExternalLink>{' '}
            to explore how we can create meaningful impact together.
          </p>
        </Section>
        {/* <Section title={'Books'}>
          <div className="prose">
            Books I think are must-read or I simply enjoyed a lot
            <ul className="mt-1">
              {Books.map((book) => (
                <li key={book.name}>
                  <ExternalLink href={book.link}>{book.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'Videos'}>
          <div className="prose">
            Random videos I think are worth watching
            <ul className="mt-1">
              {VideosWorthWatching.map((video) => (
                <li key={video.name}>
                  <ExternalLink href={video.link}>{video.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'Podcasts'}>
          <div className="prose">
            Podcasts I think are worth listening to
            <ul className="mt-1">
              {Podcasts.map((podcast) => (
                <li key={podcast.name}>
                  <ExternalLink href={podcast.link}>{podcast.name}</ExternalLink>
                </li>
              ))}
            </ul>
            <p className="mt-4">Episodes I'd recommend the most</p>
            <ul className="mt-1">
              {RecommendedPodcastEpisodes.map((episode) => (
                <li key={episode.name}>
                  <ExternalLink href={episode.link}>{episode.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'Blogs'}>
          <div className="prose">
            Blogs I read
            <ul className="mt-1">
              {Blogs.map((blog) => (
                <li key={blog.name}>
                  <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'People'}>
          <div className="prose">
            People I think are worth following on Twitter:{' '}
            {PeopleWorthFollowingOnTwitter.map<React.ReactNode>((personOnTwitter) => (
              <ExternalLink key={personOnTwitter.name} href={personOnTwitter.link}>
                {personOnTwitter.name}
              </ExternalLink>
            )).reduce((prev, curr) => [prev, ', ', curr])}
            .
          </div>
        </Section> */}
        {/* <Section title={'Quotes'}>
          <div className="">
            Random quotes I found inspirational and meaningful
            <div className="mt-4 space-y-8">
              {Quotes.map((quote, index) => (
                <Quote key={index} quote={quote.content} author={quote.author} />
              ))}
            </div>
          </div>
        </Section> */}
      </Container>
    </Layout>
  );
};

export default AboutMe;
