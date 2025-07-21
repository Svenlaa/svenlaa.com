const app = async () => {
    const feedContainer = document.querySelector('#feed');
    if (!feedContainer) {
        console.error('Feed container not found');
        return;
    }
    feedContainer.innerHTML = 'loading...';

    const res = await fetch('https://schedule.hololive.tv/api/list/7');
    if (!res.ok) {
        console.error('Failed to fetch data from Hololive API');
        feedContainer.innerHTML = '<p style="color: var(--red)">Failed to fetch data</p>';
        return;
    }
    const data = await res.json();
    if (!data || typeof data !== 'object') {
        console.error('Expected JSON data but got something else');
        feedContainer.innerHTML = '<p style="color: var(--red)">No data found</p>';
        return;
    }
    const now = new Date();

    if (!data || !data.dateGroupList) {
        console.error('No data found');
        feedContainer.innerHTML = '<p style="color: var(--red)">No data found</p>';
        return;
    }

    const videoList = data.dateGroupList
        .flatMap((group) => group.videoList)
        .sort((a, b) => {
            // sort by date
            const dateA = new Date(a.datetime);
            const dateB = new Date(b.datetime);
            return dateA.getTime() - dateB.getTime();
        })
        .filter((video) => {
            // date is in JST, so we need to convert it to UTC
            const date = new Date(video.datetime + ' GMT+0900');
            const FIVE_MINUTES = 1000 * 60 * 5;
            return video.isLive || date.getTime() > now.getTime() - FIVE_MINUTES;
        })
        .map((video) => ({
            title: video.title,
            url: video.url,
            thumbnail: video.thumbnail,
            datetime: video.datetime,
            isLive: video.isLive,
            talent: {
                name: video.talent.name,
                iconImageUrl: video.talent.iconImageUrl,
            },
        }));
    if (videoList.length === 0) {
        console.error('No videos found');
        feedContainer.innerHTML = '<p style="color: var(--red)">No livestreams found</p>';
        return;
    }

    // render the feed as HTML
    feedContainer.innerHTML = '';
    videoList.forEach((video) => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video';
        videoElement.innerHTML = `
            <a href="${video.url}" class="basic" target="_blank">
                <img src="${video.thumbnail}" alt="${video.title}">
                ${video.isLive ? '<span class="live">LIVE</span>' : ''} 
                <h3>${video.title}</h3>
                <p>
                    <span>${video.talent.name}</span>
                    <span>${new Date(video.datetime + ' GMT+0900').toLocaleString('en-GB', {
                        dateStyle: 'long',
                        timeStyle: 'short',
                    })}</span>
                </p>
            </a>
        `;
        feedContainer.appendChild(videoElement);
    });
};

app();
