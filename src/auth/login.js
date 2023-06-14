import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import LOGO from "../imges/logo.JPG";

const Login = () => {
    let navigator = useNavigate();
    document.body.style.backgroundColor = "rgb(245, 207, 132)";
    function onSubmit(reqObj) {
        navigator("/dashboard")
        console.log(reqObj);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <div className="d-flex align-items-center justify-content-center custom_height">            
                <Container>
                    <Row className="container">
                        <Col lg={5} md={6} sm={12} className="p-5 bgcolor shadow-lg rounded-lg brdr_redis">
                            {/* <Col>
                                <img src={LOGO} alt="Tech Saman Logo" style={{width: "-webkit-fill-available"}} />
                            </Col> */}
                            <Col className="txt_center">
                                <h1>Welcome!</h1>
                            </Col>
                            <Col className="mt-3 padding_lr_10 ">
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            {...register("email", { required: true })}
                                            type="email" 
                                            placeholder="Enter email" 
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        />
                                        {errors.email && <div className="invalid-feedback" style={{color:"red"}}>Email is required</div>}

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            {...register("password", { required: true })}
                                            type="password" 
                                            placeholder="Password"
                                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        />
                                        {errors.password && <div className="invalid-feedback" style={{color:"red"}}>Password is required</div>}
                                    </Form.Group>
                                    <Button className="addbtn mt-3 shadow-lg rounded-lg" variant="warning" type="submit">
                                        <strong>Login</strong>
                                    </Button>

                                </Form>
                            </Col>
                            <Col>
                                <p className="mt-4 text-center text-secondary"><a href="#" className="a_href">Forgot Password?</a></p>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <h6 className="mt-5 p-5 text-center text-secondary ">
                    2023 | All Rights Reserved.
                </h6>
            </div>
        </>
    );
};

export default Login;