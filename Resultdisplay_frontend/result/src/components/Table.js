import React,{Component} from 'react';

class Table extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            pass:true
        };
    }
    
    render()
    {
        return(
                <div className="container">
                    <h1 className='text-center'>COLLEGE NAME</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item l1">
                            <h2>Student Name : {this.props.location.state["detail"][0]["name"]}</h2>
                        </li>
                        <li className="list-inline-item l2">
                            <h2>Roll Number : {this.props.location.state["detail"][0]["roll_number"]}</h2>
                        </li>
                    </ul>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td align="left"><b>Subject Name</b></td>
                                <td align="center"><b>Marks</b></td>
                            </tr>
                            <tr>
                                <td align="left"><b>Project</b></td>
                                {this.props.location.state["detail"][0]["proj"]<40&&this.state.pass===true?this.setState({pass:false}):null}
                                <td align="center">{this.props.location.state["detail"][0]["proj"]<40?<b className="text-danger">{this.props.location.state["detail"][0]["proj"]}</b>:<b>{this.props.location.state["detail"][0]["proj"]}</b>}</td>
                            </tr>
                            <tr>
                                <td align="left"><b>Microwave And Optical Communication</b></td>
                                {this.props.location.state["detail"][0]["moc"]<40&&this.state.pass===true?this.setState({pass:false}):null}
                                <td align="center">{this.props.location.state["detail"][0]["moc"]<40?<b className="text-danger">{this.props.location.state["detail"][0]["moc"]}</b>:<b>{this.props.location.state["detail"][0]["moc"]}</b>}</td>
                            </tr>
                            <tr>
                                <td align="left"><b>Wireless Mobile Communication</b></td>
                                {this.props.location.state["detail"][0]["wmc"]<40&&this.state.pass===true?this.setState({pass:false}):null}
                                <td align="center">{this.props.location.state["detail"][0]["wmc"]<40?<b className="text-danger">{this.props.location.state["detail"][0]["wmc"]}</b>:<b>{this.props.location.state["detail"][0]["wmc"]}</b>}</td>
                            </tr>
                            <tr>
                                <td align="left"><b>Embedded Systems</b></td>
                                {this.props.location.state["detail"][0]["es"]<40&&this.state.pass===true?this.setState({pass:false}):null}
                                <td align="center">{this.props.location.state["detail"][0]["es"]<40?<b className="text-danger">{this.props.location.state["detail"][0]["es"]}</b>:<b>{this.props.location.state["detail"][0]["es"]}</b>}</td>
                            </tr>
                            <tr>
                                <td align="left"><b>Power Electronics</b></td>
                                {this.props.location.state["detail"][0]["pe"]<40&&this.state.pass===true?this.setState({pass:false}):null}
                                <td align="center">{this.props.location.state["detail"][0]["pe"]<40?<b className="text-danger">{this.props.location.state["detail"][0]["pe"]}</b>:<b>{this.props.location.state["detail"][0]["pe"]}</b>}</td>
                            </tr>
                            <tr>
                                <td align="left"><b>Digital Image Processing</b></td>
                                {this.props.location.state["detail"][0]["dip"]<40&&this.state.pass===true?this.setState({pass:false}):null}
                                <td align="center">{this.props.location.state["detail"][0]["dip"]<40?<b className="text-danger">{this.props.location.state["detail"][0]["dip"]}</b>:<b>{this.props.location.state["detail"][0]["dip"]}</b>}</td>
                            </tr>
                        </tbody>
                    </table>
                        <ul className="list-inline">
                        <li className="list-inline-item l1">
                            <h3>Result</h3>
                        </li>
                        <li className="list-inline-item l2">
                            <h3>{this.state.pass?"PASS":"FAIL"}</h3>
                        </li>
                    </ul>
                    
                </div>
            
        );
    }
}

export default Table;