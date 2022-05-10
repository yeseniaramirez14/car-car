import React from 'react';

function formatDate(date) {
    return date
}

class ServicesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            services: []
        };
    };

    async componentDidMount() {
        const url = "http://localhost:8080/api/services/";
        const response = await fetch(url);
        console.log(`this is the response: ${response}`)
        console.log(response)

        if (response.ok) {
            const data = await response.json();
            console.log(data)

            this.setState({ services: data.services})
        }
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>Date and Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.services.map(service => {
                        console.log(service)
                        return (
                            <tr key={service.vin}>
                                <td>{service.vin}</td>
                                <td>{service.customer}</td>
                                <td>{formatDate(service.date_time)}</td>
                                <td>{service.technician.name}</td>
                                <td>{service.reason}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default ServicesList;