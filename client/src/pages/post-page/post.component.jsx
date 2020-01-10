import React from "react";

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
        this.postId = props.match.params.id;
    }
    async componentDidMount() {
        const post = await fetch("http://www.onabeat.com/api/posts/" + this.postId);
        const postObj = await post.json();
        console.log(postObj)
        this.setState({ post: postObj })

    }

    render() {
        return (
            <div>
                hi</div>
        )
    }
}

export default PostPage;