import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '~/services/api';
import { List, Filter, Container, SignOutButton } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const productsList = response.data.map(product => {
        product.normalizedTitle = normalizeString(product.title);

        return product;
      });

      setProducts(productsList);
    }

    loadProducts();
  }, []);

  function normalizeString(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function handleSearch({ target: { value } }) {
    setSearch(normalizeString(value));
  }

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Filter placeholder="Pesquisar..." onChange={handleSearch} />
      <SignOutButton onClick={handleLogOut}>
        <strong>Sair</strong>
      </SignOutButton>
      <List>
        {products.map(
          product =>
            product.normalizedTitle.match(search) && (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.price}</span>
              </li>
            )
        )}
      </List>
    </Container>
  );
}
