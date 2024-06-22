import Header from '../components/Header'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../App'
import sorts from '../data/sort.json'
import { Skeleton } from '../components/PizzaSkeleton'

function HomePage() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const [query, setQuery] = useState('')
  console.log('Dark mode is', isDarkMode);
  const [pizzas, setPizzas] = useState(null)
  const [status, setStatus] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(1)
  const [currentSorts, setCurrentSorts] = useState(1)

  const fetchPizzas = async () => {
    setStatus('pending')
    const sort = sorts[currentSorts].value.replace('-', '')
    const order = sorts[currentSorts].value.includes('-') ? 'asc' : 'desc'
    const url = new URL(`https://6367b246edc85dbc84d9ba5d.mockapi.io/products`)
    url.searchParams.append('category', currentCategory)
    url.searchParams.append('sortBy', sort)
    url.searchParams.append('order', order)
    url.searchParams.append('title', query)
      
    try {
      const response = await fetch(url)
      if (!response.ok, response.status === 404) {
        setStatus('error')
        return new Error('ERROR')
      }
      const result = await response.json()
      setPizzas(result)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      return new Error('ERROR')
    }
  }

  useEffect(() => {
    fetchPizzas()
  }, [currentCategory, currentSorts, query])

  const pizzasComponent = {
    success:
      pizzas?.map((item) =>
        <PizzaBlock
          title = {item.title}
          img = {item.image}
          key = {item._id}
          price = {item.price}
          dough = {item.dough}
          size = {item.size}
          description={item.description}
        />),
    pending:
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>,
    idle:
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>,
    error: <>
        <img src="https://web-promo.ua/wp-content/uploads/2023/06/e11044b915dc39afc3004430606bd6d1.jpg" alt="" />
    </>
  }

  return (
    <div style={isDarkMode ? {background: '#ccc'} : {}} className="wrapper" >
      <Header setQuery={setQuery} />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories current={currentCategory} setCurrent={setCurrentCategory}/>
            <Sort current={currentSorts} sorts={sorts} setCurrent={setCurrentSorts}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasComponent[status]}
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomePage;
