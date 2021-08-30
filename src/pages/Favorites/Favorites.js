import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Sidebar from "../../components/Sidebar/Sidebar";

class Favorites extends Component {
  removefromFavorites = () => {
    console.log("REMOVED");
  }

  render() {
    const { artists } = this.props
    return (
      <div>
        <Sidebar />
        <h1>Favorites</h1>
        <div>
          <input type="text" name="search" ref={this.search} placeholder="Find artist" autoComplete="off" onChange={this.handleSearch} />
          <Button text="Clear filter" handleClick={this.clearFilter} />
        </div>
        <ul className="artists_list">
          { artists.data.length > 0 && artists.data.map((el, index) => {
            if(el.isInFavorites) {
              if(!el.inSearchFilter) {
                return false
              }
            
              return (
                <li key={index} id={el.id}>
                  <Link to={`/artists/${el.id}`}>
                    {el.title}
                  </Link>
                  <Button text="Remove favorites" handleClick={this.removefromFavorites} />
                </li>
              )
            }
            return false
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

export default connect(mapStateToProps)(Favorites)
