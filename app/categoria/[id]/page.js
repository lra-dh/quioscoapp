import { notFound } from 'next/navigation';

const Page = ({ params }) => {

  return (
    <div>{params.id}</div>
  )
}

export default Page