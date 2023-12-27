import React, { useEffect, useState } from 'react';
import DeveloperCard from '../DeveloperCard/DeveloperCard';
import scss from './GetRequest.module.scss';
import Button from '../Button/Button';
import Preloader from 'components/Preloader/Preloader';
import { loadMore } from '../helpers/fetch/loadmore';
import { fetchUsers } from '../helpers/fetch/fetchUsers';

function GetRequest({ successRegister, scrollToRef }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const response = await fetchUsers();
        setUsers(response.data.users);
      } catch (error) {
        console.error('Помика отримання юзерів', error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, [successRegister]);

  // пагінація
  const handleLoadMore = async () => {
    try {
      setIsloading(true);
      setPage(prevPage => prevPage + 1);

      const response = await loadMore(page + 1);

      setUsers(prevUsers => [...prevUsers, ...response.data.users]);

      if (response.data.total_pages === response.data.page) {
        setShowLoadMoreBtn(false);
      }
    } catch (error) {
      console.error('Ошибка при загрузке дополнительных данных', error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section id="usersAnchor" className={scss.getReqSection} ref={scrollToRef}>
      <div className={scss.container}>
        <h2 className={scss.reqTitle}>Working with GET request</h2>

        {/* картки користувачів */}
        <DeveloperCard users={users}></DeveloperCard>

        {/* условие для отображения прелоадера при isLoading равном true */}
        {isLoading ? (
          <Preloader />
        ) : (
          /* кнопка завантаження нових користувачів */
          showLoadMoreBtn && (
            <Button onClick={handleLoadMore} className={'showMoreBtn'}>
              Show more
            </Button>
          )
        )}
      </div>
    </section>
  );
}

export default GetRequest;
