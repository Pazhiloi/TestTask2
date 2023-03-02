import { Grid, Paper, Typography, IconButton, makeStyles, Container, CircularProgress } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deletePost, fetchPosts, Post, selectNextPage, selectPosts, selectStatus } from '../features/news/newsSlice';
import { selectError } from '../features/news/newsSlice';
// here we use useStyles hook that helps us to use inline styles instead of using css files
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  deleteButton: {
    marginLeft: theme.spacing(2),
  },
  loadMoreButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  loadingContainer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

const useNews = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const nextPage = useAppSelector(selectNextPage);

  // this function delete post by his id
  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };
  // this function load more posts
  const handleLoadMore = () => {
    if (nextPage) {
      dispatch(fetchPosts(nextPage));
    }
  };
  // this function render posts
  const renderPosts = () => {
    return posts.map((post: Post, i: number) => (
      <Grid item xs={12} key={post.id + i}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1">{post.body}</Typography>
          <IconButton
            className={classes.deleteButton}
            onClick={() => handleDelete(post.id)}
          >
            <Delete />
          </IconButton>
        </Paper>
      </Grid>
    ));
  };
  const renderContent = () => {
    // below we are cheking and rendering content depends on status
    if (status === "loading") {
      return (
        <Container className={classes.loadingContainer}>
          <CircularProgress />
        </Container>
      );
    }

    if (status === "failed") {
      return (
        <Container className={classes.loadingContainer}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Container>
      );
    }

    return (
      <>
        <Grid container spacing={2}>
          {renderPosts()}
        </Grid>
        {nextPage && (
          <Container className={classes.loadMoreButton}>
            <IconButton onClick={handleLoadMore}>
              <Typography variant="body1">Load more</Typography>
            </IconButton>
          </Container>
        )}
      </>
    );
  };
  return { renderContent };
};

export default useNews;