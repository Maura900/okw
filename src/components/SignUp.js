import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal } from 'bootstrap';
import React, { useState } from "react"

const UserNew = ({ searchParams, setSearchParams, title, onSave }) => {
    const [show, setShow] = useState(searchParams && true);

    const init = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
    };
    const [userItem, setUserItem] = useState(init);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValid, setIsValid] = useState([]);

    const onClose = () => {
        setSearchParams({});
        setShow(false);
    };
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group classname="mb-3">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control value={userItem.lastname}
                            onChange={(e) => {
                                setUserItem({ ...userItem, lastname: e.target.value });
                            }}
                            type="text" />
                    </Form.Group>
                    <Form.Group classname="mb-3">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control value={userItem.firstname}
                            onChange={(e) => {
                                setUserItem({ ...userItem, firstname: e.target.value });
                            }}
                            type="text" />
                    </Form.Group>
                    <Form.Group classname="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            value={userItem.username}
                            onChange={(e) => {
                                setUserItem({ ...userItem, username: e.target.value });
                            }}
                            type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={userItem.password}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setUserItem({ ...userItem, password: e.target.value });
                                const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])/g);
                                const regex1 = new RegExp(/(?=.*[!@#$%^&*])(?=.*[0-9])/g);
                                const regex2 = new RegExp(/(?=.{8,})/g);

                                const para = e.target.value;
                                console.log(regex.test(para));

                                const newArr = [];
                                newArr.push(
                                    regex.test(para),
                                    regex1.test(para),
                                    regex2.test(para)
                                );
                                setIsValid(newArr);
                            }}
                            type="text"
                        />
                        <div>
                            <ul>
                                <li style={{ color: isValid[0] ? "green" : "grey" }}>
                                    Upper
                                </li>
                                <li style={{ color: isValid[1] ? "green" : "grey" }}>
                                    Lower
                                </li>
                                <li style={{ color: isValid[2] ? "green" : "grey" }}>
                                    8 or Higher
                                </li>
                            </ul>
                        </div>
                    </Form.Group>
                    <Form.Group classname="mb-3">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={userItem.email}
                            onChange={(e) => {
                                setUserItem({ ...userItem, email: e.target.value });
                            }}
                            type="text"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    onClose();
                    onSave(userItem);
                }}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserNew