import React, { ChangeEvent, useRef, useState, useCallback } from 'react';
import { Item, List, ListItem, ListStyle, Loader } from './styles';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import Article from './types';
import useArticleSearch from './hooks/useBookSearch';
import styled from 'styled-components';

const getArticles = async ({ pageParam = 0 }) => {
  const res = await fetch(`https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`);
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

function ListView() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { hasMore, loading, error, books } = useArticleSearch(query, pageNumber);
  // const observer = useRef(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastBookElementRef = useCallback<React.RefCallback<HTMLLIElement>>(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        // Handle intersection entries
        entries.forEach((entry) => {
          // Your logic here based on entry.isIntersecting, entry.target, etc.
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prev) => prev + 1);
          }
        });
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );
  // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ['articles'],
  //   queryFn: getArticles,
  //   getNextPageParam: (lastPage) => {
  //     if (lastPage.prevOffset + 10 > lastPage.articleCount) {
  //       return false;
  //     }

  //     return lastPage.prevOffset + 10;
  //   },
  // });
  // const articles: Article[] = data?.pages.reduce((acc, page) => {
  //   return [...acc, ...page.articles];
  // }, []);
  // console.log(articles);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div>
      <h2>List View Example</h2>
      <div>
        <label htmlFor='searchKeyword'>Search Books</label>
        <input id='searchKeyword' type='text' value={query} onChange={handleSearch} />
      </div>

      <ListStyle>
        <List>
          {books.map((book, index) => (
            <ListItem key={book} ref={index === books.length - 1 ? lastBookElementRef : undefined}>
              <h5>{book}</h5>
            </ListItem>
          ))}
        </List>
        {loading && <Loader>Loading...</Loader>}

        {error && <div>Error</div>}
      </ListStyle>
      {/* <ListStyle>
        <InfiniteScroll
          next={fetchNextPage}
          hasMore={hasNextPage || false}
          loader={<p>Loading...</p>}
          dataLength={articles ? articles.length : 0}
        >
          <List>
            {articles?.map((article, index) => (
              <ListItem key={index}>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </ListItem>
            ))}
          </List>
        </InfiniteScroll>
      </ListStyle> */}
    </div>
  );
}

export default ListView;
