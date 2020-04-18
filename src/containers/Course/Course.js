import React, { Component } from 'react';

class Course extends Component {
  state = {
    id: null,
    title: null
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    if (!this.state.id) {
      this.fetchData();
    }
  }

  componentDidUpdate() {
    console.log('ComponenDidUpdate');
    if (this.state.id !== this.props.match.params.id) {
      this.fetchData();
    }
  }

  fetchData() {
    console.log('Fetching the data from params');
    const queryStringParams = new URLSearchParams(this.props.location.search);
    const title = queryStringParams.get('title');
    this.setState({ id: this.props.match.params.id, title: title });
  }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;