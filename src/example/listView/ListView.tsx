import React from 'react';
import { List, ListItem, ListStyle } from './styles';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import Article from './types';

const getArticles = async ({ pageParam = 0 }) => {
  const res = await fetch(`https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`);
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

function ListView() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false;
      }

      return lastPage.prevOffset + 10;
    },
  });
  const articles: Article[] = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);
  console.log(articles);

  return (
    <div>
      <h2>List View Example</h2>

      <ListStyle>
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
      </ListStyle>
    </div>
  );
}

export default ListView;
