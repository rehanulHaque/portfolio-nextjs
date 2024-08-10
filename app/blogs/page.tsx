import BlogCard from '@/components/BlogComponents/BlogCard'
import request from 'graphql-request'

interface BlogDataTypes {
  blogs: [{
    id: string
    image: {
      url: string
    }
    miniDescription: string
    title: string
    blogUrl: string
    body: {
      html: string
    }
  }]
}

const getBlogsData = async () => {
  const data = await request(
    process.env.NEXT_API_KEY!,
      `
      query Assets {
          blogs {
            id
            image {
              url
            }
            miniDescription
            title
            blogUrl
            body {
              html
            }
          }
        }
      `
  ) as BlogDataTypes
  return data.blogs
}


const Blogs = async() => {
  const blogData = await getBlogsData()
  return (
    <div className="lg:mx-20 md:mx-20 sm:mx-8 lg:mb-8 md:mb-8 home">
      <h1 className="font-semibold text-2xl lg:mb-12 md:mb-12">Blog</h1>
      <div className="">
        {blogData.map((blog) =>{
          return(
            <BlogCard key={blog.id} blog={blog}/>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs
