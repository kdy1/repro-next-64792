import { Suspense } from "react"
import { BookList } from "../post-list"

export default function Edge() {
  return <div>
    <h1>Edge</h1>
    <a href="/">Home</a>
    <a href="/nodejs">Node</a>
    <Suspense fallback={<div>Loading...</div>}>
      <BookList />
    </Suspense>
  </div>
}

export const runtime = "edge"
