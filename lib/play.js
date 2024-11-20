const { ytmp3, ytmp4 } = require("ruhend-scraer");
const fetch = require("node-fetch");
const ytSearch = require("yt-search");

// Fungsi untuk mencari video YouTube berdasarkan query
const searchYouTube = async (query) => {
    let results = await ytSearch(query);
    if (!results || results.videos.length === 0) {
        throw new Error("Video tidak ditemukan.");
    }
    return results.videos[0];
};

// Fungsi untuk mengunduh audio dari YouTube
const downloadAudio = async (url) => {
    let { audio, title, thumbnail } = await ytmp3(url);
    let thumbBuffer = await (await fetch(thumbnail)).buffer();
    return { audio, title, thumbnail: thumbBuffer.toString("base64") };
};

// Fungsi untuk mengunduh video dari YouTube
const downloadVideo = async (url) => {
    let { video } = await ytmp4(url);
    return video;
};

// Ekspor modul
module.exports = { searchYouTube, downloadAudio, downloadVideo };
