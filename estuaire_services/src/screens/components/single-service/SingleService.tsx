import { Link } from "react-router-dom"

type ServiceProps = {
  img: string,
  title: string,
  description: string,
  link: string,
  linkTitle: string
}

export default function SingleService({ img, title, description, link, linkTitle }: ServiceProps) {
  return (
    <div className="flex flex-col justify-between items-center shadow-lg hover:shadow-sm hover:scale-105 transition-all hover:shadow-blue mb-12 md:mb-0 rounded-md">
      <div className="flex flex-row mb-6">
        <img src={img} className="rounded-tl-md rounded-tr-md" alt="" />
      </div>
      <h3 className="text-xl font-semibold text-blue mb-6">{title}</h3>
      <p className="mx-6 text-center">
        {description}
      </p>
      <div className="flex flex-row justify-center items-center">
        <Link to={link} target="_blank" className="bg-blue px-8 py-3 text-white font-semibold hover:bg-purple transition-all rounded-md my-12">
          {linkTitle}
        </Link>
      </div>
    </div>
  )
}