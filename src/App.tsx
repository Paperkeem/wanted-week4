import React from 'react';
import CommentList from './components/CommentList';
import Form from './components/Form';
import PageList from './components/PageList';
import useForm from './hooks/useForm';
import usePagenation from './hooks/usePagenation';

function App() {
  const form = useForm();
  const page = usePagenation();

  return (
    <>
      <CommentList {...form} {...page} />
      <PageList {...page} />
      <Form {...form} {...page}/>
    </>
  );
}

export default App;