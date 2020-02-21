import {useRouter} from 'next/router';
import useSWR from 'swr';
import Layout from '../components/MyLayout';

/** consumimos datos desde nuestra api/randomQuote */
function fetcher(url) {
  return fetch(url).then(res => res.json());
}

export default function Api() {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/randomQuote${query.author ? '?author=' + query.author : ''}` ,fetcher);

  const author = data && data.author; // data?.author
  let quote = data && data.quote; // data?.quote

  if(!data) quote = 'Loading...';
  if(error) quote = 'Failed to fetch the quote';

  return (
    <Layout>
      <main>
        <div className="quote">
          {quote}
        </div>
        {author && <i>- {author}</i>}
      </main>

      <style jsx>{`
        main {
          margin-top: 1rem;
          padding: 1rem;
          border: 2px solid green;
        }
      `}</style>
    </Layout>
  )
} 