type Post = {
  title: string
  publishedAt: string
  description: string
  link: string
  external: boolean
}
export const posts: Array<Post> = [
  {
    title: 'React & RxJS: Pushing state down',
    publishedAt: 'October 28, 2021',
    description:
      'First blog posted on the Disney Streaming blog space to demonstrate how RxJS can be used with React to keep state closer to the component using it, without needing to worry about component trees.',
    link: 'https://medium.com/disney-streaming/react-rxjs-pushing-state-down-4205af78f8b0',
    external: true,
  },
]
