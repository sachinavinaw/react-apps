import { useInfiniteQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import Article from './types';
import { Label, ListStyle } from './styles';
import ListView from '../../common/ListView/ListView';

const getArticles = async ({ pageParam = 0 }) => {
  const res = await fetch(`https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`);
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

function InfiniteScrollableListView() {
  const [query, setQuery] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false;
      }

      return lastPage.prevOffset + 10;
    },
    enabled: query !== '',
  });

  const articles: Article[] = data?.pages.reduce((acc, page) => {
    return [...new Set([...acc, ...page.articles])];
  }, []);

  const renderList = () => {
    return articles?.map((article, index) => <div key={article.title}>{article.title}</div>);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h2>List View Example</h2>
      <div>
        <Label htmlFor='searchKeyword'>Search Books</Label>
        <input id='searchKeyword' type='text' value={query} onChange={handleSearch} />
      </div>
      <br />
      <ListStyle>
        <ListView
          hasMore={hasNextPage || false}
          loading={isFetchingNextPage}
          fetchNext={() => fetchNextPage()}
          content={renderList()}
          dataLength={articles?.length || 0}
        />
      </ListStyle>
    </>
  );
}

export default InfiniteScrollableListView;
