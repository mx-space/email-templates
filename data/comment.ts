import dayjs from 'dayjs'
export interface CommentModelRenderProps {
  author: string
  avatar: string
  mail: string
  text: string
  ip?: string | undefined
  agent: string
  created: string
  isWhispers: boolean
  location?: string | undefined
  url: string
}
const defaultCommentModelForRenderProps: CommentModelRenderProps = {
  author: 'Commentor' as string,
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/976.jpg' as string,
  mail: 'commtor@example.com' as string,
  text: `Tenetur ipsam quis illo eos pariatur. Minima rerum accusantium. Nesciunt facere illo reprehenderit qui voluptatem omnis temporibus consequatur similique. Et quidem vero aperiam iure cumque perspiciatis. Vitae occaecati quam non. Placeat officia iste voluptatibus magnam neque accusamus magni alias at.
  Nobis quia enim error molestiae praesentium molestias. Itaque harum cupiditate itaque ea necessitatibus deleniti. Excepturi nihil voluptas vel vitae asperiores eveniet illum. Soluta veritatis quasi commodi. Enim laudantium quaerat recusandae nulla placeat.
  Ad recusandae et sint impedit at esse illo exercitationem. Odit repellat non. Quisquam asperiores eveniet dolore. Magni iste modi at delectus. Pariatur consequuntur officia ab libero. Beatae voluptatum quia impedit deleniti ipsam eaque iure.` as string,
  ip: '0.0.0.0' as string | undefined,
  agent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' as string,
  created: new Date().toISOString(),
  isWhispers: false,
  location: '' as string | undefined,
  url: 'https://blog.commentor.com' as string,
}

const defaultPostModelForRenderProps = {
  title: '匆匆',
  id: 'd7e0ed429da8ae90988c37da',
  text: '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？——是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：如今（现在 [2] ）又到了哪里呢？',
  created: new Date().toISOString(),
  modified: new Date().toISOString(),
}

export const baseRenderProps = Object.freeze({
  author: defaultCommentModelForRenderProps.author,
  link: 'https://innei.ren/note/122#comments-37ccbeec9c15bb0ddc51ca7d' as string,

  mail: defaultCommentModelForRenderProps.mail,
  text: defaultCommentModelForRenderProps.text,
  title: '文章的标题' as string,
  time: dayjs().format('YYYY/MM/DD'),
  master: 'Innei' as string,

  ip: defaultCommentModelForRenderProps.ip,

  aggregate: {
    post: defaultPostModelForRenderProps,
    commentor: defaultCommentModelForRenderProps,
    owner: {
      username: 'innei',
      avatar: 'https://avatars.githubusercontent.com/u/41265413?v=4',
    },
  },
})
