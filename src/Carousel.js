import { useEffect, useState } from 'react';
import './Carousel.css';
import logo1 from './images/partner-logo-1.webp';
import logo2 from './images/partner-logo-2.webp';
import logo3 from './images/partner-logo-3.webp';
import logo4 from './images/partner-logo-4.webp';
import logo5 from './images/partner-logo-5.webp';
import logo6 from './images/partner-logo-6.webp';

const Carousel = () => {

    const [frame, setFrame] = useState(0);

    useEffect(() => {

        //loop frame change
        const intervalId = setInterval(() => {
            setFrame(frame === 0 ? 1 : 0)
        }, 4500)

        return () => clearInterval(intervalId);
    }, [frame])

    const logos = [
        [   //first frame
            { url: logo1, title: 'St. Olaf College Logo', website: 'https://wp.stolaf.edu/'},
            { url: logo2, title: 'Universitat Konstanz Logo', website: 'https://www.uni-konstanz.de/en/'},
            { url: logo3, title: 'Kutztown University Logo', website: 'https://www.kutztown.edu/'}
        ],
        [   //second frame
            { url: logo4, title: 'University of Bamberg Logo', website: 'https://www.uni-bamberg.de/'},
            { url: logo5, title: 'Markus Rosskopf Logo', website: 'https://de.linkedin.com/in/markusrosskopf'},
            { url: logo6, title: 'DAAD Logo', website: 'https://www.daad.de/en/'}
        ]
    ];

    //change frame on click
    const toggleFrame = e => {
        if (e.target.classList.contains('dot-1')) {
            setFrame(0);
        } else if (e.target.classList.contains('dot-2')) {
            setFrame(1);
        }
    };

    return ( 
        <div id="carousel">
            <h2>Summer School Partners</h2>
            {frame === 0 && <div className="logo-frame">
                {logos[0].map(logo => (
                    <div className="logo" key={logo.title}>
                        <a href={logo.website} target="_blank" rel="noreferrer">
                            <img src={logo.url} alt=""/>
                        </a>
                    </div>
                ))}
            </div>}
            {frame === 1 && <div className="logo-frame">
                {logos[1].map(logo => (
                    <div className="logo" key={logo.title}>
                        <a href={logo.website} target="_blank" rel="noreferrer">
                            <img src={logo.url} alt=""/>
                        </a>
                    </div>
                ))}
            </div>}
            <div className='indicators'>
                <div className={frame === 0 ? "dot dot-1 active" : "dot dot-1"} onClick={toggleFrame}></div>
                <div className={frame === 1 ? "dot dot-2 active" : "dot dot-2"} onClick={toggleFrame}></div>
            </div>
        </div>
     );
}
 
export default Carousel;