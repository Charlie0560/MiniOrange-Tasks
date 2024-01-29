import Link from 'next/link'
import React from 'react'

function hello() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <p>Hello</p>
      <Link href="/employees">Employees</Link>
    </main>
  )
}

export default hello