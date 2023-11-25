import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Stack, Button } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Stack direction="horizontal" gap="3" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
    </Container>
  );
}

export default App;
