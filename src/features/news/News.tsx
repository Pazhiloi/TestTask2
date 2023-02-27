import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import {
  fetchPosts,
  deletePost,
  selectPosts,
  selectStatus,
  selectError,
  selectNextPage,
} from "./newsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
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

const News = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const nextPage = useAppSelector(selectNextPage);

  useEffect(() => {
    dispatch(fetchPosts(1));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (nextPage) {
      dispatch(fetchPosts(nextPage));
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const renderPosts = () => {
    return posts.map((post) => (
      <Grid item xs={12} key={post.id}>
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

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" gutterBottom>
        News
      </Typography>
      {renderContent()}
    </Container>
  );
};

export default News;
