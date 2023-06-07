import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import { get } from 'lodash-es'
import React from 'react'
import { ejsMode } from '../utils'

const defaultPostProps = {
  text: '年纪在四十以上，二十以下的，恐怕就不易在前两派里有个地位了。他们的车破，又不敢“拉晚儿”，所以只能早早的出车，希望能从清晨转到午后三四点钟，拉出“车份儿”和自己的嚼谷①。他们的车破，跑得慢，所以得多走路，少要钱。到瓜市，果市，菜市，去拉货物，都是他们；钱少，可是无须快跑呢。',
  title: '骆驼祥子',
}

export const defaultSubscribeForRenderProps = {
  ...defaultPostProps,

  author: '',
  detail_link: '#detail_link',
  unsubscribe_link: '#unsubscribe_link',
  master: '',

  aggregate: {
    owner: {
      username: 'innei',
      name: 'innei',
      avatar: 'https://avatars.githubusercontent.com/u/41265413?v=4',
    },
    subscriber: {
      email: 'subscriber@mail.com',
    },
    post: {
      ...defaultPostProps,
      id: 'cdab54a19f3f03f7f5159df7',
      created: '2023-06-04T15:02:09.179Z',
    },
  },
}

const getEjsValue = (key: string) =>
  ejsMode ? `<%= ${key} %>` : get(defaultSubscribeForRenderProps, key)

export default () => (
  <Html>
    <Head />
    <Preview>
      你关注的 @{getEjsValue('aggregate.owner')} 有新的内容发布啦。
      {`<%= aggregate.post.text.slice(0, 20) %>`}
    </Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="rounded-md border-rose-400 shadow-md my-[40px] mx-auto p-[20px] w-[550px] relative overflow-hidden">
          <Section className="absolute inset-0 pointer-events-none">
            <Img
              src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@master/images/chichi-1.jpeg"
              className="object-contain max-w-full opacity-20 blur-lg"
              style={{
                maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)`,
              }}
            />
          </Section>
          <Section className="mt-[32px]">
            <Img
              src={getEjsValue('aggregate.owner.avatar')}
              className="my-0 mx-auto rounded-xl h-12 w-12"
            />
          </Section>

          <Text>
            你关注的 @{getEjsValue('aggregate.owner.name')} 刚刚发布了：
          </Text>

          <Heading className="text-[20px] text-center">
            {getEjsValue('title')}
          </Heading>
          <Text>{getEjsValue('text')}</Text>

          <Section className="text-center mt-[32px] mb-[32px] relative">
            <Button
              pX={20}
              pY={12}
              href={getEjsValue('detail_link')}
              className="bg-rose-400 rounded text-white text-[12px] font-semibold no-underline text-center"
            >
              查看完整内容
            </Button>

            <Link
              className="text-gray-400 float-right text-[12px] translate-y-3"
              href={getEjsValue('unsubscribe_link')}
            >
              退订
            </Link>
          </Section>

          <Hr />
          <Section className="mt-4">
            <Text className="text-center text-[10px] text-gray-400">
              本邮件为系统自动发送，请勿直接回复~ <br />©
              {`<%= new Date().getFullYear() %> Copyright <%= aggregate.owner.name %>`}
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)
