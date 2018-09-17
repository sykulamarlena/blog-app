import React, {Component} from "react";
import {connect} from 'react-redux';
import counterpart from "counterpart";
import {Col, Grid, Row} from 'react-flexbox-grid';
import TablePagination from "@material-ui/core/TablePagination";
import history from "../store/history";
import PostsActions from "../actions/PostsActions";
import PostContent from "../components/Pages/Posts/PostContent";
import PostSearch from "../components/Pages/Posts/PostSearch";

class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialItems: [],
            items: [],
            search: '',
            loading: false,
            page: 0,
            rowsPerPage: 5
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        Promise.resolve()
            .then(() => this.getPosts())
            .then(() => this.setState({items: this.props.posts, initialItems: this.props.posts, loading: false}));
    }

    getPosts() {
        const actions = new PostsActions();
        return actions.getPosts();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const newPage = parseInt(nextProps.match.params.pageNumber, 10);

        if (newPage !== this.state.page) {
            this.setState({page: newPage});
        }
    }

    handleChangePage = (event, page) => {
        this.changeHistory(page);
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.changeHistory(0);

        this.setState({rowsPerPage: event.target.value, page: 0});
    };

    filterList = (event) => {
        let updatedList = [...this.state.initialItems];
        const searchText = event.target.value;

        updatedList = updatedList.filter((item) => {
            return item.title.toLowerCase().search(
                searchText.toLowerCase()) !== -1;
        });

        this.changeHistory(0);
        this.setState({search: searchText, items: updatedList});
    };

    changeHistory = (page) => {
        if (page !== this.state.page) {
            const target = `/dashboard/posts/${page}`;
            history.push({pathname: target});
        }
    };

    render() {
        const {page, rowsPerPage, loading} = this.state;
        const posts = this.state.items || [];
        const emptyRows = posts.length === 0;

        return (
            <Grid className='box'>
                <PostSearch search={this.state.search} filterList={this.filterList}/>

                {!loading && emptyRows && (
                    <p className='titleNoContent'>{counterpart('app.posts.empty')}</p>
                )}

                <section>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            {(posts.length >= 5) && posts
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((post, index) =>
                                    <PostContent post={post} key={post.id} index={index}/>
                                )
                            }

                            {(posts.length < 5) && posts.map(post =>
                                <PostContent post={post} key={post.id}/>
                            )}

                            {!loading && !emptyRows && (
                                <TablePagination
                                    className='pagination'
                                    component="div"
                                    count={posts.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    backIconButtonProps={{
                                        'aria-label': 'Previous Page',
                                    }}
                                    nextIconButtonProps={{
                                        'aria-label': 'Next Page',
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                />
                            )}
                        </Col>
                    </Row>
                </section>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(PostsList)

