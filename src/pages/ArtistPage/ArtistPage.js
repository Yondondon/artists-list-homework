import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import ArtistItem from "../../components/ArtistItem/ArtistItem";

class ArtistPage extends Component {
  componentDidMount() {
    const { dispatch, match: { params } } = this.props
    fetch(`/api/artists/${params.artistsId}`)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "UPDATE_ARTIST_ITEM", payload: res })
    })
  }
  render() {
    const { artist_item } = this.props
    return (
      <ArtistItem item={artist_item} isShowFull />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artist_item: state.artist_item
  }
}

export default withRouter(connect(mapStateToProps)(ArtistPage))