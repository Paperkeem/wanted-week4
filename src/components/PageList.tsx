import styled from "styled-components";
import usePagenation from '../hooks/usePagenation';
import { getList } from '../redux/commentSlice';
import { useAppDispatch } from '../redux/hooks';

export default function PageList() {
  const { maxPage } = usePagenation();
  const dispatch = useAppDispatch();
  
  const pageArray = [];
  for (let i = 1; i <= maxPage; i++){
    pageArray.push(<Page key="i" onClick={() => handleClick(i)}>{i}</Page>);
  }

  const handleClick = (page: number) => dispatch(getList(page));
  
  return <PageListStyle>{pageArray}</PageListStyle>;
}

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
  
  /* FIXME */
  &:active{
    background: gray;
    color: #fff;
  }
`;