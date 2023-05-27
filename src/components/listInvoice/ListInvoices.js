import './ListInvoices.css';
import { useEffect, useState } from 'react';
import ListInvoicesItem from './ListInvoicesItem';

const ListInvoices = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:3030/inovices', requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="constainerList">
      {posts.map((invoice) => (
        <div key={invoice.id}>
          <ListInvoicesItem invoice={invoice} />
        </div>
      ))}
    </div>
  );
};

export default ListInvoices;
