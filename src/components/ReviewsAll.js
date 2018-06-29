import React from "react";
import axios from "axios";

class ReviewsAll extends React.Component {
  state = {
    ReviewsAllData: []
  };

  fetchReviewsAllData = () => {
    var encodeURI = window.encodeURI(this.props.uri);
    return axios.get(encodeURI).then(response => {
      this.setState(() => {
        return {
          ReviewsAllData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchReviewsAllData();
  }

  render() {
    if (this.state.ReviewsAllData.length === 0) {
      return <div>Failed to fetch files from server.</div>;
    }

    const ReviewsAll = this.state.ReviewsAllData.map(prfl => (
      <div key={revi._id}>
        <em>
          {revi.nameFirst} {revi.nameLast}
        </em>
      </div>
    ));

    return <div>{ReviewsAll}</div>;
  }
}

export default ReviewsAll;
