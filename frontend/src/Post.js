import React from 'react';
import styled from 'styled-components';


const StyledArticle = styled.article.attrs({
  className: 'bb bw1 b--gray gray pa3 flex',
})`
  &:hover {
    background-color: #fafafa
  }
`;
const StyledDate = styled.p.attrs({
  className: ''
})`
  margin-left: auto;
 
`
class PostPreview extends React.Component {

  deletePost = async () => {
    const response = await fetch('http://localhost:9000/delete', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.id
      })
    });
  }
  render () {
    const {url, title, author, date} = this.props;
    return (
      <StyledArticle>
        <a className="no-underline" href={`${url}`}>
          <h3 className="f4 black pt0 dib pr3">{title}</h3>
          <p className="f5 gray dib pt1 pr2">{`-${author}-`}</p> 
        </a>
        <>
          <StyledDate className="f5 black dib pt1 pr4 fw8">{date}</StyledDate>
          <a className="pt3 pointer"onClick={this.deletePost}>🗑️</a>
        </>
        
      </StyledArticle>

    )
  }
}

export default PostPreview;