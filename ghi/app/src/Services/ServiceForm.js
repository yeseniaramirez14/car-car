import React from 'react';

class ServiceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            customer: '',
            dateTime: '',
            technicians: [],
            reason: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const newState = {}
        newState[event.target.id] = event.target.value;
        // console.log(event)
        this.setState(newState)
    }

    // As an example to reference
    // handleCustomerChange(event) {
    //     const value = event.target.value;
    //     this.setState({manufactuer: value})
    // }

    async componentDidMount() {
        const url = "http://localhost:8080/api/technicians/";
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();
          this.setState({ technicians: data.technicians })
          }
        }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.date_time = data.dateTime
        delete data.dateTime
        delete data.technicians
        console.log(data)

        const serviceURL = "http://localhost:8080/api/services/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(serviceURL, fetchConfig);
        if (response.ok) {
            const newService = await response.json();
            console.log(newService)

            const cleared = {
                vin: '',
                customer: '',
                dateTime: '',
                technicians: [],
                reason: '',
            };
            this.setState(cleared);
        }
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a new service appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-service-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value={this.state.vin} placeholder="Vin" required type="text" id="vin" className="form-control" />
                    <label htmlFor="vin">Vin number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value={this.state.customer} placeholder="Cutomer name" required type="text" id="customer" className="form-control" />
                    <label htmlFor="customer">Customer name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value={this.state.dateTime} placeholder="Date and Time" type="datetime-local" id="dateTime" className="form-control" />
                    <label htmlFor="dateTime">Date and Time</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleChange} value={this.state.technician} required className="form-select" id="technician">
                      <option value="">Choose a technician</option>
                      {this.state.technicians.map(technician => {
                        return (
                          <option key={technician.employee_number} value={technician.employee_number}>{technician.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value={this.state.reason} placeholder="Reason" type="text" id="reason" className="form-control" />
                    <label htmlFor="reason">Reason</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default ServiceForm;