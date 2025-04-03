import Nav from "react-bootstrap/Nav";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#/Labs">Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab4">Lab 4</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab5">Lab 5</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://kambaz-node-server-app-harshita.onrender.com">
          Node - Render.com link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item id="wd-react-github">
        <Nav.Link href="https://github.com/jayasriharshitakoneti/kambaz-react-web-app">
          React Code repo link
        </Nav.Link>
      </Nav.Item>
      <Nav.Item id="wd-node-github">
        <Nav.Link href="https://github.com/jayasriharshitakoneti/kambaz-node-server-app.git">
          Node Code repo link
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
