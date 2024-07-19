'use client'
import Image from "next/image";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const formats = [
    'png', 'jpg', 'jpeg', 'tif', 'gif',
    'mp4', 'mov', 'avi', 'webm', 'flv', 'f4v', 'ogv',
    'mp3',
    'xls', 'xlsx', 'docx', 'pdf',
    'html', 'htm'
];

export default function Doc() {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
    if (input) {
        const filteredFormats = formats.filter(format => format.includes(input.toLowerCase()));
        setSuggestions(filteredFormats);
    } else {
        setSuggestions([]);
    }
    }, [input]);

    const handleSearch = () => {
    if (formats.includes(input.toLowerCase())) {
        window.location.href = '#supported-formats';
    } else {
        alert('Format not supported');
    }
    };

    return (
        <body id='doc'>
            <header>
                <a
                href="/"
                rel="noopener noreferrer">
                    <Image
                    src="/logosimple.svg"
                    alt="Filechemy Logo"
                    width={70}
                    height={70}
                    priority
                    />
                </a>
                <h1>FileChemy documentation</h1>
                
                <p className="tagline">The perfect transmuter library for your file conversion needs</p>
                </header>

                <div className="search-container">
                <Image src="/magnifier.svg" alt="mail to button" width={30} height={30} priority/>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search for formats..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                {suggestions.length > 0 && (
                    <ul id="suggestions" className="suggestions">
                    {suggestions.map((format, index) => (
                        <li
                        key={index}
                        onClick={() => {
                            setInput(format);
                            setSuggestions([]);
                            window.location.href = '#supported-formats';
                        }}
                        >
                        {format}
                        </li>
                    ))}
                    </ul>
                )}
                </div>

                <nav className="docNavigation">
                <a href="#prerequisites">Prerequisites</a>
                <a href="#installation">Installation</a>
                <a href="#usage">Example Usage</a>
                <a href="#about">About The Project</a>
                <a href="#supported-formats">Supported Formats</a>
                <a href="#conversion-details">Conversion Details</a>
                <a href="#demo">Demo</a>
                <a href="#contributing">Contributing</a>
                <a href="#license">License</a>
                <a href="#contact">Contact</a>
                </nav>

                <section id="prerequisites">
                <h2>Prerequisites</h2>
                <p>Ensure you have <code>npm</code> installed:</p>
                <pre><code>npm install npm@latest -g</code></pre>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="installation">
                <h2>Installation</h2>
                <pre><code>npm i filechemy</code></pre>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="usage">
                <h2>Example Usage</h2>
                <pre><code>{`const fileTransmuter = require('filechemy');

            (async ()=>{
            const result = await fileTransmuter.transmuteUrl('url.png', 'jpeg');
            console.log(result);
            })()`}</code></pre>
                <p>You will find the output file in a <code>transmutedFiles</code> folder.</p>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="about">
                <h2>About The Project</h2>
                <p>This Node.js library provides file conversion features for various formats. It supports the following file types as input:</p>
                <ul>
                    <li>Images: PNG, JPG, JPEG, TIF, GIF</li>
                    <li>Videos: MP4, MOV, AVI, WEBM, FLV, F4V, OGV</li>
                    <li>Audio: MP3</li>
                    <li>Documents: XLS, XLSX, DOCX, PDF</li>
                    <li>Others: HTML, HTM</li>
                </ul>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="supported-formats">
                <h2>Supported Output Formats</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Input Format</th>
                        <th>Possible Output Formats</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><strong><a href="#image">Images</a></strong></td>
                        <td>txt, jpeg, jpg, png, gif, tif</td>
                    </tr>
                    <tr>
                        <td><strong><a href="#videos">Videos</a></strong></td>
                        <td>mp3, mov, avi, webm, flv, f4v, webp, mp4, ogv, gif</td>
                    </tr>
                    <tr>
                        <td><strong><a href="#audio">Audio</a></strong></td>
                        <td>mp3</td>
                    </tr>
                    <tr>
                        <td><strong><a href="#doc">Documents</a></strong></td>
                        <td>csv, txt, json (XLS, XLSX), txt (DOCX), txt (PDF)</td>
                    </tr>
                    <tr>
                        <td><strong><a href="#webpage">Web Pages</a></strong></td>
                        <td>txt (HTML, HTM)</td>
                    </tr>
                    </tbody>
                </table>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="conversion-details">
                <h2>Conversion Details</h2>
                <h3 id="image">Images</h3>
                <p>Convert images to various formats. Supported output formats include <code>txt</code>, <code>jpeg</code>, <code>jpg</code>, <code>png</code>, <code>gif</code>, et <code>tif</code>. Examples:</p>
                <pre><code>{`const result = await fileTransmuter.transmuteUrl('url.png', 'jpeg');`}</code></pre>
                <pre><code>{`const result = await fileTransmuter.transmutePath('path.png', 'jpeg');`}</code></pre>

                <h3 id="videos">Videos</h3>
                <p>Convert videos to formats like <code>mp3</code>, <code>mov</code>, <code>avi</code>, <code>webm</code>, <code>flv</code>, <code>f4v</code>, <code>webp</code>, <code>mp4</code>, <code>ogv</code>, et <code>gif</code>. Examples:</p>
                <pre><code>{`const result = await fileTransmuter.transmutePath('path.mp4', ['gif', startTime, duration, reduceQuality]);`}</code></pre>

                <h3 id="audio">Audio</h3>
                <p>Convert audio files to <code>mp3</code>. Example:</p>
                <pre><code>{`const result = await fileTransmuter.transmutePath('path.wav', 'mp3');`}</code></pre>

                <h3 id="doc">Documents</h3>
                <p>Convert documents to various formats. Examples:</p>
                <ul>
                    <li>Excel (XLS, XLSX) to <code>csv</code>, <code>txt</code>, ou <code>json</code>:</li>
                    <pre><code>{`const result = await fileTransmuter.transmutePath('path.xlsx', 'csv');`}</code></pre>
                    <li>Word (DOCX) to <code>txt</code>:</li>
                    <pre><code>{`const result = await fileTransmuter.transmutePath('path.docx', 'txt');`}</code></pre>
                    <li>PDF to <code>txt</code>:</li>
                    <pre><code>{`const result = await fileTransmuter.transmutePath('path.pdf', 'txt');`}</code></pre>
                </ul>

                <h3 id="webpage">Web Pages</h3>
                <p>Convert HTML or HTM files to <code>txt</code>. Example:</p>
                <pre><code>{`const result = await fileTransmuter.transmutePath('path.html', 'txt');`}</code></pre>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="demo">
                <h2>Demo</h2>
                <p>Try out the library with this simple demo:</p>
                <pre><code>{`const fileTransmuter = require('file-transmuter');

            (async ()=>{
            const result = await fileTransmuter.transmuteUrl('url.png', 'jpeg');
            console.log(result);
            })()`}</code></pre>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="contributing">
                <h2>Contributing</h2>
                <p>Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.</p>
                <p>You can contribute <a className='classicLink' href=''>here</a></p>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="license">
                <h2>License</h2>
                <p>This project is licensed under the <a className='classicLink' href='https://opensource.org/license/mit'>MIT License.</a></p>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <section id="contact">
                <h2>Contact</h2>
                <p>If you have any questions or suggestions, feel free to <a className='classicLink' href="mailto:filechemy@gmail.com">contact us</a>.</p>
                <div className="back-to-top"><a href="#top">Back to top</a></div>
                </section>

                <footer>
                    <div className="footerWrapper">
                        <div className="footerContent" id="footerNav">
                        <h3>Useful links</h3>
                        <nav>
                            <a className="footerLink">documentation</a>
                            <a className="footerLink" href="https://github.com/Ericar974/PFE-librairie">cooperate on github</a>
                            <a className="footerLink" href="https://www.npmjs.com/package/filechemy">find us on npm</a>
                        </nav>
                        </div>  
                        <div className="footerContent" id="footerTeam">
                            <h3>Meet the team</h3> 
                            <nav>
                                <a href="https://github.com/Ericar974" className="githubLink">
                                <Image 
                                className="profilePic"
                                src="https://avatars.githubusercontent.com/u/70965684?v=4"
                                alt="@Ericar974 profile picture"
                                width={60}
                                height={60}
                                />
                                <div className="usernameWrapper">
                                <h4>Armand Dorard</h4>
                                <p>@Ericar974</p>
                                </div>
                            </a>
                            <a href="https://github.com/TomGOURDY" className="githubLink">
                                <Image 
                                className="profilePic"
                                src="https://avatars.githubusercontent.com/u/70762181?v=4"
                                alt="@TomGOURDY profile picture"
                                width={60}
                                height={60}
                                />
                                <div className="usernameWrapper">
                                <h4>Tom Gourdy</h4>
                                <p>@TomGOURDY</p>
                                </div>
                            </a>
                            </nav>
                        </div>  
                    </div>
                    <p>&copy; 2024 FileChemy. All rights reserved. <Image
              src="/logosimple.svg"
              alt="Filechemy Logo"
              width={16}
              height={16}
              priority
            /></p>
                </footer>
        </body>
    )};