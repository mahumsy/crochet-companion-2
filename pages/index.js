import styles from '../styles/Home.module.css'

export default function Home() {

  const addFavorite = async () => {
    const result = await supermario({
      body: { action: 'addFavorite' } 
    })
    console.log(result)
  }
  return (
    <div className={styles.home}>
       <h2>Welcome to Gaming Vibes</h2>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id.</p>
        <button onClick={addFavorite}>
           Add to Favorites
        </button>    
      </div>
    </div>
  )
}
