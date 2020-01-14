import React from "react";
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
        const post = await fetch(`https://www.onabeat.com/api/posts/${this.state.postId}`);
        const postObj = await post.json();

        this.setState({ post: postObj });
        console.log(this.state.post)

    }

    render() {
        return (
            <div>
                {this.state.post.first ? <PostDisplay data={this.state.post} /> : null}

                {/* <div style={{ padding: 30, marginTop: 80 }}><span style={{ fontSize: 30 }}>Comments</span></div> */}
                <div style={{ marginTop: 60 }}>
                    <Button onClick={() => window.location.href = "https://www.onabeat.com"} variant="dark">Back to Feed</Button>
                </div>
            </div>


        )
    }
}
export default PostPage;

