import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { thunkFetchSubjectList, thunkDeleteSubject } from '../../../actions/subject/subjectThunk'

import { connect } from 'react-redux'

class SubjectList extends Component {

  componentDidMount() {
    this.props.fetchSubjectList()
  }
  
  handleDeleteSubject = (subject) => {
    return this.props.deleteSubject(subject)
  }

  render() {
    const { subjectList } = this.props
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                List
              </CardHeader>
              <CardBody>
                <Link to="/subject/new" className="btn btn-primary mb-4">Create new subject</Link>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    { subjectList.subjects.map(subject => (
                      <tr key={subject._id}>
                        <td>{subject.name}</td>
                        <td>{subject.description}</td>
                        <td>
                          <Button color="warning" onClick={ () => this.handleDeleteSubject(subject) }>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  subjectList: state.subjectStore.subjectList,
  deleteSubject: state.subjectStore.deleteSubject,
})

const mapDispatchToProps = dispatch => ({
  fetchSubjectList: () => dispatch(thunkFetchSubjectList()),
  deleteSubject: (subject) => dispatch(thunkDeleteSubject(subject))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)
