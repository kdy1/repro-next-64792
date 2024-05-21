import { Suspense } from "react";
import { BookList } from "../book-list";

export default function Node() {
  return <div>
    <h1>Node</h1>
    <a href="/">Home</a>
    <a href="/edge">Edge</a>
    <Suspense fallback={<div>Loading...</div>}>
      <BookList />
    </Suspense>
  </div>
}
