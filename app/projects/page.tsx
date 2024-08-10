import request from 'graphql-request'
import ProjectCard from '@/components/ProjectComponents/ProjectCard'

interface ProjectDataTypes {
  projects: [{
    description: string
    projectImage: {
      url: string
    }
    title: string
    date: string
    demoLink: string
    sourceCode: string
    tags: string
  }]
}

const getProjectsData = async () => {
  const data = await request(
    process.env.NEXT_API_KEY!,
      `
      query Assets {
          projects {
            description
            projectImage {
              url
            }
            title
            date
            demoLink
            sourceCode
            tags
          }
        }
      `
  ) as ProjectDataTypes
  return data.projects
}

const page = async() => {
 const projectData = await getProjectsData()
  return (
    <main>
      <div className="lg:mx-20 md:mx-20 sm:mx-8 lg:mb-8 md:mb-8 home">
      <h1 className="font-semibold text-2xl lg:mb-12 md:mb-12">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-4 sm:gap-4">
        {projectData.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </div>
    </main>
  )
}

export default page
