import React from "react";
import styled from "styled-components";

export default function PageList() {
  const pageArray = [];

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <Page key="1">1</Page>
  );

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