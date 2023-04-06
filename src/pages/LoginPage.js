import { mdiAccount, mdiLock } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Form, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./LoginPage.css";
// import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const navigate = useNavigate();

  return (
    <div className="full_blue_bg">
      {/* <Container> */}
      <Row className="justify-content-md-center main_row">
        <Col sm={3} md={3} lg={4} style={{ paddingTop: "3%" }}></Col>
        <Col sm={6} md={6} lg={4} style={{ paddingTop: "3%" }}>
          <Row style={{ paddingTop: "10%" }}>
            <h3 className="primary-header">Customer Loans Management System</h3>
          </Row>
          <Row>
            <Card className="login_card">
              <Row>
                <Col sm={2} md={2} lg={2}></Col>
                <Col sm={8} md={8} lg={8}>
                  <Card.Title id="card_title_custom">
                    Please enter your credentials to login
                  </Card.Title>
                </Col>
                <Col sm={2} md={2} lg={2}></Col>
              </Row>

              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Row>
                      <Col id="input_icon" sm={2} md={2} lg={2}>
                        <Icon
                          path={mdiAccount}
                          title="User Profile"
                          size={1}
                          horizontal
                          color="grey"
                        />
                      </Col>
                      <Col sm={10} md={10} lg={10}>
                        <Form.Control
                          id="b_boarder_input"
                          placeholder="Username/Email/Phone"
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Row>
                      <Col
                        id="input_icon"
                        sm={2}
                        md={2}
                        lg={2}
                        style={{ marginTop: "15px" }}
                      >
                        <Icon
                          path={mdiLock}
                          title="User Profile"
                          size={1}
                          horizontal
                          color="grey"
                        />
                      </Col>
                      <Col
                        sm={10}
                        md={10}
                        lg={10}
                        style={{ marginTop: "15px" }}
                      >
                        <Form.Control
                          id="b_boarder_input"
                          type="password"
                          placeholder="Password"
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Row style={{ marginTop: "10%" }}>
                    <Col sm={12} md={2} lg={2}></Col>
                    <Col sm={12} md={10} lg={10}>
                      <Button
                        id="login_btn"
                        className="login_btn"
                        as={Link}
                        to="/administrator-dashboard"
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} md={6} lg={6}></Col>
                    <Col sm={12} md={6} lg={6} style={{ paddingLeft: "77px" }}>
                      {" "}
                      <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                          <Nav.Link href="/" id="f_p_link">
                            Forgot password?
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col sm={3} md={3} lg={4} style={{ paddingTop: "3%" }}></Col>
      </Row>
    </div>
  );
};

export default LoginPage;
