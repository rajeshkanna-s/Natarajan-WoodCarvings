import React, { useState } from 'react';
import './Instagram.css';
import postsData from '../data/instagram-posts.json';

const Instagram: React.FC = () => {
  // Show all posts, newest first. Move the first two videos to the end.
  const [posts] = useState(() => {
    const sorted = [...postsData].reverse();
    let videoCount = 0;
    const finalPosts: any[] = [];
    const videosToMove: any[] = [];

    for (const post of sorted) {
      if (post.type === 'VIDEO' && videoCount < 2) {
        videosToMove.push(post);
        videoCount++;
      } else {
        finalPosts.push(post);
      }
    }
    return [...finalPosts, ...videosToMove];
  });

  return (
    <div className="instagram-page page-container">
      <div className="container">
        <div className="section-header text-center">
          <h1 className="section-title">Our <span className="text-gold">Instagram Gallery</span></h1>
          <p className="section-subtitle">Explore a curated collection of our handcrafted wooden masterpieces.</p>
          <a href="https://www.instagram.com/natarajan_woodcarvings" target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-4">
            Follow @natarajan_woodcarvings
          </a>
        </div>

        <div className="insta-grid">
          {posts.map((post: any, index: number) => (
            <a key={index} href="https://www.instagram.com/natarajan_woodcarvings" target="_blank" rel="noopener noreferrer" className="insta-item">
              <div className="insta-img-wrapper">
                {post.type === 'VIDEO' ? (
                  <video
                    src={`/instagram-archive/${post.filename}`}
                    className="insta-img"
                    controls
                    preload="none"
                    playsInline
                    controlsList="nodownload"
                  />
                ) : (
                  <img
                    src={`/instagram-archive/${post.filename}`}
                    alt="Woodcarving showcase"
                    className="insta-img"
                    loading="lazy"
                  />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
