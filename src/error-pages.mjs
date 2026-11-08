import { ripple } from './content.mjs';

const errorPage = (status, title, heading, description) => ({
  title,
  status,
  body: `<section class="error-page wrap" aria-labelledby="error-heading">
    <div class="error-art" aria-hidden="true"><span>${status}</span>${ripple}</div>
    <div class="error-copy">
      <p class="eyebrow">${status === 404 ? 'Page not found' : 'Something went wrong'}</p>
      <h1 id="error-heading">${heading}</h1>
      <p>${description}</p>
      <div class="error-actions"><a class="button" href="/">Return Home <span aria-hidden="true">↗</span></a><a class="button outline" href="/story.html">Our Story <span aria-hidden="true">↗</span></a></div>
      <p class="error-support">Looking for support? <a class="text-link" href="/resources.html">Find mental health resources <span aria-hidden="true">↗</span></a></p>
    </div>
  </section>`
});

export const errorPages = {
  '404.html': errorPage(404, 'Page Not Found', 'We couldn’t find<br><em>that page.</em>', 'The link may be out of date, or the address may have been entered incorrectly. You can return Home or learn more about The Sawyer Project.'),
  '500.html': errorPage(500, 'Something Went Wrong', 'Something<br><em>went wrong.</em>', 'We couldn’t complete your request. Please try again in a little while, or use the links below to find your way back.')
};
