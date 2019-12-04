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
    const response = await fetch('http://localhost:9000/posts');
    const data = await response.json()
    console.log(data);
    this.setState({ posts: data})
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
