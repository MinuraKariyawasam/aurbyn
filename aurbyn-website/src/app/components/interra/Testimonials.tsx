"use client"
import { useEffect, useState } from 'react'
import { Youtube, MessageSquare, Heart, Quote, Sparkles } from 'lucide-react'

interface Comment {
  id: string
  authorName: string
  authorProfileImage: string
  textDisplay: string
  likeCount: number
  videoTitle: string
}

// Helper function to check for appreciation phrases
const containsAppreciation = (text: string): boolean => {
  const appreciationPhrases = [
    'thank you',
    'thanks',
    'grateful',
    'appreciate',
    'helped me',
    'helpful',
    'amazing content',
    'great content',
    'good',
    'valuable',
    'another level'
  ]
  const lowerText = text.toLowerCase()
  return appreciationPhrases.some(phrase => lowerText.includes(phrase))
}

export default function Testimonials() {
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const CHANNEL_USERNAME = 'theinterra'
  const API_KEY = "AIzaSyB10jAFUAjixtfBZaWnJqzLbbmWNAKj_NY"

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // First, get the channel ID
        const channelResponse = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=id,contentDetails&forUsername=${CHANNEL_USERNAME}&key=${API_KEY}`
        )
        const channelData = await channelResponse.json()

        if (!channelResponse.ok || !channelData.items?.[0]) {
          // Try searching for the channel if username lookup fails
          const searchResponse = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=id&q=${CHANNEL_USERNAME}&type=channel&key=${API_KEY}`
          )
          const searchData = await searchResponse.json()
          
          if (!searchResponse.ok || !searchData.items?.[0]) {
            throw new Error('Could not find channel')
          }
          
          channelData.items = [{ id: searchData.items[0].id.channelId }]
        }

        const channelId = channelData.items[0].id

        // Get channel's videos (we'll get more since we're filtering for specific comments)
        const videosResponse = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=10&key=${API_KEY}`
        )
        const videosData = await videosResponse.json()

        if (!videosResponse.ok || !videosData.items) {
          throw new Error('Failed to fetch videos')
        }

        // Fetch comments from each video
        const commentsPromises = videosData.items.map(async (video: any) => {
          const videoId = video.id.videoId
          const commentsResponse = await fetch(
            `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&key=${API_KEY}`
          )
          const commentsData = await commentsResponse.json()

          if (!commentsResponse.ok || !commentsData.items) {
            return []
          }

          return commentsData.items
            .filter((item: any) => {
              const comment = item.snippet.topLevelComment.snippet
              return (
                containsAppreciation(comment.textDisplay) && // Contains appreciation
                comment.textDisplay.length >= 20 && // Minimum length
                !comment.textDisplay.includes('http') // No links
              )
            })
            .map((item: any) => ({
              id: item.id,
              authorName: item.snippet.topLevelComment.snippet.authorDisplayName,
              authorProfileImage: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
              textDisplay: item.snippet.topLevelComment.snippet.textDisplay,
              likeCount: item.snippet.topLevelComment.snippet.likeCount,
              videoTitle: video.snippet.title
            }))
        })

        const allComments = await Promise.all(commentsPromises)
        const flattenedComments = allComments
          .flat()
          .sort(() => Math.random() - 0.5) // Randomly shuffle
          .slice(0, 6) // Take 3 random appreciation comments

        setComments(flattenedComments)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching comments:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [API_KEY, CHANNEL_USERNAME])

  if (isLoading) {
    return (
      <section className="relative py-32 bg-[#2E294E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#221f38] to-[#2E294E]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-[#2E294E]/50 backdrop-blur-xl p-8 rounded-2xl border border-[#1B998B]/10">
                  <div className="h-24 bg-[#1B998B]/5 rounded-xl mb-6"/>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#1B998B]/10 rounded-full mr-4"/>
                    <div>
                      <div className="h-4 w-24 bg-[#1B998B]/10 rounded mb-2"/>
                      <div className="h-3 w-32 bg-[#1B998B]/10 rounded"/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="relative py-32 bg-[#2E294E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-red-400 bg-red-400/10 px-6 py-3 rounded-xl inline-block">
            Error loading testimonials: {error}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-32 bg-[#2E294E] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#221f38] to-[#2E294E]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B998B]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B998B]/3 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6
                       bg-[#1B998B]/10 backdrop-blur-sm border border-[#1B998B]/20 
                       rounded-full transform hover:scale-105 transition-transform duration-300">
            <MessageSquare className="w-4 h-4 text-[#1B998B]" />
            <span className="ml-2 text-sm font-medium text-[#1B998B]">Community Feedback</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">What Our </span>
            <span className="text-[#1B998B]">Community Says</span>
          </h2>
          
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Real feedback from our engaged community members
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comments.map((comment) => (
            <div 
              key={comment.id} 
              className="group relative bg-[#2E294E]/50 backdrop-blur-xl rounded-2xl p-8
                       border border-[#1B998B]/10 hover:border-[#1B998B]/30
                       transform hover:translate-y-[-4px] hover:scale-[1.02] 
                       transition-all duration-500"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1B998B]/20 via-transparent to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative">
                {/* Quote Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                             bg-[#1B998B]/10 group-hover:bg-[#1B998B]/20
                             transform group-hover:scale-110 transition-all duration-300">
                  <Quote className="w-6 h-6 text-[#1B998B]" />
                </div>

                {/* Testimonial Text */}
                <p className="mt-6 text-gray-300/90 leading-relaxed">
                  {comment.textDisplay}
                </p>

                {/* Author Info */}
                <div className="mt-8 pt-4 border-t border-[#1B998B]/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={comment.authorProfileImage} 
                        alt={comment.authorName}
                        className="w-10 h-10 rounded-full ring-2 ring-[#1B998B]/20"
                      />
                      <div>
                        <h4 className="text-white font-medium group-hover:text-[#1B998B] transition-colors">
                          {comment.authorName}
                        </h4>
                        <p className="text-sm text-gray-400">on YouTube</p>
                      </div>
                    </div>
                    
                    {/* Engagement Indicator */}
                    <div className="flex items-center gap-2 text-[#1B998B]">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{comment.likeCount}</span>
                    </div>
                  </div>
                </div>

                {/* Video Title */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <Youtube className="w-4 h-4 text-[#1B998B]" />
                  <span className="truncate">{comment.videoTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}