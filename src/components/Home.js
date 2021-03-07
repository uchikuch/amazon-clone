import React from "react";
import "../assets/styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="32138094"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={15000}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={70000}
            rating={4}
            image="https://brain-images-ssl.cdn.dixons.com/5/8/10191185/l_10191185_001.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Apple Watch Series 5 (GPS, 40mm) - Gold Aluminum Case with Pink Sport Band"
            price={250000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71jOvjATfPL._AC_SX425_.jpg"
          />
          <Product
            id="49538094"
            title="Xbox One S 1TB Console"
            price={270000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71XHuIVqJbL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Manchester United FC Crest Keyring Keychain - Official, Licensed Product - Great Man Utd Souvenir"
            price={1500}
            rating={4}
            image="https://m.media-amazon.com/images/I/71pAOiezubL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4338094"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={50000}
            rating={3}
            image="https://www.laptopdirect.co.za/phpThumb/phpThumb.php?src=b64_aHR0cDovL3d3dy5jb214LmNvLnphL2kvc2Ftc3VuZy9sYzQ5cmc5MHNzdXhlbl8xLmpwZyZ3PTQwMCZoPTQwMA=="
          />
        </div>
        <div className="home__row">
          <Product
            id="4338094"
            title="Vibrant Holy Family Gold Filigree 8 x 4 Inch Decorative Hanging Wall Figurine"
            price={12000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81LNcIcesDL._AC_SY879_.jpg"
          />
          <Product
            id="4338094"
            title="Apple iMac (27-inch, 8GB RAM, 1TB Storage)"
            price={80000}
            rating={5}
            image="https://m.media-amazon.com/images/I/810RI8O1jJL._AC_UY218_.jpg"
          />
          <Product
            id="4338094"
            title="Playerunknown's Battlegrounds - Full Product Release - Xbox One"
            price={19000}
            rating={4}
            image="https://m.media-amazon.com/images/I/71F+DzOrSfL._AC_UL320_.jpg"
          />
          <Product
            id="4338094"
            title="Apple AirPods Pro"
            price={80000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71eGsUPZm2L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
