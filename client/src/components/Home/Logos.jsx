import logo1 from '../../assets/Logo1.png';
import logo2 from '../../assets/Logo2.png';
import logo3 from '../../assets/Logo3.png';
import logo4 from '../../assets/Logo4.png';
import logo7 from '../../assets/Logo7.jpg';
import logo8 from '../../assets/Logo8.jpg';
import Marquee from 'react-fast-marquee';



const logos = [
  { alt: "", src: logo1 },
  { alt: "", src: logo2 },
  { alt: "", src: logo3 },
  { alt: "", src: logo4 },
  { alt: "", src: logo7 },
  { alt: "", src: logo8 },
];

const Logos = () => {

  
  return (
    <section className="pt-6 pb-6 px-4 mt-2 bg-black">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6">
        <Marquee speed={50} pauseOnHover={true}>
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 mx-6" 
            />
          ))}
        </Marquee>
      </div>
      </div>
  </section>
  )
}

export default Logos