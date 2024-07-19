import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <body>
      <header>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/logosimple.svg"
              alt="Filechemy Logo"
              width={70}
              height={70}
              priority
            />
          </a>
        <nav>
          <a className="navLink" href="/documentation">documentation</a>
        </nav>
      </header>
      <main>
        <section className="section" id="presentSection">
          <Image
              src="/logofull.svg"
              alt="Filechemy Logo"
              width={150}
              height={150}
              priority
            />
          <h1>FileChemy</h1>
          <p>Convert anything, anywhere, anytime</p>
          <a className="buttonClassic" href="/documentation">Learn to use</a>
        </section>
        <section className="section section-gray" id="useSection">
          <h2>Use</h2>
          <p>FileChemy is  a all-in-one and easy to include solution for managing your files and convert them to fit your needs.<br/>
          <br/>Easy to install, use npm to download the package : </p>
          <pre><code>npm i filechemy</code></pre>
        </section>
        <section className="section" id="discoverSection">
          <h2>Discover</h2> 
          <p>Convert everything ! Here’s a quick demo of the power that lies in FileChemy</p>
          <iframe 
            className="iframeContent" 
            id="discoverVideo" 
            title="FileChemy Presentation Video" 
            src="https://www.youtube.com/embed/4H5hfqucDRk?si=oN4_4nJ5qcZTOtzc" >
          </iframe>
          <p>We wanted to share an universal converter, open-source and easy to use for developpers and beginners alike</p>
        </section>
        <section className="section section-gray" id="experimentSection">
          <h2>Experiment</h2>
          <p>Try and experiment with FileChemy using this code sandbox, to learn to customize it to your needs !</p>
          <iframe 
            className="iframeContent" 
            id="experimentBox" 
            title="FileChemy Testing SandBox" 
            src="https://codesandbox.io/p/devbox/convert-any-exemple-8tf39d?embed=1&file=%2Fmain.js&showConsole=true">
          </iframe>
        </section>
        <section className="section" id="cooperateSection">
          <h2>Cooperate</h2>
          <p>We are a small team of developers trying to shake things up in the file converters world and making it usable free of charge for everyone</p>
          <a className="buttonClassic buttonViolet" href="https://github.com/Ericar974/PFE-librairie">
            <Image
              src="/github.svg"
              alt="join on github button"
              width={30}
              height={30}
              priority/>
            <p>join & participate on GitHub</p>
          </a>
          <p>You can also give us feedback and other ideas by mail :</p>
          <a className="buttonClassic" href="mailto:filechemy@gmail.com">
            <Image
              src="/mail.svg"
              alt="mail to button"
              width={30}
              height={30}
              priority/>
            <p>contact us !</p>
          </a>
        </section>
      </main>
      <footer>
        <div className="footerWrapper">
            <div className="footerContent" id="footerNav">
              <h3>Useful links</h3>
              <nav>
                  <a className="footerLink" href="/documentation">documentation</a>
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
  );
}
