function* pageGenerator(pages: number): Generator<number> {
  let page = 1

  while (page <= pages) {
    const toPage = yield page

    page = toPage ?? page + 1
  }
}

const pages = pageGenerator(5)

console.log(pages.next()) // { value: 1, done: false }
console.log(pages.next(3)) // { value: 3, done: false } (Skips to page 3)
console.log(pages.next()) // { value: 4, done: false }
console.log(pages.next(10)) // { done: true } (Beyond the limit)

function* idGenerator(start = 1): Generator<number, void, 'reset'> {
  let id = start
  while (true) {
    const action = yield id++

    if (action === 'reset') id = start
  }
}

const idGen = idGenerator(1000)

console.log(idGen.next()) // { value: 1000, done: false }
console.log(idGen.next()) // { value: 1001, done: false }
console.log(idGen.next()) // { value: 1002, done: false }

console.log(idGen.next('reset')) // { value: 1000, done: false } (Resets to 1000)
console.log(idGen.next()) // { value: 1001, done: false }

class Book {
  constructor(private pages: string[] = [], private currentPage = 0) {}

  previousPage() {
    if (!this.currentPage) return
    this.currentPage--
  }

  nextPage() {
    if (this.currentPage === this.pages.length - 1) return
    this.currentPage++
  }

  readCurrentPage() {
    return this.pages[this.currentPage]
  }

  [Symbol.iterator](): Iterator<string> {
    return {
      next: () => {
        if (this.currentPage < this.pages.length) {
          return {
            value: this.pages[this.currentPage++],
            done: false,
          }
        }
        return { value: undefined, done: true }
      },
    }
  }
}

const book = new Book([
  'Page 1: Introduction',
  'Page 2: Chapter 1',
  'Page 3: Chapter 2',
])

book.nextPage()
console.log(book.readCurrentPage())
book.previousPage()
console.log(book.readCurrentPage())
book.previousPage()
console.log(book.readCurrentPage())
book.nextPage()
console.log(book.readCurrentPage())

for (const page of book) {
  console.log(page)
}
