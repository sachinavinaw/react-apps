import axios from 'axios';
import { useEffect, useState } from 'react';
import { Books } from '../types';

function useArticleSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState(['']);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks(['']);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    // Create a cancel token source
    const cancelTokenSource = axios.CancelToken.source();
    axios({
      method: 'get',
      url: `http://openlibrary.org/search.json`,
      params: { q: query, page: pageNumber },
      cancelToken: cancelTokenSource.token,
    })
      .then((res) => {
        console.log(res.data);
        setBooks((prevBooks) => {
          return [...new Set([...prevBooks, ...(res.data?.docs.map((b: { title?: string }) => b?.title || '') || [])])];
        });

        setHasMore(res.data?.docs.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
      });
    return () => cancelTokenSource.cancel();
  }, [query, pageNumber]);
  return { hasMore, loading, error, books };
}

export default useArticleSearch;
