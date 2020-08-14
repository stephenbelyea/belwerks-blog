import React from "react";
import { LINKS } from "../constants";

function Bio(props) {
  return (
    <div className="bio">
      <h2>I'm Stephen Belyea</h2>
      <p>
        I am a front end developer with a heavy focus on accessibility,
        performance, and user interaction for any device or screen size. I like
        crafting experiences that anyone can use and I'll put in the effort to
        make sure they're able to do so easily.
      </p>
      <p>
        A developer since 2012, I started in a LAMP stack, with a primary focus
        on WordPress. After some time in .NET, AngularJS, and early experience
        with TypeScript, I've settled into a modern JavaScript framework world.
        Most of my time has been in React, with projects in Angular and Vue to
        round out the framework trio. Jumping into new tech is a great way to
        learn and discover all the best and less-best parts of everything.
      </p>
      <p>
        Feel free to reach out on{" "}
        <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn<span className="visually-hidden"> opens in new tab</span>
        </a>{" "}
        if you’re in Kitchener and want to grab some coffee. Thanks for stopping
        by!
      </p>
      <h2>Werds and werks</h2>
      <p>
        Explore my writing, prototyping, tinkering, and assorted thoughts I've
        jumbled together.
      </p>
    </div>
  );
}

export default Bio;
