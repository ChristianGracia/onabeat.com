import React from "react";
import ContentBlockPlayer from "../../components/content-block-player/content-block-player.component";
import PostDisplay from "../../components/post-display/post-display.component"
import { Button } from "react-bootstrap"
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
        console.log(this.state.post)

    }

    render() {
        return (
            <div>
                {this.state.post.first ? <PostDisplay data={this.state.post} /> : null}
                <Button onClick={() => window.location.href = "http://www.onabeat.com"} variant="dark">Back to Feed</Button>
            </div>


        )
    }
}
export default PostPage;

