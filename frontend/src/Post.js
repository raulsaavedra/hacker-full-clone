import React from 'react';
import styled from 'styled-components';


const StyledArticle = styled.article.attrs({
  className: 'mb3 pb2 pt2 bb bw1 b--gray gray pa2 flex',
})`

`;
const StyledDate = styled.p.attrs({
  className: ''
})`
  margin-left: auto;
`
const PostPreview = ({ title, author, date, url}) => (
  <a className="no-underline" href={`${url}`}>
    <StyledArticle>
      
        <h3 className="f4 black pt0 dib pr3">{title}</h3>
        <p className="f5 gray dib pt1 pr2">{`-${author}-`}</p>
        <StyledDate className="f5 black dib pt1 pr4 fw8">{date}</StyledDate>
      
    </StyledArticle>
  </a>
);

export default PostPreview;