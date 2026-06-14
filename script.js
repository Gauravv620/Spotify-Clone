// Premium Spotify Clone Logic

// 1. Song Data Repository (Best of NCS)
const songs = [
    { id: 0, songName: "On & On", artist: "Cartoon, Daniel Levi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "02:50", album: "NCS Releases" },
    { id: 1, songName: "Invincible", artist: "DEAF KEV", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "04:33", album: "NCS Releases" },
    { id: 2, songName: "Mortals", artist: "Warriyo, Laura Brehm", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "03:49", album: "NCS Releases" },
    { id: 3, songName: "Shine", artist: "Spektrem", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "04:19", album: "NCS Releases" },
    { id: 4, songName: "Why We Lose", artist: "Cartoon, Coleman Trapp", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "03:17", album: "NCS Releases" },
    { id: 5, songName: "Sky High", artist: "Elektronomia", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", duration: "03:58", album: "NCS Releases" },
    { id: 7, songName: "Symbolism", artist: "Electro-Light", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", duration: "04:51", album: "NCS Releases" }, // mapped from 7.jpg/7.mp3
    { id: 8, songName: "Heroes Tonight", artist: "Janji, Johnning", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", duration: "03:28", album: "NCS Releases" },
    { id: 9, songName: "Feel Good", artist: "Syn Cole", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", duration: "03:02", album: "NCS Releases" },
    { id: 10, songName: "My Heart", artist: "Different Heaven & EH!DE", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", duration: "04:27", album: "NCS Releases" },
    
    // 90s Bollywood Hits (Virtual Track Segment Streaming from Archive.org)
    { id: 11, songName: "Dil Lagane Ki Sazaa", artist: "Kumar Sanu, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/1.jpg", duration: "05:28", album: "Ek Rishtaa", startTime: 0, endTime: 328 },
    { id: 12, songName: "Aayega Mazaa Ab Barsaat Ka", artist: "Alka Yagnik, Udit Narayan", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/2.jpg", duration: "05:20", album: "Andaaz", startTime: 328, endTime: 648 },
    { id: 13, songName: "Hum Pyar Hain Tumhare", artist: "Kumar Sanu, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/3.jpg", duration: "05:42", album: "Haan Maine Bhi Pyaar Kiya", startTime: 648, endTime: 990 },
    { id: 14, songName: "Gore Gore Mukhde Pe", artist: "Udit Narayan, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/4.jpg", duration: "05:12", album: "Suhaag", startTime: 990, endTime: 1302 },
    { id: 15, songName: "Mohabbat Ne Mohabbat Ko", artist: "Udit Narayan, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/5.jpg", duration: "05:32", album: "Ek Rishtaa", startTime: 1302, endTime: 1634 },
    { id: 16, songName: "Aaj Kehna Zaroori Hai", artist: "Udit Narayan, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/6.jpg", duration: "05:44", album: "Andaaz", startTime: 1634, endTime: 1978 },
    { id: 17, songName: "Mausam Ki Tarah Tum Bhi", artist: "Alka Yagnik, Manhar Udhas", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/7.jpg", duration: "05:04", album: "Jaanwar", startTime: 1978, endTime: 2282 },
    { id: 18, songName: "Ek Dil Hai", artist: "Kumar Sanu, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/8.jpg", duration: "05:20", album: "Ek Rishtaa", startTime: 2282, endTime: 2602 },
    { id: 19, songName: "Allah Kare Dil Na Lage", artist: "Alka Yagnik, Sonu Nigam", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/9.jpg", duration: "05:25", album: "Andaaz", startTime: 2602, endTime: 2927 },
    { id: 20, songName: "Taana Nana Dil Mera", artist: "Udit Narayan, Alka Yagnik", filePath: "https://archive.org/download/akshay-kumar-hindi-songs-bollywood-romantic-songs-best-90s-songs-audio-jukebox-nzsk-bj-tr-r-0-u/AKSHAY%20KUMAR%20-%20Hindi%20Songs%20-%20Bollywood%20Romantic%20Songs%20-%20Best%2090's%20Songs%20-%20Audio%20Jukebox_NZskBjTrR0U.mp3", coverPath: "covers/10.jpg", duration: "05:20", album: "Suhaag", startTime: 2927, endTime: 3247 }
];

// 2. Playback State
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: No Repeat, 1: Repeat Playlist, 2: Repeat Track
let likedSongs = new Set([0, 2, 5]); // default liked songs to pre-populate list nicely
let activePlaylist = [...songs];
let currentView = 'home'; // 'home', 'search', 'liked'

// 3. Audio Controller
const audioElement = new Audio();
audioElement.volume = 0.8;

// 4. DOM Elements
const masterPlay = document.getElementById('masterPlay');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const myProgressBar = document.getElementById('myProgressBar');
const currentTimeLabel = document.getElementById('current-time');
const totalDurationLabel = document.getElementById('total-duration');
const masterSongName = document.getElementById('masterSongName');
const playerSongArtist = document.getElementById('player-song-artist');
const playerCover = document.getElementById('player-cover');
const playerHeartBtn = document.getElementById('player-heart-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeSlider = document.getElementById('volume-slider');
const equalizer = document.getElementById('equalizer');

// Navigation triggers
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search');
const navLiked = document.getElementById('nav-liked');

// Views
const homeView = document.getElementById('home-view');
const searchView = document.getElementById('search-view');
const likedSongsView = document.getElementById('liked-songs-view');

// Lists
const featuredTracksList = document.getElementById('featured-tracks-list');
const likedTracksList = document.getElementById('liked-tracks-list');
const searchResultsList = document.getElementById('search-results-list');
const emptyLikedMessage = document.getElementById('empty-liked-message');

// Search elements
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const searchCategories = document.getElementById('search-categories');
const searchResultsSection = document.getElementById('search-results-section');
const searchResultsTitle = document.getElementById('search-results-title');

// Hero play
const heroPlayBtn = document.getElementById('hero-play-btn');

// Previous volume store (for mute/unmute)
let savedVolume = 0.8;

// 5. Utility Helpers
const formatTime = (secs) => {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const updateSliderProgress = (slider, percent) => {
    slider.style.background = `linear-gradient(to right, var(--accent-green) 0%, var(--accent-green) ${percent}%, #4d4d4d ${percent}%, #4d4d4d 100%)`;
};

// 6. View Rendering Functions
const renderTracksList = (tracks, containerElement, isLikedView = false) => {
    if (!containerElement) return;
    
    if (tracks.length === 0) {
        if (isLikedView) {
            containerElement.innerHTML = '';
            containerElement.appendChild(emptyLikedMessage);
            emptyLikedMessage.style.display = 'flex';
        } else {
            containerElement.innerHTML = '<div class="empty-liked-songs"><p>No songs found</p></div>';
        }
        return;
    }
    
    if (isLikedView && emptyLikedMessage) {
        emptyLikedMessage.style.display = 'none';
    }

    containerElement.innerHTML = tracks.map((song, i) => {
        const isCurrentSong = activePlaylist[currentSongIndex]?.id === song.id;
        const rowClass = isCurrentSong ? 'song-row playing-row' : 'song-row';
        const heartClass = likedSongs.has(song.id) ? 'row-heart-btn liked' : 'row-heart-btn';
        const heartIcon = likedSongs.has(song.id) ? 'fas fa-heart' : 'far fa-heart';
        
        // Show correct play/pause icon in the index column
        let playIconHTML = '<i class="fas fa-play"></i>';
        let indexDisplay = i + 1;
        
        if (isCurrentSong && isPlaying) {
            playIconHTML = '<i class="fas fa-pause"></i>';
            indexDisplay = `<span style="color: var(--accent-green);"><i class="fas fa-volume-up animate-pulse"></i></span>`;
        }

        return `
            <div class="${rowClass}" data-song-id="${song.id}">
                <div class="col-index">
                    <span class="row-index-num">${indexDisplay}</span>
                    <button class="row-index-play" onclick="handleRowPlayClick(${song.id})">${playIconHTML}</button>
                </div>
                <div class="col-title">
                    <div class="row-title-container">
                        <img src="${song.coverPath}" alt="${song.songName}" class="row-cover" />
                        <div class="row-meta">
                            <span class="row-title-name">${song.songName}</span>
                            <span class="row-artist">${song.artist}</span>
                        </div>
                    </div>
                </div>
                <div class="col-album">${song.album}</div>
                <div class="col-actions">
                    <button class="${heartClass}" onclick="handleRowLikeClick(event, ${song.id})">
                        <i class="${heartIcon}"></i>
                    </button>
                </div>
                <div class="col-duration">${song.duration}</div>
            </div>
        `;
    }).join('');
};

// Global click delegates for dynamically rendered elements
window.handleRowPlayClick = (songId) => {
    const targetIdx = activePlaylist.findIndex(s => s.id === songId);
    if (targetIdx !== -1) {
        if (currentSongIndex === targetIdx) {
            togglePlay();
        } else {
            currentSongIndex = targetIdx;
            loadSong(currentSongIndex, true);
        }
    }
};

window.handleRowLikeClick = (event, songId) => {
    event.stopPropagation();
    toggleLike(songId);
};

// Sync active playing styles across all rows instantly
const syncUIPlayingState = () => {
    // 1. Player bar play button icon
    if (isPlaying) {
        masterPlay.innerHTML = '<i class="fas fa-pause"></i>';
        equalizer.classList.add('playing');
    } else {
        masterPlay.innerHTML = '<i class="fas fa-play"></i>';
        equalizer.classList.remove('playing');
    }

    // 2. Render lists to reflect change
    updateViewsData();
};

const updateViewsData = () => {
    if (currentView === 'home') {
        renderTracksList(songs, featuredTracksList);
    } else if (currentView === 'search') {
        const query = searchInput.value.trim();
        if (query) {
            const filtered = songs.filter(s => 
                s.songName.toLowerCase().includes(query.toLowerCase()) || 
                s.artist.toLowerCase().includes(query.toLowerCase())
            );
            renderTracksList(filtered, searchResultsList);
        }
    } else if (currentView === 'liked') {
        const likedList = songs.filter(s => likedSongs.has(s.id));
        renderTracksList(likedList, likedTracksList, true);
        document.getElementById('liked-count').innerText = likedList.length;
    }
};

// 7. Core Music Controls
const loadSong = (index, playAfterLoad = true) => {
    if (index < 0 || index >= activePlaylist.length) return;
    currentSongIndex = index;
    const song = activePlaylist[currentSongIndex];

    // Load source
    audioElement.src = song.filePath;
    
    // Update player interface
    masterSongName.innerText = song.songName;
    playerSongArtist.innerText = song.artist;
    playerCover.src = song.coverPath;

    // Reset seek progress bar visually
    myProgressBar.value = 0;
    updateSliderProgress(myProgressBar, 0);
    currentTimeLabel.innerText = "0:00";
    totalDurationLabel.innerText = song.duration;

    // Update player bar heart icon
    if (likedSongs.has(song.id)) {
        playerHeartBtn.classList.add('liked');
        playerHeartBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        playerHeartBtn.classList.remove('liked');
        playerHeartBtn.innerHTML = '<i class="far fa-heart"></i>';
    }

    // Play/Pause decision
    if (playAfterLoad) {
        playTrack();
    } else {
        pauseTrack();
    }
};

const playTrack = () => {
    audioElement.play()
        .then(() => {
            isPlaying = true;
            syncUIPlayingState();
        })
        .catch(err => {
            console.error("Audio playback error:", err);
            // Auto skip if audio file failed to load
            nextTrack();
        });
};

const pauseTrack = () => {
    audioElement.pause();
    isPlaying = false;
    syncUIPlayingState();
};

const togglePlay = () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
};

const nextTrack = () => {
    if (activePlaylist.length === 0) return;
    
    if (isShuffle) {
        // Random track index
        let randomIndex = currentSongIndex;
        if (activePlaylist.length > 1) {
            while (randomIndex === currentSongIndex) {
                randomIndex = Math.floor(Math.random() * activePlaylist.length);
            }
        }
        currentSongIndex = randomIndex;
    } else {
        currentSongIndex++;
        if (currentSongIndex >= activePlaylist.length) {
            currentSongIndex = 0; // wrap to first track
        }
    }
    loadSong(currentSongIndex, true);
};

const prevTrack = () => {
    if (activePlaylist.length === 0) return;

    // Spotify style: if track has played for > 3s, prev button restarts track
    if (audioElement.currentTime > 3) {
        audioElement.currentTime = 0;
        myProgressBar.value = 0;
        updateSliderProgress(myProgressBar, 0);
    } else {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = activePlaylist.length - 1; // wrap to last
        }
        loadSong(currentSongIndex, true);
    }
};

const toggleLike = (songId) => {
    if (likedSongs.has(songId)) {
        likedSongs.delete(songId);
        if (songId === activePlaylist[currentSongIndex]?.id) {
            playerHeartBtn.classList.remove('liked');
            playerHeartBtn.innerHTML = '<i class="far fa-heart"></i>';
        }
    } else {
        likedSongs.add(songId);
        if (songId === activePlaylist[currentSongIndex]?.id) {
            playerHeartBtn.classList.add('liked');
            playerHeartBtn.innerHTML = '<i class="fas fa-heart"></i>';
        }
    }
    updateViewsData();
};

// 8. Tab Navigation Logic
const switchTab = (tabName) => {
    currentView = tabName;

    // 1. Remove active triggers
    navHome.classList.remove('active');
    navSearch.classList.remove('active');
    navLiked.classList.remove('active-nav');

    // 2. Hide all views
    homeView.classList.remove('active');
    searchView.classList.remove('active');
    likedSongsView.classList.remove('active');
    
    // Hide search bar input unless search view is active
    searchContainer.style.display = 'none';

    // 3. Activate selected elements
    if (tabName === 'home') {
        navHome.classList.add('active');
        homeView.classList.add('active');
        activePlaylist = [...songs]; // reset to all songs
        renderTracksList(songs, featuredTracksList);
    } else if (tabName === 'search') {
        navSearch.classList.add('active');
        searchView.classList.add('active');
        searchContainer.style.display = 'flex';
        searchInput.focus();
        
        // Populate search tracks if filter exists
        const query = searchInput.value.trim();
        if (query) {
            searchTracks(query);
        } else {
            searchCategories.style.display = 'grid';
            searchResultsSection.style.display = 'none';
        }
    } else if (tabName === 'liked') {
        navLiked.classList.add('active-nav');
        likedSongsView.classList.add('active');
        
        const likedList = songs.filter(s => likedSongs.has(s.id));
        activePlaylist = likedList;
        renderTracksList(likedList, likedTracksList, true);
        document.getElementById('liked-count').innerText = likedList.length;
    }
};

// 9. Search Engine
const searchTracks = (query) => {
    if (!query) {
        searchCategories.style.display = 'grid';
        searchResultsSection.style.display = 'none';
        searchClearBtn.style.display = 'none';
        return;
    }

    searchClearBtn.style.display = 'block';
    searchCategories.style.display = 'none';
    searchResultsSection.style.display = 'block';
    searchResultsTitle.innerText = `Search Results for "${query}"`;

    const filtered = songs.filter(s => 
        s.songName.toLowerCase().includes(query.toLowerCase()) || 
        s.artist.toLowerCase().includes(query.toLowerCase())
    );

    activePlaylist = filtered;
    renderTracksList(filtered, searchResultsList);
};

// 10. Event Listeners Setup
const setupEventListeners = () => {
    // Playback Click listeners
    masterPlay.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);

    // Shuffle state toggles
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle('active', isShuffle);
    });

    // Repeat state toggles (0: Off, 1: Repeat Playlist, 2: Repeat Track)
    repeatBtn.addEventListener('click', () => {
        repeatMode = (repeatMode + 1) % 3;
        
        if (repeatMode === 0) {
            repeatBtn.classList.remove('active');
            repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
            repeatBtn.title = "Repeat Off";
        } else if (repeatMode === 1) {
            repeatBtn.classList.add('active');
            repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
            repeatBtn.title = "Repeat Playlist";
        } else if (repeatMode === 2) {
            repeatBtn.classList.add('active');
            // Change inside element to reflect a "1" repeat icon or just keep standard redesign
            repeatBtn.innerHTML = '<i class="fas fa-redo-alt"></i>';
            repeatBtn.title = "Repeat Track";
        }
    });

    // Seek bar drag & update audio
    myProgressBar.addEventListener('input', (e) => {
        const song = activePlaylist[currentSongIndex];
        const val = parseInt(e.target.value);
        const percent = val / parseInt(e.target.max);
        updateSliderProgress(myProgressBar, percent * 100);
        
        // Update label dynamically while dragging
        if (song && song.startTime !== undefined) {
            const virtualDur = song.endTime - song.startTime;
            currentTimeLabel.innerText = formatTime(percent * virtualDur);
        } else if (audioElement.duration) {
            currentTimeLabel.innerText = formatTime(percent * audioElement.duration);
        }
    });

    myProgressBar.addEventListener('change', (e) => {
        const song = activePlaylist[currentSongIndex];
        const val = parseInt(e.target.value);
        const percent = val / parseInt(e.target.max);
        
        if (song && song.startTime !== undefined) {
            const virtualDur = song.endTime - song.startTime;
            audioElement.currentTime = song.startTime + (percent * virtualDur);
        } else if (audioElement.duration) {
            audioElement.currentTime = percent * audioElement.duration;
        }
        
        // Resume play if playing
        if (isPlaying) {
            audioElement.play().catch(err => console.log(err));
        }
    });

    // Audio element dynamic progress callbacks
    audioElement.addEventListener('timeupdate', () => {
        const song = activePlaylist[currentSongIndex];
        if (!song) return;

        let currTime = audioElement.currentTime;
        let dur = audioElement.duration;

        if (song.startTime !== undefined) {
            // Virtual track bounds checking
            if (currTime < song.startTime) {
                audioElement.currentTime = song.startTime;
                currTime = song.startTime;
            }
            if (currTime >= song.endTime) {
                // Auto skip when segment finishes
                nextTrack();
                return;
            }
            
            const relativeCurr = currTime - song.startTime;
            const virtualDur = song.endTime - song.startTime;
            const percent = (relativeCurr / virtualDur) * 100;

            if (!audioElement.paused) {
                myProgressBar.value = Math.floor((relativeCurr / virtualDur) * 1000);
                updateSliderProgress(myProgressBar, percent);
                currentTimeLabel.innerText = formatTime(relativeCurr);
            }
        } else {
            // Normal track
            if (dur && !audioElement.paused) {
                const percent = (currTime / dur) * 100;
                myProgressBar.value = Math.floor((currTime / dur) * 1000);
                updateSliderProgress(myProgressBar, percent);
                currentTimeLabel.innerText = formatTime(currTime);
            }
        }
    });

    audioElement.addEventListener('loadedmetadata', () => {
        const song = activePlaylist[currentSongIndex];
        if (song && song.startTime !== undefined) {
            audioElement.currentTime = song.startTime;
            totalDurationLabel.innerText = formatTime(song.endTime - song.startTime);
        } else {
            totalDurationLabel.innerText = formatTime(audioElement.duration);
        }
    });

    audioElement.addEventListener('ended', () => {
        if (repeatMode === 2) {
            // Repeat track
            audioElement.currentTime = 0;
            playTrack();
        } else {
            // Check if it's the last song in playlist
            const isLastSong = currentSongIndex === activePlaylist.length - 1;
            
            if (isLastSong && repeatMode === 0 && !isShuffle) {
                // If it's the end of playlist, repeat mode is off and shuffle is off -> Stop
                pauseTrack();
            } else {
                nextTrack();
            }
        }
    });

    // Volume controllers
    volumeSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        audioElement.volume = val / 100;
        updateSliderProgress(volumeSlider, val);

        if (val === 0) {
            isMuted = true;
            volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            isMuted = false;
            savedVolume = audioElement.volume;
            
            if (val < 35) {
                volumeIcon.innerHTML = '<i class="fas fa-volume-down"></i>';
            } else {
                volumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        }
    });

    volumeIcon.addEventListener('click', () => {
        if (isMuted) {
            // Unmute
            isMuted = false;
            audioElement.volume = savedVolume;
            const volPercent = Math.floor(savedVolume * 100);
            volumeSlider.value = volPercent;
            updateSliderProgress(volumeSlider, volPercent);
            
            if (volPercent < 35) {
                volumeIcon.innerHTML = '<i class="fas fa-volume-down"></i>';
            } else {
                volumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        } else {
            // Mute
            isMuted = true;
            savedVolume = audioElement.volume;
            audioElement.volume = 0;
            volumeSlider.value = 0;
            updateSliderProgress(volumeSlider, 0);
            volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // Keyboard bindings (Space = Play/Pause, arrows = volume / track control)
    document.addEventListener('keydown', (e) => {
        // Prevent key events triggering when user typing search query
        if (document.activeElement === searchInput) return;
        
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight' && e.ctrlKey) {
            e.preventDefault();
            nextTrack();
        } else if (e.code === 'ArrowLeft' && e.ctrlKey) {
            e.preventDefault();
            prevTrack();
        } else if (e.code === 'ArrowUp') {
            e.preventDefault();
            let newVol = Math.min(audioElement.volume + 0.05, 1.0);
            audioElement.volume = newVol;
            volumeSlider.value = Math.floor(newVol * 100);
            updateSliderProgress(volumeSlider, volumeSlider.value);
            volumeIcon.innerHTML = newVol > 0.35 ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-down"></i>';
            isMuted = false;
        } else if (e.code === 'ArrowDown') {
            e.preventDefault();
            let newVol = Math.max(audioElement.volume - 0.05, 0.0);
            audioElement.volume = newVol;
            volumeSlider.value = Math.floor(newVol * 100);
            updateSliderProgress(volumeSlider, volumeSlider.value);
            if (newVol === 0) {
                volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
                isMuted = true;
            } else {
                volumeIcon.innerHTML = newVol > 0.35 ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-down"></i>';
                isMuted = false;
            }
        }
    });

    // Tab navigations
    navHome.addEventListener('click', (e) => { e.preventDefault(); switchTab('home'); });
    navSearch.addEventListener('click', (e) => { e.preventDefault(); switchTab('search'); });
    navLiked.addEventListener('click', (e) => { e.preventDefault(); switchTab('liked'); });

    // Search bar logic
    searchInput.addEventListener('input', (e) => {
        searchTracks(e.target.value.trim());
    });

    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchTracks('');
        searchInput.focus();
    });

    // Hero Play button
    heroPlayBtn.addEventListener('click', () => {
        if (currentSongIndex !== 0) {
            currentSongIndex = 0;
            loadSong(0, true);
        } else {
            togglePlay();
        }
    });

    // Player heart button toggles like status of the current song
    playerHeartBtn.addEventListener('click', () => {
        const currentSong = activePlaylist[currentSongIndex];
        if (currentSong) {
            toggleLike(currentSong.id);
        }
    });

    // Card plays (clicking cards on home tab loads playlists)
    document.querySelectorAll('.playlist-card').forEach(card => {
        card.addEventListener('click', () => {
            const playlistType = card.getAttribute('data-playlist');
            let filteredSongs = [];
            
            if (playlistType === 'ncs-hits') {
                filteredSongs = [songs[0], songs[1], songs[4], songs[5]];
            } else if (playlistType === 'chill') {
                filteredSongs = [songs[2], songs[3], songs[8]];
            } else if (playlistType === 'electro') {
                filteredSongs = [songs[6], songs[7], songs[9]];
            } else if (playlistType === 'workout') {
                filteredSongs = [songs[1], songs[5], songs[9]];
            } else if (playlistType === 'bollywood') {
                filteredSongs = songs.filter(s => s.id >= 11);
            } else {
                filteredSongs = [...songs];
            }

            activePlaylist = filteredSongs;
            currentSongIndex = 0;
            loadSong(0, true);
            
            // Switch view if it was list
            renderTracksList(activePlaylist, featuredTracksList);
        });
    });
};

// Category click delegate (e.g. from Search grid)
window.handleCategoryClick = (categoryName) => {
    if (categoryName === 'bollywood') {
        switchTab('search');
        searchInput.value = 'Kumar Sanu';
        searchTracks('Kumar Sanu');
    }
};

// 11. App Initialization
const init = () => {
    // Apply styling layouts
    setupEventListeners();
    
    // Switch to Home View initially
    switchTab('home');
    
    // Set initial ranges gradients
    updateSliderProgress(volumeSlider, volumeSlider.value);
    updateSliderProgress(myProgressBar, 0);

    // Pre-load first track silently without autoplay
    loadSong(0, false);
};

// Run when fully loaded
window.addEventListener('DOMContentLoaded', init);
