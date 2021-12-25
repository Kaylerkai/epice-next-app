import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { MyTimeline, HeroHome, MiddleBlock, ContentBlock, ContactForm } from '../container'
import About from '../data/jumbo.json'
export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>EPICE - {new Date().getFullYear()}</title>
      </Head>
      <HeroHome />
      {/* Chat Bot */}
      <React.Fragment>
        <df-messenger
          intent="WELCOME"
          chat-title="garibaldo-sirius"
          agent-id="3e523c6e-2027-4f5f-81ec-fb28d7594610"
          language-code="pt-br"
        >
        </df-messenger>
        <Script src="https://code.jquery.com/jquery-1.9.1.min.js" />
        <Script src="../javascript/" />
        <Script
          src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        />
        <style jsx>{`
          div.chat-wrapper{
            height: 470px !important
          }
        }
      `}</style>
      </React.Fragment>
      <MiddleBlock
        title={About.title}
        content={About.text}
        directions={About.directions}
        id={About.id}
        img={About.img}
      />
      <ContentBlock />
      <MyTimeline />
      <ContactForm />
    </React.Fragment>
  )
}