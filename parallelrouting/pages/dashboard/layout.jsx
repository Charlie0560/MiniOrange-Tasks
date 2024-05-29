import React from 'react'

function layout({children,articles,users}) {
  return (
    <div>layout
      {children}
      {articles}
      {users}
    </div>
  )
}

export default layout