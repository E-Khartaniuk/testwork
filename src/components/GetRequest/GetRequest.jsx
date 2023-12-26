import React, { useEffect, useState } from 'react'
import DeveloperCard from '../DeveloperCard/DeveloperCard'
import scss from './GetRequest.module.scss'
import Button from '../Button/Button'
import { loadMore } from '../helpers/validate/fetch/loadmore'
import { fetchUsers } from '../helpers/validate/fetch/fetchUsers'

function GetRequest({ successRegister, scrollToRef }) {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true)

  useEffect(() => {
    fetchUsers().then((response) => {
      setUsers(response.data.users)
    })
  }, [successRegister])

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)

    loadMore(page + 1).then((response) => {
      setUsers((prevUsers) => [...prevUsers, ...response.data.users])
      if (response.data.total_pages === response.data.page) {
        setShowLoadMoreBtn(false)
      }
    })
  }

  return (
    <section id="usersAnchor" className={scss.getReqSection} ref={scrollToRef}>
      <div className={scss.container}>
        <h2 className={scss.reqTitle}>Working with GET request</h2>
        <DeveloperCard users={users}></DeveloperCard>

        {showLoadMoreBtn && (
          <Button onClick={handleLoadMore} className={'showMoreBtn'}>
            Show more
          </Button>
        )}
      </div>
    </section>
  )
}

export default GetRequest
