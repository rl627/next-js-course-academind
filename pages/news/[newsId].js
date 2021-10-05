import { useRouter } from 'next/router';

// our-domain.com/[newsId]

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

  // send a request to a backend API to fetch news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
