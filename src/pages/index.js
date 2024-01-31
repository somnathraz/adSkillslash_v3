import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar/Navbar";
const SecondPart = dynamic(() => import("../components/Homepage/SecondPart"));
import FirstPart from "../components/Homepage/FirstPart";
import WhatsappButton from "../components/WhatsAppButton/WhatsappButton";
// import MiddlePageCta from "../components/MiddlePageCta/MiddlePageCta";

export default function Home() {
  return (
    <div>
      <Navbar course={false} link="https://courses.skillslash.com/learn" />
      <div>
        <Head>
          <title>Skillslash - Project Based Learning Platform.</title>
          <meta
            name="description"
            content="Learn latest blogs about Artificial Intelligence (AI), Python, Machine Learning, Data Science, NLP, Business Analysis, Data Science"
          />
        </Head>

        <FirstPart homePage={true} />
        <SecondPart homePage={true} />
        <WhatsappButton />
      </div>
    </div>
  );
}
