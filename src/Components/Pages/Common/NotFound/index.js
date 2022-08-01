import React from 'react'
import { NotFoundWrapper } from './styled'

function NotFound() {
  return (
    <NotFoundWrapper>
        <p className='text-center not-found-text'>
            Trang Này Hiện Đang Không Có
        </p>
    </NotFoundWrapper>
  )
}

export default NotFound