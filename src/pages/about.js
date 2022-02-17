import React from 'react';
import '../styles/about.css';
import History from '../assets/history.jpg';

function about() {
    return (
        <div className="about">
            <div className="aboutbackground" style={{ backgroundImage: `url(${History})` }}></div>
            <div className="aboutwords">
                <h1> About Us </h1>
                <p>Pizza Hut Worldwide Story</p>
                <br />
                <p>
                    Just like any other successful enterprise, there’s always an interesting story to tell for each.
                    Pizza Hut - the largest and the most successful pizza restaurant chain in the world - certainly has
                    one of its own. <br />
                    <p>&nbsp;</p>
                    <p>
                        In short, in 1958, two college students from Wichita, Kansas, were approached by a family friend
                        about opening a pizza parlor in their neighborhood. Running a pizza business back then was still
                        relatively fresh in America, but the two brothers saw the potential and decided to give it a
                        try. So they borrowed US$600 from their mother as a start-up capital. They then rented a small
                        building located in a busy district and started selling pizzas. But little did they know Pizza
                        Hut would become a world-known brand for pizzas, pasta and many gourmet delights after half a
                        century later.
                    </p>
                    <br />
                    <p>
                        How the name Pizza Hut came about was nothing more than a coincidence. As the length of the
                        restaurant signboard was good for 9 characters only , and the two brothers wanted to use “Pizza”
                        in the name, so they decided to fill up the 3 letters room with “Hut” to tie in with the looks
                        of the building where their first “Pizza Hut” was established.
                    </p>
                    <br />
                    <p>
                        Pizza Hut, a subsidiary of Yum! Brands Inc., has more than 6,000 outlets across the United
                        States and over 5,600 outlets in 94 countries around the globe today.
                    </p>
                    <br />
                    <p>
                        For more information on Yum Brands, click on:
                        <a href="https://www.yum.com">
                            <span>https://www.yum.com</span>
                        </a>
                    </p>{' '}
                </p>
            </div>
        </div>
    );
}

export default about;
