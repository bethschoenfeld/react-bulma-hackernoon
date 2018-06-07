import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem.js'
import PageHeader from './components/PageHeader.js'


class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'sp6nsvpba3j7',
    accessToken: 'e902dc6219c11d31e620ace233077bfc45cf828b833d124b13de39952eb59f83'
  })

  componentDidMount() {
    this.fetchPosts()
      .then(this.setPosts)
      .then(console.log("Posts are set."))
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, 
          albeit, probably not very good, but I will at least try to 
          keep it entertaining. This blog is a chronological mix of 
          random posts on Angular, React, Functional Programming,
          and my <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
}
export default Blog