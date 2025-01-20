import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

type Content = {
  _id: string;
  name: string;
  slug: { current: string };
  image:string,
  price:string
};

export default async function HomePage() {
  const query = `*[_type == "content"]{_id, title, slug}`;
  const contentList: Content[] = await client.fetch(query);

  return (
    <div>
       <h1>Content List</h1>
      <ul>
        {contentList.map((content) => (
          <li key={content._id}>
            <Image 
            src= {urlFor(content.image).url()}
            alt={content.name} 
          />
            <Link href={`/${content.slug.current}`}>
            
              {content.name}

            </Link>
              <p>{content.price}</p>
             
          </li>
        ))}
      </ul>
    </div>
  );
}
