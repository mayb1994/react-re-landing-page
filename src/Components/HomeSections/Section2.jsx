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
        <Section2P>As a real estate agent in Clarksville, TN, Brannon’s love for real estate and the absolute enjoyment of fulfilling the American Dream cements his commitment to helping homeowners and military families achieve their goals. Brannon is a U.S. Army veteran and former utlility-helicopter pilot who was relocated to Ft. Campbell in 2019 with his active-duty military family. Having had the raw experience of being on the frontline, Brannon has great value for military families’ sacrifice to protect this country and understands the unique relocation needs of a PCS move. His genuine love for serving others, discipline, strong work ethic, and knack for results sees him repeatedly deliver client satisfaction.
        </Section2P>
        <Section2P>
        Growing up in Nashville, Brannon leverages his extensive knowledge of the local market and surrounding areas to help clients navigate the complex and competitive markets with ease. His strong education background in Aeronautical Science equipped him with technical expertise and strong analytical, mathematical, and problem-solving skills, allowing him to guide, advise and educate clients, effectively empowering them to make well-informed decisions. A strong marketer and great negotiator, Brannon puts up a calculated marketing strategy and admirable negotiation skills to help home buyers to fulfill their dreams of home ownership and assist sellers in marketing their properties for top dollar.
        </Section2P>
        <Section2P>
        Whereas real estate processes could be overwhelming, especially for first-time clients, Brannon’s ability to effectively communicate, listen, and intuitively identify their needs has made him an instant success and clients’ favorite. He takes a personal approach to meeting people’s housing needs and pays excellent attention to detail, thus delivering high-quality professional services. Whether you choose to buy a home through him or just ask for real estate advice, Brannon takes pride in transparency, providing you with all options, solutions, and resources to the best of his ability.
        </Section2P>
        <Section2P>
        As a people person, Brannon has earned his clients’ trust by basing his business on the maxims of honesty, integrity, and treating people with respect. He is reputable for his enthusiasm, tenacity, hard work, and willingness to walk with clients from the start to closing and even after transactions. These attributes have enabled him to build long-lasting professional relationships and create a constant pool of referral clients. Outside of real estate, Brannon enjoys spending time with his family, music production, running, and learning new things.
        </Section2P>
        <Section2P>
        For all your real estate transactions, ranging from challenging markets, exceptional circumstances, or specific and unique needs, you can be assured that Brannon has the strategy that works for you. Make him your go-to agent today, and he will not rest until he turns your real estate dreams into reality.
        </Section2P>
        <br></br>
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
      <br></br>
    </Section2Container>
);
};

export default Section2;
