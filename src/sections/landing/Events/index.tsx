'use client';
import { useEffect, useMemo, useState } from 'react';
import Typography from '@/components/Typography';
import styles from './style.module.scss';
import EventCard from '@/components/EventCard';
import events from './events';

const MOBILE_BREAKPOINT = 768;

const getPageSize = (width: number) => (width < MOBILE_BREAKPOINT ? 1 : 3);

export default function Events() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    const updatePageSize = () => setPageSize(getPageSize(window.innerWidth));

    updatePageSize();
    window.addEventListener('resize', updatePageSize);

    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(events.length / pageSize));

  const visibleEvents = useMemo(() => {
    const start = page * pageSize;
    return events.slice(start, start + pageSize);
  }, [page, pageSize]);

  useEffect(() => {
    setPage((current) => Math.min(current, totalPages - 1));
  }, [totalPages]);

  const goToPrevious = () => {
    setPage((current) => (current - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setPage((current) => (current + 1) % totalPages);
  };

  return (
    <section id="events">
      <div className={styles.container}>
        <div className={styles.description}>
          <Typography variant="display/medium">Our Events</Typography>
          <Typography variant="subheading">
            Open to everyone to join!! Cannot attend but still interested? Contact us!
          </Typography>
        </div>

        <div className={styles.wrapper}>
          <div
            className={styles.eventGrid}
            style={{ gridTemplateColumns: `repeat(${pageSize}, minmax(0, 1fr))` }}
          >
            {visibleEvents.map((item, index) => (
              <EventCard key={`${item.event.title}-${index}`} eventImages={item.images} event={item.event} />
            ))}
          </div>
        </div>

        <div className={styles.toolbar}>
          <button type="button" className={styles.pageButton} onClick={goToPrevious} aria-label="Previous events">
            Previous
          </button>
          <Typography variant="label" className={styles.pageIndicator}>
            {page + 1} / {totalPages}
          </Typography>
          <button type="button" className={styles.pageButton} onClick={goToNext} aria-label="Next events">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
