"use client"
import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Youtube, Clock, TrendingUp, ArrowRight } from 'lucide-react'

interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  viewCount: string
  duration: string
}

export default function LatestVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardsContainer = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const CHANNEL_USERNAME = 'theinterra'
  const API_KEY = "AIzaSyAs1loqPmXB-lH9BgGOY_baxwAazErDH9I"

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelResponse = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=id,contentDetails&forUsername=${CHANNEL_USERNAME}&key=${API_KEY}`
        )
        const channelData = await channelResponse.json()

        if (!channelResponse.ok) {
          throw new Error(channelData.error?.message || 'Failed to fetch channel data')
        }

        if (!channelData.items || channelData.items.length === 0) {
          const searchResponse = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=id&q=${CHANNEL_USERNAME}&type=channel&key=${API_KEY}`
          )
          const searchData = await searchResponse.json()
          
          if (!searchResponse.ok || !searchData.items || searchData.items.length === 0) {
            throw new Error('Could not find channel')
          }
          
          channelData.items = [{ id: searchData.items[0].id.channelId }]
        }

        const channelId = channelData.items[0].id
        const playlistResponse = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
        )
        const playlistData = await playlistResponse.json()

        if (!playlistResponse.ok || !playlistData.items || playlistData.items.length === 0) {
          throw new Error('Could not find uploads playlist')
        }

        const uploadsPlaylistId = playlistData.items[0].contentDetails.relatedPlaylists.uploads
        const videosResponse = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${API_KEY}`
        )
        const videosData = await videosResponse.json()

        if (!videosResponse.ok || !videosData.items) {
          throw new Error('Failed to fetch videos')
        }

        const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',')
        const detailsResponse = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${API_KEY}`
        )
        const detailsData = await detailsResponse.json()

        if (!detailsResponse.ok || !detailsData.items) {
          throw new Error('Failed to fetch video details')
        }

        const enrichedVideos = videosData.items.map((item: any, index: number) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt,
          viewCount: detailsData.items[index].statistics.viewCount,
          duration: detailsData.items[index].contentDetails.duration
        }))

        setVideos(enrichedVideos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching videos:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (API_KEY && CHANNEL_USERNAME) {
      fetchVideos()
    } else {
      setError('Missing API key or Channel username')
      setIsLoading(false)
    }
  }, [API_KEY, CHANNEL_USERNAME])

  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    if (!match) return '00:00'

    const hours = (match[1] || '').replace('H', '')
    const minutes = (match[2] || '').replace('M', '')
    const seconds = (match[3] || '').replace('S', '')

    const parts = []
    if (hours) parts.push(hours.padStart(2, '0'))
    parts.push((minutes || '0').padStart(2, '0'))
    parts.push((seconds || '0').padStart(2, '0'))

    return parts.join(':')
  }

  const formatViewCount = (count: string) => {
    const num = parseInt(count)
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatPublishDate = (publishDate: string) => {
    const date = new Date(publishDate)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`
    if (days < 365) return `${Math.floor(days / 30)} months ago`
    return `${Math.floor(days / 365)} years ago`
  }

  const titleAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const cardAnimation = (index: number) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: 'easeOut'
      }
    }
  });

  if (isLoading) {
    return (
      <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="animate-pulse space-y-8"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-100 rounded-xl border border-gray-200" />
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 bg-red-50 px-4 py-2 rounded-lg inline-block"
          >
            Error loading videos: {error}
          </motion.p>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-16 relative"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 mb-6
                     bg-[#1B998B]/10 border border-[#1B998B]/20 
                     rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Youtube className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Latest Updates</span>
          </motion.div>

          <motion.div 
            {...titleAnimation}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mx-auto">
              <span className="text-gray-900">Latest </span>
              <motion.span 
                className="text-[#1B998B] inline-block"
                whileInView={{ 
                  scale: [1, 1.1, 1],
                  transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 }
                }}
              >
                Videos
              </motion.span>
            </h2>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ 
            y: cardsContainer,
            rotateX: cardRotate
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
        >
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              {...cardAnimation(index)}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-4 
                       border border-gray-200 hover:border-[#1B998B]/30 
                       transform hover:scale-[1.02] hover:-translate-y-1
                       shadow-sm hover:shadow-md transition-all duration-500"
            >
              <div className="relative rounded-xl overflow-hidden">
                <motion.img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"
                  whileHover={{ opacity: 0 }}
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1B998B]/90">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md 
                             bg-black/70 text-white text-sm
                             flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDuration(video.duration)}</span>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-[#1B998B] transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1B998B]" />
                    <span>{formatViewCount(video.viewCount)} views</span>
                  </div>
                  <span className="text-[#1B998B]">{formatPublishDate(video.publishedAt)}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href={`https://www.youtube.com/@${CHANNEL_USERNAME}`}
            className="inline-flex items-center gap-2 px-6 py-3 
                     bg-[#1B998B]/10 hover:bg-[#1B998B]/20 
                     border border-[#1B998B]/20 
                     rounded-xl text-[#1B998B] transition-all duration-300
                     group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View All Videos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}