import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import { thunkCreateSubject } from '../../../actions/subject/subjectThunk'

import { connect } from 'react-redux'

class SubjectCreate extends Component {
  state = {
    subject: {
      name: '', 
      description: '',
    }
  }

  handleCreate = () => {
    this.props.createSubject(this.state.subject)
    this.setState({ subject: {name: '', description: ''}})
    this.props.history.push('/subject/list')
  }

  handleChangeInput = (event) => {
    const { target } = event
    const { value, name } = target

    let { subject } = this.state
    subject[name] = value

    this.setState({ subject })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                Create new Subject
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="name">Suject Name:</Label>
                    <Input type="text" name="name" placeholder="Enter subject name:" onChange={this.handleChangeInput}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="description">Suject Description:</Label>
                    <Input type="textarea" name="description" placeholder="Enter subject description:" onChange={this.handleChangeInput}/>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="button" color="primary" onClick={this.handleCreate}>Create</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  subject: state.subjectStore.newSubject,
})

const mapDispatchToProps = dispatch => ({
  createSubject: subject => dispatch(thunkCreateSubject(subject))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate)
