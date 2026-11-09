// Client-approved copy for the two introductory pages.
export function homePage({ give, link, ripple }) {
  return {
    title: 'Four lives. Countless ripples.',
    body: `
      <section class="hero wrap client-hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="tiny-star" aria-hidden="true">✦</span> The Sawyer Project</p>
          <h1>Four lives.<br><em>Countless</em><br>ripples.</h1>
          <p class="hero-purpose">Turning loss into purpose.<br>Turning kindness into action.</p>
          <div class="hero-actions">${give('Support the Mission')}${link('story.html', 'Learn Our Story')}</div>
        </div>
        <div class="hero-art">
          <div class="emblem-orbit">
            <span class="orbit-label">MOVEMENT · COMMUNITY · CONNECTION</span>
            <img src="assets/memorial-emblem.jpeg" width="605" height="588" alt="The Sawyer Project memorial emblem featuring the four men honored by the project" fetchpriority="high">
            <span class="orbit-bottom">THEIR LEGACY. OUR NEXT CHAPTER.</span>
          </div>
          ${ripple}
        </div>
      </section>

      <section class="mission wrap home-introduction" aria-label="Our mission">
        <div class="home-introduction-lead">
          <p>The Sawyer Project was created in memory of four young men whose lives ended far too soon: <strong>Sawyer Fink, Riley Pfeiler, Dylan Ross, and Joey Rathbun.</strong></p>
          <p>Their lives continue to matter. Their stories continue to matter. And the impact they leave behind can continue through the lives we touch.</p>
        </div>
        <div class="mission-copy">
          <p>Our mission is to transform collective acts of kindness into meaningful opportunities to support men’s mental wellness, connection, movement, and community.</p>
          <p class="kindness-belief">We believe that sometimes the smallest act of kindness can create the biggest ripple.</p>
        </div>
      </section>

      <section class="program-preview wrap home-building" aria-labelledby="building-heading">
        <div class="section-heading">
          <h2 id="building-heading">What we are<br><em>building</em></h2>
          ${link('programs.html', 'Explore our programs')}
        </div>
        <div class="building-introduction">
          <p>Our goal is to create opportunities for men experiencing mental health challenges and financial barriers to feel supported, connected, and valued.</p>
          <p>We are beginning with four individual Legacy Wellness Sponsorships, each established in honor of one of the four young men. At approximately $485 per person, our initial fundraising goal is $2,000.</p>
        </div>
        <div class="program-panel client-program-panel">
          <div class="big-number">10<span>week wellness program</span></div>
          <div class="wellness-program-copy">
            <p>Through our partnership initiative with 222 Trained, our initial goal is to sponsor four men throughout the year to participate in a 10-week wellness program that includes:</p>
            <ul class="program-inclusions">
              <li>Five days per week of physical training.</li>
              <li>Nutritional coaching.</li>
              <li>Individualized progress monitoring.</li>
              <li>Accountability, encouragement, and community.</li>
            </ul>
          </div>
        </div>
        <p class="building-conclusion">Each sponsorship represents an opportunity for someone to invest in himself, build connections, and experience the benefits of being part of something supportive.</p>
      </section>

      <section class="campaign-band" aria-labelledby="ripple-heading">
        <div class="wrap campaign-layout">
          <div>
            <h2 id="ripple-heading">The $4<br><em>Ripple Effect</em></h2>
            <p class="campaign-subtitle">Four men. Four lives. Four dollars.</p>
            <p>We believe meaningful change doesn’t always begin with something big.</p>
            <p>Our $4 Ripple Effect invites individuals, families, and businesses to contribute in honor of Sawyer, Riley, Dylan, and Joey.</p>
            <p>Four dollars may seem small, but when people come together with a shared purpose, those contributions can create opportunities that reach far beyond the original gift.</p>
            ${give('Support the Mission', 'button cream')}
          </div>
          <div class="campaign-mark" aria-hidden="true">
            <span>THE RIPPLE EFFECT</span><strong><sup>$</sup>4</strong>${ripple}<p>Four lives. Countless ripples.</p>
          </div>
        </div>
      </section>

      <section class="support-preview wrap home-involvement" aria-labelledby="involvement-heading">
        <h2 id="involvement-heading">Be part of<br><em>the ripple</em></h2>
        <p>Whether you give, volunteer, share our mission, support a sponsorship, or simply reach out to someone who may need connection, you can be part of something meaningful.</p>
        <p class="closing-tagline">Four lives. Countless ripples.</p>
        <div class="closing-actions">
          ${link('story.html', 'Learn Our Story', 'button outline')}
          ${link('contact.html', 'Get Involved', 'button outline')}
          ${give('Support the Mission')}
        </div>
      </section>`
  };
}

export function storyPage({ ripple }) {
  return {
    title: 'Our Story',
    body: `
      <section class="page-intro wrap client-story-intro">
        <p class="eyebrow">Our Story</p>
        <h1>Four lives. Four families.<br><em>One shared purpose.</em></h1>
        <div class="story-opening editorial-copy">
          <p>The Sawyer Project began with the loss of four young men: <strong>Sawyer Kenneth Fink, Riley M. Pfeiler, Dylan Joseph Ross, and Joseph “Joey” Patrick Rathbun.</strong></p>
          <p>Four individuals. Four families. Four stories that deserve to be remembered for so much more than how they ended.</p>
          <p>Their lives touched people in different ways, and their absence left an impact that cannot be measured. But even in loss, there is an opportunity to create something meaningful.</p>
          <p>The Sawyer Project was born from the belief that the lives of those we’ve lost can continue to inspire connection, kindness, and opportunities for others.</p>
        </div>
      </section>

      <section class="story-layout wrap founder-story" aria-labelledby="heart-heading">
        <div class="story-image">
          <img src="assets/memorial-emblem.jpeg" width="605" height="588" alt="The Sawyer Project memorial emblem honoring the four young men" loading="lazy">
          ${ripple}
        </div>
        <div>
          <h2 id="heart-heading">The heart behind<br><em>the project</em></h2>
          <div class="editorial-copy">
            <p>As the founder, I have experienced the impact of suicide loss both personally and through my work and experiences in mental health care.</p>
            <p>Over time, I began to recognize how important access, connection, individualized support, and community can be when someone is struggling.</p>
            <p>I also recognized that wanting help and being able to access the right support are not always the same thing.</p>
            <p>I wanted to create something that could help bridge some of those gaps.</p>
            <p>Something that would bring people together, encourage men to invest in their well-being, and create opportunities for connection before someone reaches a breaking point.</p>
            <p>The Sawyer Project is not about defining these four young men by their deaths. It is about honoring their lives by creating opportunities for others.</p>
          </div>
        </div>
      </section>

      <section class="mission wrap story-wellness" aria-labelledby="wellness-heading">
        <h2 id="wellness-heading">Why men’s<br><em>mental wellness?</em></h2>
        <div class="editorial-copy">
          <p>Men deserve spaces where they feel comfortable showing up, building relationships, asking for support, and prioritizing their well-being.</p>
          <p>Mental wellness is about more than seeking help during a crisis. It is also about connection, belonging, movement, healthy routines, encouragement, and having people around you who notice when something isn’t right.</p>
          <p>We want to help create those opportunities.</p>
          <p>Through community partnerships, wellness sponsorships, charitable giving, and acts of kindness, we hope to make it easier for men to find connection and invest in themselves.</p>
        </div>
      </section>

      <section class="wrap story-legacies" aria-labelledby="legacies-heading">
        <div class="story-legacies-heading">
          <h2 id="legacies-heading">Four legacies.<br><em>Countless ripple effects.</em></h2>
          ${ripple}
        </div>
        <div class="editorial-copy">
          <p>The Sawyer Project begins with four individual legacies, each represented through an annual wellness sponsorship.</p>
          <p>As the project grows, we hope to welcome additional families who have experienced suicide loss and want to honor their loved ones by creating similar opportunities for others.</p>
          <p>Our founding four will always remain at the heart of this mission.</p>
          <p>We cannot change the past, but we can influence what happens next.</p>
          <p>We can create opportunities. We can build connections. We can show up for one another.</p>
          <p>And we can turn small acts of kindness into something much bigger.</p>
        </div>
      </section>

      <section class="quote-section wrap story-final-tagline" aria-label="Our guiding message">
        ${ripple}
        <p class="closing-tagline">Four lives. Countless ripples.</p>
      </section>`
  };
}
