import React,{Component} from 'react';
import {FormGroup,Form,Label,Input, Button} from 'reactstrap';
import axios from 'axios';

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            roll_number:null,
            password:null,
            history:null,
        };
    }
    getRoll=(e)=>
    {
        this.setState({roll_number:e.target.value});
    }
    getPass=(e)=>
    {
        this.setState({password:e.target.value});
    }
    
    handleSubmit=(e)=>
    {
        if(this.state.roll_number!==this.state.password)
        {
            alert("Invalid Roll Number or Password");
            return;
        }
        const abc={roll:this.state.roll_number};
        axios
        .post("http://localhost:8000/api/get_data",abc)
        .then(res=>res.data?this.props.history.push({
            pathname: '/result',
            state: { detail: res.data }
        })
        :alert("Invalid Roll Number or Password"));
    }
    render()
    {
        return(
            <div className="container-fluid h-100 bg-secondary text-dark col-md-6">
                <p className="text-center"><b>Your Roll Number is your Password</b></p>
                    <Form>
                        <FormGroup className='text-white text-uppercase text-center my-4'>
                            <div className="row justify-content-center align-items-center">
                                <Label for="Roll_number">Roll Number</Label>
                                    <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <Input className='text-center'
                                        type="text"
                                        name="roll_number"
                                        onChange={(e)=>this.getRoll(e)}
                                        placeholder="Enter Your Roll Number"/>
                                    </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='text-white text-uppercase text-center my-4'>
                            <div className="row justify-content-center align-items-center">
                                <Label for="Password">Password</Label>
                                    <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <Input className='text-center'
                                        type="password"
                                        name="password"
                                        onChange={(e)=>this.getPass(e)}
                                        placeholder="Enter Your Password"/>
                                    </div>
                            </div>
                        </FormGroup>
                    </Form>
                        <p className="text-center">
                            <Button className="btn btn-success" onClick={(e)=>this.handleSubmit()}>Check Result
                            </Button>
                        </p>
                </div>
            
            
            );
            
        }
    
}

export default Login
