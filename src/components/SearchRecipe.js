import React from 'react'

class SearchRecipe extends React.Component {
  state = {
    value: '',
  }

  submitHandel = (e) => {
    e.preventDefault()
    this.props.SearchRecipe(this.state.value)
    this.setState({ value: '' })
  }

  handleOnchange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div id='SearchRecipe' className='mb-5'>
        <form onSubmit={this.submitHandel}>
          <div className='input-group'>
            <input
              onChange={this.handleOnchange}
              type='text'
              className='form-control form-control-lg'
              id='query'
            />

            <div className='input-group-append'>
              <button type='submit' className='btn btn-success btn-lg'>
                Search
              </button>
              <button
                type='reset'
                className='btn btn-warning btn-lg'
                onClick={this.props.clearPage}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchRecipe
