import React, { Component } from 'react';
import '../../assets/css/custom.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsersList } from '../../actions/actions';

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {
        this.props.getUsersList();
    }
    render() {

        var usersDataList = this.props.usersData;
        if (usersDataList.usersData.length > 0) {
            this.state.usersList = usersDataList.usersData.map((users, index) => {
                return (
                    <>
                        <tr key={users.id}>
                            <td><NavLink to={{
                                pathname: "/userDetails/" + users.id,
                                id: users.id
                            }}>{users.username}</NavLink></td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.phone}</td>
                            <td>{users.address.city}</td>
                        </tr>
                    </>
                );
            })
        }
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.usersList}
                    </tbody>
                </table>
            </>
        )
    }
}

function mapStateToProps(state) {

    return {
        usersData: state.usersData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUsersList: function () {
            dispatch(getUsersList());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)