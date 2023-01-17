import React, { useEffect, useState } from 'react';
import { callApi } from '../api/api';

export default function usePagenation() {
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    callApi.getList().then(res => setMaxPage(Math.ceil(res.data.length / 4)));
  }, [])

  return { maxPage }
}

