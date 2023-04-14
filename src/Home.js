import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './data.json';
import headerImage from './Images/headerImage.png'
import './Styles/HomePage.css'
import background from './Images/Background.png'

function Home({ selectedCategory }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const category = data.data.find((c) => c.id === selectedCategory.id);

  return (
    <div>
      {category && category.slider && category.slider.length > 0 ? (
        <Slider className='homeContainer' {...settings}>
          {category.slider.map((slide) => (
            <div>
              <div className={ `container categoryBackground-${slide.id}`} key={slide.id} style={{ backgroundImage: `url(${require('./Images/'+slide.backgroundImage)})` }}>
                {/* <img className={`backgroundImage backgroundImage-${category.slider.id}`} src={require('./Images/'+slide.backgroundImage)} alt={slide.heading} /> */}
                <img className='headerImage' src={headerImage} alt="Start Screen" />
                <h3 className='header'>{slide.heading}</h3>
                <p className='paragraph'>{slide.subHeading}</p>
                <button className={ `bookingButton bookingButton-${slide.id}`} >Book Now</button>
              </div>
            </div>
            
          ))}
        </Slider>
      ) : (
        <p>No slides found.</p>
      )}
    </div>
  );
}

export default Home;
