import { useQuery } from '@tanstack/react-query'
import style from '../styles/gallery.module.scss'
import { graphQLClient } from '../graphqlClient'
import { getProducts } from '../requests/getProducts';

export const Gallery = () => {

    const {data, isInitialLoading, error, status} = useQuery(['getProducts'], async() => await graphQLClient.request(getProducts))

    if (isInitialLoading) return <h1>Loading....</h1>
    if (error) return <h1>Something went wrong..</h1>
    if (status == "success") return (
    <>
        <h2 className={style.galleryHeading}>Galleriet</h2>
        <section className={style.imageGallery}>
        {data?.productCollection?.items?.map((item, index) => {
            return (
                <img src={item.image.url} key={index}></img>
                )
            })}
        </section>
        </>
    )
}