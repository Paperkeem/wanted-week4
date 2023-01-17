import React from 'react';
import CommentList from './components/CommentList';
import Form from './components/Form';
import PageList from './components/PageList';
import useForm from './hooks/useForm';

function App() {
  const form = useForm();

  return (
    <>
      <CommentList {...form} />
      <PageList />
      <Form {...form} />
    </>
  );
}

export default App;