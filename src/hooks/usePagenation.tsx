import React, { useEffect, useState } from 'react';
import { callApi } from '../api/api';
import { getList } from '../redux/commentSlice';
import { useAppDispatch } from '../redux/hooks';

export default function usePagenation() {
  //FIXME : maxPage가 갱신 안됨!! 

  const [maxPage, setMaxPage] = useState(0);
  const dispatch = useAppDispatch();
  
  const handleClick = (page: number) => dispatch(getList(page));

  useEffect(() => {
    callApi.getList().then((res) => setMaxPage(Math.ceil(res.data.length / 4)));
  }, []);

  return { maxPage, handleClick }
}

