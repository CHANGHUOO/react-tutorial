/**
 * Created by HC on 16/10/13.
 */
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello!
            </div>
        )
    }
})

React.render(<CommentBox/>,document.getElementById('content'))