import { useRouter } from 'next/router';
import styles from '../../styles/Photos.module.css';
import Image from 'next/image'

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return {
      props: {
        photos: data
      }
    }
  }

function index({ photos }) {
    const router = useRouter();

    const goBack = () => {
        router.push('/');
    }

    return (
        <div className="container">
            <h2 ><span onClick={() => goBack()}><img src="https://img.icons8.com/android/24/000000/back.png"/></span>Photos</h2>
            <div className={styles.photoscontainer}>
            {photos && photos.map(x => {
                return (
                    <div className={styles.photoCard} key={x.id}>
                        <Image src={x.thumbnailUrl} height="150" width="150"></Image>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default index
