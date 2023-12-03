import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a Software Engineer, passionate about developing software and
          learning new technologies. I am looking forward to building solutions
          that have a positive impact on the lives of people and I offer strong
          programming skills in Java, Python, Kotlin, and JavaScript. I am also
          well-versed in various front-end and back-end frameworks such as
          React, Next, Angular, and Node.js. I have gained practical experience
          working on software development projects, building web and mobile
          applications, microservices, and providing automation solutions.
        </p>
        <p>
          Check out my{' '}
          <a href="https://www.linkedin.com/in/radhika-gupte">
            my LinkedIn account
          </a>
        </p>
        <p>
          You can also contact me via{' '}
          <a href="rgupte11@gmail.com">my email address</a>
        </p>
        <p>
          (I created this website using Next.js - you can also build a site like
          this with the help of{' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
