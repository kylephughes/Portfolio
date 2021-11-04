import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react'
import { posts } from 'data'

const handleBtnClick = (link: string) => {
  window.open(link)
}
const Blog = ({ posts }) => (
  <Layout>
    <Grid container item>
      <Grid container direction="column" item alignItems="center">
        {posts.map(post => (
          <Grid item style={{ paddingBottom: 20 }}>
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia component="img" alt="green iguana" image="/rxjsimage.png" />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                  {post.publishedAt}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions style={{ paddingLeft: 8 }}>
                {post.external ? (
                  <Button onClick={e => handleBtnClick(post.link)}>Read more</Button>
                ) : (
                  <Link href={post.link}>Read More</Link>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Layout>
)

export default Blog

export async function getStaticProps() {
  return {
    props: {
      posts: posts,
    },
  }
}
