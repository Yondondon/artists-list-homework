import React, { Component } from "react"
import { connect } from "react-redux"
import Loader from "../../components/Loader/Loader"
import Button from "../../components/Button/Button"
import Sidebar from "../../components/Sidebar/Sidebar"
import ArtistItem from "../../components/ArtistItem/ArtistItem"

class Dashboard extends Component {
  constructor() {
    super()
    this.search = React.createRef()
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({ type: "UPDATE_ARTISTS_LIST_LOADING" })
    fetch('/api/artists', {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify({pagination: 1})
    })
      .then(res => res.json())
      .then(res => {
        const newArray = res.map(el => {
          el.inSearchFilter = true
          el.isInFavorites = false
          return el
        })
        dispatch({ type: "UPDATE_ARTISTS_LIST", payload: newArray })
        dispatch({ type: "UPDATE_ARTISTS_LIST_SUCCESS" })
      })
  }

  handleSearch = (e) => {
    const { dispatch, artists } = this.props
    const inputValue = e.target.value.toLowerCase()
    const filtredArr = artists.data.map(el => {
      if(!el.title.toLowerCase().includes(inputValue)) {
        el.inSearchFilter = false
      } else {
        el.inSearchFilter = true
      }
      return el
    })
    dispatch({ type: "UPDATE_ARTISTS_LIST", payload: filtredArr })
  }

  clearFilter = () => {
    this.search.current.value = ''
    const { dispatch, artists } = this.props
    const newArray = artists.data.map(el => {
      el.inSearchFilter = true
      return el
    })
    dispatch({ type: "UPDATE_ARTISTS_LIST", payload: newArray })
  }

  render() {
    const { artists } = this.props
    if(!artists.loadedData) {
      return <Loader />
    }
    return (
      <div>
        <Sidebar />
        <h1>Dashboard</h1>
        <div>
          <input type="text" name="search" ref={this.search} placeholder="Find artist" autoComplete="off" onChange={this.handleSearch} />
          <Button text="Clear filter" handleClick={this.clearFilter} />
        </div>
        <ul className="artists_list">
          { artists.data.length > 0 && artists.data.map((el, index) => {
            if(!el.inSearchFilter) {
              return false
            }
            return (
              <ArtistItem key={index} item={el} />
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists,
  }
}

export default connect(mapStateToProps)(Dashboard)