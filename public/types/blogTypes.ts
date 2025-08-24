export default interface BlogTypes {
    id: number,
    title: string,
    slug: string,
    excerpt: string,
    content: string,
    featuredImage: string[],
    author: {
      name: string,
      avatar: string
    },
    date: string,
    category: string,
    tags: string[]
  }