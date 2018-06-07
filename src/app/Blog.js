import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem.js'


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
        <p>This is the Blog Page</p>
        <br />
        {this.state.posts.map(({ fields }, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
}
export default Blog