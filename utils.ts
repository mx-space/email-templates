const isInVercelMode = process.env.VERCEL_ENV
const isDev = process.env.NODE_ENV === 'development'
export const ejsMode = !isInVercelMode && !isDev
export const ejsSegment = (str: string) => {
  if (!ejsMode) return ''
  return str
}
