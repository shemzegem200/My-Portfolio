import React from 'react';
import reviews from '../resources/reviews';  

var firstRow = reviews.slice(0, reviews.length / 2);
var secondRow = reviews.slice(reviews.length / 2);
function ReviewCard({ img, name, username, body }) {
  return (
    <figure className="review-card dark">
      <div className="review-header">
        <img className="review-img" src={img} alt="" />
        <div className="review-info">
          <figcaption className="review-name">{name}</figcaption>
          <p className="review-username">{username}</p>
        </div>
      </div>
      <blockquote className="review-body">{body}</blockquote>
    </figure>
  );
}

export default function MarqueeDemo() {
  return (
    <div className="marquee-container">
        <div className='top-grad-smoothen' />
      <div className="marquee marquee-left">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee marquee-right">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="gradient-overlay-left"></div>
      <div className="gradient-overlay-right"></div>
        <div className='btm-grad-smoothen' />
    </div>
  );
}
