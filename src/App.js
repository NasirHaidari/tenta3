import React from 'react'
import SearchRecipe from './components/SearchRecipe'
import Meal from './components/Meal'

class App extends React.Component {
  state = {
    errorMessage: false,
    meals: null,
    noMeal: false,
  }

  clearPage = () => {
    this.setState({ meals: '' })
    this.setState({ noMeal: false })
  }

  SearchRecipe = async (value) => {
    this.setState({
      noMeal: true,
    })
    const req = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    )
    const data = await req.json()

    if (data.meals) {
      this.setState({
        meals: data.meals,
      })
      this.setState({
        noMeal: false,
      })
    } else {
      this.setState({
        noMeal: true,
      })
    }
  }

  render() {
    return (
      <div id='app'>
        <div className='container my-5'>
          <h1 className='text-center mb-5'>
            <span role='img' aria-label='Food?'>
              🍴😋❔
            </span>
          </h1>

          <SearchRecipe
            SearchRecipe={this.SearchRecipe}
            clearPage={this.clearPage}
          />

          <div id='search-results' className='row'>
            {this.state.meals &&
              this.state.meals.map((meal) => <Meal meal={meal} />)}
            {this.state.noMeal === true ? (
              <h1 className='bg-red'>
                there is no food with this name in our database, please try
                again!
              </h1>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
