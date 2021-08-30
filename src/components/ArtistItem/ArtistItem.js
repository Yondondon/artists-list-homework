import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

class ArtistItem extends Component {
  addToFavorites = (e) => {
    const { dispatch, artists } = this.props
    const itemId = e.target.closest("li").id
    const newArray = artists.data.map(el => {
      if(el.id === Number(itemId)) {
        el.isInFavorites = true
      }
      return el
    })
    dispatch({ type: "UPDATE_ARTISTS_LIST", payload: newArray })
  }

  render() {
    const { item, isShowFull } = this.props

    // shows single artist page
    if(isShowFull) {
      return (
        <div className="artist_item">
          { item && 
            <React.Fragment>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <br />
              <Link to="/dashboard">Go to Dashboard</Link>
            </React.Fragment>
          }
        </div>
      )
    }

    //shows artist items in list
    return (
      <li id={item.id}>
        <Link to={`/artists/${item.id}`}>
          {item.title}
        </Link>
        { item.isInFavorites ? " Added" : <Button text="Add to favorites" handleClick={this.addToFavorites} />}
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists,
  }
}

export default connect(mapStateToProps)(withRouter(ArtistItem))