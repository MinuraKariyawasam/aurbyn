"use client"
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Youtube, MessageSquare, Heart, Quote } from 'lucide-react'
interface Comment {
id: string
authorName: string
authorProfileImage: string
textDisplay: string
likeCount: number
videoTitle: string
}
const containsAppreciation = (text: string): boolean => {
const appreciationPhrases = [
'thank you', 'thanks', 'grateful', 'appreciate', 'helped me', 'helpful',
'amazing content', 'great content', 'good', 'valuable', 'another level'
]
return appreciationPhrases.some(phrase => text.toLowerCase().includes(phrase))
}
export default function Testimonials() {
const [comments, setComments] = useState<Comment[]>([])
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
const sectionRef = useRef(null);
const { scrollYProgress } = useScroll({
target: sectionRef,
offset: ['start end', 'end start']
});
const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100]);
const cardsRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
const CHANNEL_USERNAME = 'theinterra'
const API_KEY = "AIzaSyAs1loqPmXB-lH9BgGOY_baxwAazErDH9I"
useEffect(() => {
const fetchComments = async () => {
try {
const channelResponse = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=id,contentDetails&forUsername=${CHANNEL_USERNAME}&key=${API_KEY}`
)
const channelData = await channelResponse.json()
    if (!channelResponse.ok || !channelData.items?.[0]) {
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
    const videosResponse = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=10&key=${API_KEY}`
    )
    const videosData = await videosResponse.json()

    if (!videosResponse.ok || !videosData.items) {
      throw new Error('Failed to fetch videos')
    }

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
            containsAppreciation(comment.textDisplay) &&
            comment.textDisplay.length >= 20 &&
            !comment.textDisplay.includes('http')
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
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)

    setComments(flattenedComments)
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred')
    console.error('Error fetching comments:', err)
  } finally {
    setIsLoading(false)
  }
}

if (API_KEY && CHANNEL_USERNAME) {
  fetchComments()
} else {
  setError('Missing API key or Channel username')
  setIsLoading(false)
}
}, [API_KEY, CHANNEL_USERNAME])
if (isLoading) {
return (
<section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[1, 2, 3, 4, 5, 6].map((i) => (
<motion.div
key={i}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: i * 0.1 }}
className="animate-pulse"
>
<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
<div className="h-24 bg-gray-100 rounded-xl mb-6"/>
<div className="flex items-center">
<div className="w-12 h-12 bg-gray-100 rounded-full mr-4"/>
<div>
<div className="h-4 w-24 bg-gray-100 rounded mb-2"/>
<div className="h-3 w-32 bg-gray-100 rounded"/>
</div>
</div>
</div>
</motion.div>
))}
</div>
</motion.div>
</section>
)
}
if (error) {
return (
<section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center"
>
<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="text-red-600 bg-red-50 px-6 py-3 rounded-xl inline-block"
>
Error loading testimonials: {error}
</motion.p>
</motion.div>
</section>
)
}
return (
<section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<motion.div
style={{ y: headerY }}
className="text-center mb-20"
>
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
className="inline-flex items-center justify-center px-4 py-2 mb-6
bg-[#1B998B]/10 border border-[#1B998B]/20
rounded-full transform hover:scale-105 transition-transform duration-300"
>
<MessageSquare className="w-4 h-4 text-[#1B998B]" />
<span className="ml-2 text-sm font-medium text-[#1B998B]">Community Feedback</span>
</motion.div>
Copy      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
      >
        <span className="text-gray-900">What Our </span>
        <motion.span 
          className="text-[#1B998B]"
          whileInView={{
            scale: [1, 1.1, 1],
            transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 }
          }}
        >
          Community Says
        </motion.span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
      >
        Real feedback from our engaged community members
      </motion.p>
    </motion.div>
    
    <motion.div 
      style={{ 
        y: cardsY,
        rotateX: cardsRotate
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
    >
      {comments.map((comment, index) => (
        <motion.div 
          key={comment.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white rounded-2xl p-8
                   border border-gray-200 hover:border-[#1B998B]/30
                   shadow-sm hover:shadow-md
                   transform hover:translate-y-[-4px] hover:scale-[1.02] 
                   transition-all duration-500"
        >
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-xl 
                         bg-[#1B998B]/10 group-hover:bg-[#1B998B]/20
                         transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-[#1B998B]" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mt-6 text-gray-600 leading-relaxed"
            >
              {comment.textDisplay}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mt-8 pt-4 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={comment.authorProfileImage} 
                    alt={comment.authorName}
                    className="w-10 h-10 rounded-full ring-2 ring-[#1B998B]/20"
                  />
                  <div>
                    <h4 className="text-gray-900 font-medium group-hover:text-[#1B998B] transition-colors">
                      {comment.authorName}
                    </h4>
                    <p className="text-sm text-gray-500">on YouTube</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[#1B998B]">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{comment.likeCount}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.25 }}
              className="mt-4 flex items-center gap-2 text-sm text-gray-500"
            >
              <Youtube className="w-4 h-4 text-[#1B998B]" />
              <span className="truncate">{comment.videoTitle}</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
)
}