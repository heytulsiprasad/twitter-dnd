import { appStorage } from '@extension/storage';

// console.log("You're in X.com!");

async function initializeObserver() {
  // console.log('X.com is loaded');

  const videoLengths = new Set<number>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let totalAds: number = 0;

  const appStorageData = await appStorage.get();
  const { disableAds, disableVideos } = appStorageData;

  console.log({ disableAds, disableVideos });

  const observer = new MutationObserver(() => {
    // Select the div element with the specified aria-label
    const timelineDiv = document.querySelector('div[aria-label="Timeline: Your Home Timeline"]');

    if (document.body.contains(timelineDiv)) {
      // console.log('Timeline is loaded');

      /**
       * Select all the video elements on the page and remove them
       */
      if (disableVideos) {
        const videos = document.querySelectorAll('video');

        if (videos && videos.length > 0) {
          videos.forEach(video => {
            // Get the video length
            video.addEventListener('loadedmetadata', () => {
              videoLengths.add(video.duration);

              // Find the parent tweet
              const tweet = video.closest("article[data-testid='tweet']");

              // Remove the tweet
              if (tweet) tweet.remove();
            });
          });
        }
      }

      /**
       * Select all ads from the page and remove them
       */
      if (disableAds) {
        const ads = document.querySelectorAll("div[data-testid='placementTracking']");

        if (ads && ads.length > 0) {
          ads.forEach(ad => {
            // Find the parent tweet
            const tweet = ad.closest("article[data-testid='tweet']");

            // Remove the tweet
            if (tweet) {
              tweet.remove();
              totalAds++;
            }
          });
        }
      }

      // console.log(`Total (potential) ads removed: ${totalAds}`);
      // console.log(`Total video lengths: ${videoLengths.size}`);
    } else {
      // console.log('Still loading...');
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize observer on page load
initializeObserver();
