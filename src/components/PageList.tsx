import styled from "styled-components";
import { PageProps } from '../type/type';

type StProps = {
  isFocus: boolean;
}

export default function PageList({focusNum, maxPage, handleClick}: PageProps) {
  const pageArray = [];
  for (let i = 1; i <= maxPage; i++){
    pageArray.push(
      <Page
        key={i}
        isFocus={focusNum == i ? true : false}
        onClick={(e) => handleClick(i, e)}
      >{i}
      </Page>);
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
}

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<StProps>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
  color: ${props=>(props.isFocus ? 'white' : 'black')};
  background-color: ${props=>(props.isFocus ? 'gray' : 'white')};
`;