import React from 'react';

const episodes = [
    {
        title: 'Episode 1',
        description: 'Introduction to the podcast',
        spotifyUrl: 'https://open.spotify.com/episode/1',
        youtubeUrl: 'https://www.youtube.com/watch?v=1',
    },
    {
        title: 'Episode 2',
        description: 'Deep dive into TypeScript',
        spotifyUrl: 'https://open.spotify.com/episode/2',
        youtubeUrl: 'https://www.youtube.com/watch?v=2',
    },
    // Add more episodes here
];

export default function PodcastPage()  {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>My Podcast Episodes</h1>
            <div>
                {episodes.map((episode, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h2>{episode.title}</h2>
                        <p>{episode.description}</p>
                        <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                            Listen on Spotify
                        </a>
                        <br />
                        <a href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer">
                            Watch on YouTube
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};