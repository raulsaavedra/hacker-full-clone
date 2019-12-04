import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Header from './Header';
import PostList from './PostList';
const StyledContainer = styled(Container).attrs({
  className: 'pa2 ba bw1 b--black'
})`
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');
    const data = await response.json()
    this.setState({ posts: data.hits })
    console.log(this.state.posts)
  }

  render() {
    return (
      <>
      <Header/>
      <StyledContainer>
        <PostList posts={this.state.posts}></PostList>
      </StyledContainer>
      </>
    )
  }
}

export default App;
