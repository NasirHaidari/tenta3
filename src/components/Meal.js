import React from 'react'

const Meal = (props) => {
  const meal = props.meal
  console.log(meal)
  return (
    <div className='search-result col-lg-3 col-md-4 col-sm-6'>
      <div className='card bg-dark text-white mb-4'>
        <img src={meal.strMealThumb} class='card-img-top' alt={meal.strMeal} />
        <div className='card-body'>
          <h5 className='card-title'>{meal.strMeal}</h5>
          <h5 className='card-title'>Area: {meal.strArea}</h5>
          <a
            href={`https://www.themealdb.com/meal.php?c=${meal.idMeal}`}
            className='btn btn-primary'
            target='_blank'
            rel='noopener noreferrer'>
            Recipe &raquo;
          </a>{' '}
          <a
            href={meal.strYoutube}
            className='btn btn-danger'
            target='_blank'
            rel='noopener noreferrer'>
            youtube &raquo;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Meal
