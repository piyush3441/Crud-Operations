import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import user from "./user";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./crud.css";

const Crud = () => {

    let history = useNavigate();

    const handleEdit = (id, name, email, phone) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Id', id);
        localStorage.setItem('Phone', phone);

    }

    const handleDelete = (id) => {
        var index = user.map(function (e) {
            return e.id
        }).indexOf(id);

        user.splice(index, 1);
        history("/");
    }

    return (
        <Fragment>
            <div style={{ margin: "5rem" }}>

                <h3 className = "heading">User details </h3>
                <br></br>
                <Table striped bordered hover size="sm" style={{ padding: "5px" }}>
                    <thead>
                        <tr>
                            <th class="text-center" >
                                User Name
                            </th>
                            <th class="text-center">
                                Email
                            </th>
                            <th class="text-center">
                                Contact No.
                            </th>

                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user && user.length > 0
                                ?
                                user.map((item) => {
                                    return (
                                        <tr>
                                            <td class="text-center">
                                                {item.name}
                                            </td>

                                            <td class="text-center">
                                                {item.email}
                                            </td>

                                            <td class="text-center">
                                                {item.phone}
                                            </td>

                                            <td class="text-center">
                                                <Link to={"/edit"}>
                                                    <Button type="button" className="btn btn-primary" onClick={() => handleEdit(item.id, item.name, item.email, item.phone)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                &nbsp;
                                                <Button type="button" class="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                }) :

                                "no data available"
                        }
                    </tbody>
                </Table>

                <br>
                </br>

                <Link className="d-grid gap-2" to={"/create"}>
                    <button size="lg" type="button" class="btn btn-primary">
                        Create
                    </button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Crud;