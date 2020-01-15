import React from "react";
import PostDisplay from "../../components/post-display/post-display.component"
import { Button } from "react-bootstrap"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./post.styles.scss"

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            postId: props.match.params.id,
            shareCheck: false
        }
    }
    async componentDidMount() {
        console.log(this.state.postId);
        const post = await fetch(`https://www.onabeat.com/api/posts/${this.state.postId}`);
        const postObj = await post.json();

        this.setState({ post: postObj });
        console.log(this.state.post)

    }
    handleCopy = () => {
        navigator.clipboard.writeText(`https://www.onabeat.com/post/${this.state.postId}`)
        this.setState({ shareCheck: true })
    }


    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontWeight: "bold", color: "red" }}>Thank you for sharing this post!</p>

                {/* <span clasName="share-link" style={{ fontWeight: "bold" }}>https://wwww.onabeat.com/post/{this.state.postId}</span> */}
                <CopyToClipboard text={`https://www.onabeat.com/post/${this.state.postId}`} onCopy={() => this.setState({ shareCheck: true })}>
                    <Button className="copy-button">Click to Copy Link</Button>
                </CopyToClipboard >
                {this.state.shareCheck ? <span style={{ marginTop: 15 }}>Copied! Now just paste somewhere :)</span> : null}

                {this.state.post.first ? <PostDisplay data={this.state.post} /> : null}

                {/* <div style={{ padding: 30, marginTop: 80 }}><span style={{ fontSize: 30 }}>Comments</span></div> */}
                <div style={{ marginTop: 60 }}>
                    <Button onClick={() => window.location.href = "https://www.onabeat.com"} variant="dark">Back to Feed</Button>
                </div>
            </div >


        )
    }
}
export default PostPage;

