import { Grid, Typography } from '@mui/material'

import Image from 'next/image'
import Layout from 'components/layout'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import styles from './Markdown.module.css'

type Props = {}

const CodeBlock: React.FC<Props> = ({ children }) => {
  return (
    <SyntaxHighlighter style={darcula} className={styles.code} language={'jsx'}>
      {children}
    </SyntaxHighlighter>
  )
}
const CustomParagraph = ({ children, ...paragraph }) => {
  const { node } = paragraph

  // format the images in the markdown file
  if (node.children[0].tagName === 'img') {
    const image = node.children[0]
    return (
      <p>
        <Image src={image.properties.src} width="1000" height="300" alt={image.properties.alt} />
      </p>
    )
  } else {
    return <p>{children}</p>
  }
}

export default function BlogTemplate({ content, data }) {
  // Render data from `getStaticProps`
  return (
    <Layout>
      <Grid container className={styles.markdownText} justifyContent="center">
        <Grid container item xs={12} md={8}>
          <Typography className={styles.markdown} component="div" color="textPrimary">
            <ReactMarkdown
              components={{
                // pre: props => <CustomParagraph {...props} />,
                code: props => <CodeBlock {...props} />,
                p: paragraph => <CustomParagraph {...paragraph} />,
              }}
            >
              {content}
            </ReactMarkdown>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export async function getStaticProps({ params: { slug } }) {
  // can only use fs here since this runs on the server
  const data = fs.readFileSync(path.join('content', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(data)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = fs.readdirSync(path.join('content'))

  const paths = blogs.map(file => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
