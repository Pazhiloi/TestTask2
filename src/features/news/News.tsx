import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
} from "@material-ui/core";
import {
  fetchPosts,
} from "./newsSlice";
import { useAppDispatch } from "../../app/hooks";
import useNews from "../../utils/newsUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

const News = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {renderContent} = useNews()
  useEffect(() => {
    dispatch(fetchPosts(1));
  }, [dispatch]);
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
