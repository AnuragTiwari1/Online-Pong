import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout';
import myTextBox from '../../components/myTextBox/index';
import * as styles from "./styles";

export default class IndexPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {phone: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({phone: event.target.value});
    }

    handleSubmit(event) {
        console.log('submitted name is::::',this.state.phone);
    }

    render() {
        const {Container}= styles;
        return (
            <Layout>
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder={"enter phone number to login"}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </Container>
            </Layout>
        );
    }
}