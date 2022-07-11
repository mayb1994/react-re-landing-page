import { Section2Container, Section2ImgContainer, Section2Img, Section2Slogan, Section2Heading, Section2P, Section2ContentContainer, Content1Container, Content1Heading, Content1P, Content2Container, Content2Heading, Content2P, Content3Container, Content3Heading, Content3P } from './Section2Elements';
import brannon_may_realtor from "../../assets/brannon_may_realtor.jpg";

const Section2 = () => {
  return (
    <Section2Container>
      <Section2ImgContainer>
        <Section2Img><img src={brannon_may_realtor} alt="brannon_may_realtor" />
        </Section2Img>
        </Section2ImgContainer>
      <Section2Slogan>
        <Section2Heading>
          About Me
        </Section2Heading>
        <Section2P>Real estate advisor and educator in Middle Tennessee, working the Clarksville market. Everyone that I have represented have become life long friends and consultants.</Section2P>
        <br></br>
        <Section2P>Real estate ownership and investing are true passions of mine. The real estate industry has generated more wealth than any other industry since the beginning of American history - I am here to provide that for you.</Section2P>
      </Section2Slogan>

      {/* SELECTION */}
      <Section2ContentContainer>
        {/* BUY */}
        <Content1Container>
          <Content1Heading>
            Buy a home
            </Content1Heading>
          <Content1P>
            Find your place with an immersive photo experience and the most
            listings, including things you won't find anywhere else.
          </Content1P>
        </Content1Container>

        {/* Sell */}
        <Content2Container>
          <Content2Heading>Sell a home</Content2Heading>
          <Content2P>
            We're creating a seamless online experience - from shopping on the
            largest rental network, to application assistance and paying rent.
          </Content2P>
        </Content2Container>

        {/* Property Value */}
        <Content3Container>
          <Content3Heading>Property Value</Content3Heading>
          <Content3P>
            Wether you get a cash offer through Real Offers or choose to sell
            traditionally, we can help you navigate the most successful sale.
          </Content3P>
        </Content3Container>
      </Section2ContentContainer>
    </Section2Container>
  );
};

export default Section2;
