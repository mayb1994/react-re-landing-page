import { Link } from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { Section1Container, BackgroundImg, Section1Content, SloganContent, SloganH1, SloganP, SearchBoxContainer, LocationContainer, PriceContainer, SearchButton, HeroImgContainer, HeroImgOverlay } from './Section1Elements';


const Section1 = () => {
  const [minPrice, setMinPrice] = useState({});
  const [maxPrice, setMaxPrice] = useState({});
  const [location, setLocation] = useState('');
  const [container, setContainer] = useState([]);

  const priceSelect = [
  {
    label: '<100k',
    value: {
      minPrice: null,
      maxPrice: '100000'
    }
  },
  {
    label: '100k-200k',
    value: {
      minPrice: '100000',
      maxPrice: '200000'
    }
  },
  {
    label: '200k-300k',
    value: {
      minPrice: '200000',
      maxPrice: '300000'
    }
  },
  {
    label: '300k-400k',
    value: {
      minPrice: '300000',
      maxPrice: '400000'
    }
  },
  {
    label: '400k-500k',
    value: {
      minPrice: '400000',
      maxPrice: '500000'
    }
  },
  {
    label: '>500k',
    value: {
      minPrice: '500000',
      maxPrice: null
    }
  }
]

useEffect(() => {
  searchListings();
}, [])

  const searchListings = () => {
    const options = {
      method: 'GET',
      url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
      params: {
        location: {location}, 
        minPrice: {minPrice},
        maxPrice: {maxPrice},
        home_type: 'Houses'
        },
      // headers: {
      //   'X-RapidAPI-Key': '1bcf75f2c3mshf7d8a3088518637p159b29jsn5ed88c303194',
      //   'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
      //   }
    };
    
    axios.request(options)
    .then(function (response) {
      return response.json();
    })
    .then(data => {
        setContainer(data.props)
    })
    
    .catch(function (error) {
      console.error(error);
    });
    }
    
  const priceChangeHandler = (event) => {
    setMinPrice(event.value.minPrice);
    setMaxPrice(event.value.maxPrice);
  }

  const locationChangeHandler = (e) => {
    setLocation(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
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
                value={location}
                onChange={locationChangeHandler}
                />
            </LocationContainer>
            <PriceContainer>
              <span>Price Range</span>
              <Select
                options={priceSelect}
                onChange={priceChangeHandler}
                />
            </PriceContainer>
            <SearchButton>
              <Link to onSubmit={submitHandler}>Search</Link>
            </SearchButton>
            {container.map((item) => {
              return (
                <div>
                <img src={item.imgSrc} alt="" />
                <p>{item.address}</p>
                </div>
              )
            })}
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
