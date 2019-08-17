import React from 'react';
import createRouter from './routes';

export default function Routes() {
  // pegar do redux se logado
  const isSigned = true;
  const Routes = createRouter(isSigned);

  return <Routes />;
}
