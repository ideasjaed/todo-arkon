import { Grid, Container } from "@material-ui/core/";
import ListTasksComplete from "../components/ListTasksComplete";

export default function History() {
  return (
    <Container>
      <Grid className="contenedor__agregartarea">
        <ListTasksComplete />
      </Grid>
    </Container>
  );
}
