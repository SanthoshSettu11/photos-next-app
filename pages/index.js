import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await res.json();
  return {
    props: {
      albums: data
    }
  }
}

export default function Home({ albums }) {
  return (
    <div className="container">
      {albums && albums.map((album, index) => {
        return <Link href={`photos/${album.id}`} ><div className={styles.albumcard} key={album.id}>{album.title}</div></Link>
      })}
    </div>
  )
}
