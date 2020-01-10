import React from "react";

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            postId: props.match.params.id
        }
    }
    async componentDidMount() {
        console.log(this.state.postId);
        const post = await fetch(`http://www.onabeat.com/api/posts/${this.state.postId}`);
        const postObj = await post.json();
        this.setState({ post: postObj });

    }

    render() {
        return (
            <div>
                hi</div>
        )
    }
}

export default PostPage;