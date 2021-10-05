import { Fragment } from 'react';

// our-domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href="/news/nextjs-is-a-great-framework">
            NextJS Is a Great Framework
          </a>
        </li>
        <li>
          <a href="/news/something-else">
            Something Else
          </a>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;