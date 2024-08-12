import Link from "next/link";

export default function Home() {

  return (
      <div>
          <ol>
              <li>See how prefetching fails</li>
              <li>then open this page and see how it works (if accessed without the prefetching headers):</li>
          </ol>
        <Link href={'/text'}>Text page</Link>
      </div>
  )
}
