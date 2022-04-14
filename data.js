const defaultThreads = [
  {
    id: 1,
    title: 'Thread 1',
    author: 'Aaron',
    date: Date.now(),
    content: 'Thread content',
    comments: [
      {
        author: 'Jack',
        date: Date.now(),
        content: 'Hey there'
      },
      {
        author: 'Arthur',
        date: Date.now(),
        content: 'Hey to you too'
      }
    ]
  },
  {
    id: 2,
    title: 'Thread 2',
    author: 'Aaron',
    date: Date.now(),
    content: 'Thread content 2',
    comments: [
      {
        author: 'Jack',
        date: Date.now(),
        content: 'Hey there'
      },
      {
        author: 'Arthur',
        date: Date.now(),
        content: 'Hey to you too'
      }
    ]
  }
]

let threads = defaultThreads
if (window.localStorage && window.localStorage.getItem('threads')) {
  threads = JSON.parse(window.localStorage.getItem('threads'))
} else {
  threads = defaultThreads
  window.localStorage.setItem('threads', JSON.stringify(defaultThreads))
}
