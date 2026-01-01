import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function YoutubeVideo() {
  return (
    <div className="w-full overflow-hidden rounded-xl mt-5">
      <LiteYouTubeEmbed
        id="QtGIapWhUKg"
        title="Demo del proyecto V22"
        poster="maxresdefault"
        noCookie
        params="autoplay=1"
      />
    </div>
  );
}

export default YoutubeVideo;
