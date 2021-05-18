import { Grid, Container } from "@material-ui/core/";
import "../styles/App.css";
import ListTasks from "../components/ListTasks";

function Index() {
  return (
    <Container>
      <Grid className="contenedor__agregartarea">
        <ListTasks />
      </Grid>
    </Container>
  );
}

export default Index;
