import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import { get } from 'lodash-es'
import * as React from 'react'
import { baseRenderProps } from '../data/comment'
import { ejsMode, ejsSegment } from '../utils'

const getEjsValue = (key: string) =>
  ejsMode ? `<%= ${key} %>` : get(baseRenderProps, key)
export const GuestReceivedEmailTemplate = () => {
  const previewText = `${getEjsValue('master')} 在「${getEjsValue(
    'title'
  )}」给你回复啦！ ${getEjsValue('master')} 回复说： ${getEjsValue('text')}`
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans p-2">
          <Container className="border border-solid shadow-md rounded my-[40px] mx-auto p-[20px] w-[550px] max-w-full border-sky-500 relative overflow-hidden">
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
            <Heading className="text-black text-[18px] font-normal text-center p-0 my-[30px] mx-0">
              您在 『<strong>{getEjsValue('title')}</strong>』
              的评论有了新的回复呐~
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{getEjsValue('master')}</strong> 给您的回复：
            </Text>
            <Section className="bg-gray-100 rounded-xl px-4">
              <Text className="text-[#333] text-[12px] leading-[24px]">
                {getEjsValue('text')}
              </Text>
            </Section>

            {ejsSegment('<% if(aggregate.parent?.text){ %>')}
            <Text className="text-black text-[14px] leading-[24px]">
              你之前的回复是：
            </Text>
            <Section className="bg-gray-100 rounded-xl px-4">
              <Text className="text-[#333] text-[12px] leading-[24px]">
                {getEjsValue('aggregate.parent.text')}
              </Text>
            </Section>
            {ejsSegment('<% } %>')}

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                href={getEjsValue('link')}
                className="bg-sky-500 rounded text-white text-[12px] font-semibold no-underline text-center"
              >
                查看完整内容
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Text className="text-gray-500 text-[12px] leading-[24px]">
                萤火虫消失之后，那光的轨迹仍久久地印在我的脑际。那微弱浅淡的光点，仿佛迷失方向的魂灵，在漆黑厚重的夜幕中彷徨。——《挪威的森林》村上春树
              </Text>
            </Section>

            <Section className="mt-4">
              <Text className="text-center text-[10px] text-gray-400">
                本邮件为系统自动发送，请勿直接回复~ <br />©
                {`<%= new Date().getFullYear() %> Copyright <%= master %>`}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default GuestReceivedEmailTemplate
