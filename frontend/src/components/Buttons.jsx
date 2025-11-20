import React from 'react'
import './Button.css'
const Buttons = ({page}) => {
  return (
    <div className='pagination'>
        <button
        disabled={page.currentPage === 1}
        onClick={() => page.setCurrentPage(page.currentPage - 1)}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page.currentPage} of 2
      </span>

      <button
        disabled={page.currentPage === 2}
        onClick={() => page.setCurrentPage(page.currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Buttons
