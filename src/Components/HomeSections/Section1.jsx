import { Link } from "react-router-dom";
import { useState } from "react";
import { Section1Container, BackgroundImg, Section1Content, SloganContent, SloganH1, SloganP, SearchBoxContainer, LocationContainer, PriceContainer, SearchButton, HeroImgContainer, HeroImgOverlay, BuildingImage } from './Section1Elements';


const Section1 = () => {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");
  const [endPoint, setEndPoints] = useState('');
  const onChangeHandler = (e) => {
    setEndPoints(e.target.value)
  }

        return (
  <>
  <Section1Container>
      <BackgroundImg></BackgroundImg>
      <Section1Content>
        <SloganContent>
          <SloganH1>Find Your Dream Home</SloganH1>
          <SloganP>
            Search for your dream home with peace of mind.
          </SloganP>
          <SearchBoxContainer>
            <LocationContainer>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                value={endPoint}
                onChange={onChangeHandler}
                />
            </LocationContainer>
            <PriceContainer>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-300k">200k-300k</option>
                <option value="300k-400k">300k-400k</option>
                <option value="400k-500k">400k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </PriceContainer>
            <SearchButton>
              <Link to="search">Search</Link>
            </SearchButton>
          </SearchBoxContainer>
        </SloganContent>
        <HeroImgContainer>
          <HeroImgOverlay>
          </HeroImgOverlay>
        </HeroImgContainer>
        </Section1Content>
    </Section1Container>
    </>
    )
}

export default Section1;
