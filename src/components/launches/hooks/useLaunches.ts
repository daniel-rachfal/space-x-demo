import { Launch, getLaunchesPaginated } from "@/services/spacexapi";
import { useState, useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
};

export default function useLaunches() {
    const [page, setPage] = useState(1);
    const [launches, setLaunches] = useState<Launch[]>([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [scrollTrigger, isInView] = useInView();
    const previousIsInView = usePrevious(isInView);
  
    const fetchLaunches = useCallback(async () => {
      const newLaunches = await getLaunchesPaginated(page);
  
      if (newLaunches.length === 0) {
        setHasMoreData(false);
        return;
      }
  
      setLaunches((launches) => [...launches, ...newLaunches]);
      setPage((page) => page + 1);
    }, [page]);
  
    useEffect(() => {
      if (isInView && hasMoreData && previousIsInView !== isInView) {
        fetchLaunches();
      }
    }, [isInView, hasMoreData, page, fetchLaunches, previousIsInView]);

    return { launches, scrollTrigger, hasMoreData };
}