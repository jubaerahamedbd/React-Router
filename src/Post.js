import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {
    constructor() {
        super()
        this.state = {
            postData: "",
            postResult: ""
        }
    }
    onChangeHandler = event => {
        this.setState({
            postData: event.target.value
        })
    }
    onClickHandler = () => {
        axios.post('url', this.state.postData).then(
            response => {
                this.setState({ postResult: response.data })
                alert(this.state.postData)
            }
        ).catch(
            alert("Something Wrong")
        )
    }
    render() {
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text" />
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
}

export default Post;