import React, { Children, ReactNode, useCallback, useRef } from 'react';
import { List, ListItem, Loader } from './styles';

type ListViewProps = {
  loading: boolean;
  content: ReactNode;
  hasMore: boolean;
  dataLength: number;
  fetchNext: () => void;
};

function ListView({ content, loading, hasMore, fetchNext, dataLength }: ListViewProps) {
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
            fetchNext();
          }
        });
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <List>
      {Children.map(content, (child, index) => (
        <ListItem key={index} ref={index === dataLength - 1 ? lastBookElementRef : undefined}>
          {child}
        </ListItem>
      ))}
      {loading && <Loader>Loading...</Loader>}
    </List>
  );
}

export default ListView;
