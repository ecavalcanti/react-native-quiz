import SubjectAction from './subjectAction'
import { createSubject, fetchSubjects, deleteSubject } from './subjectAPI'

export const thunkCreateSubject = (subject) => {
  return async dispatch => {
    dispatch(SubjectAction.createSubject())
    try {
      let res = await createSubject(subject)
      dispatch(SubjectAction.createSuccess(res.data))
      dispatch(thunkFetchSubjectList())
    } catch (error) {
      dispatch(SubjectAction.createError())
    }
  }
}

export const thunkFetchSubjectList = () => {
  return async dispatch => {
    dispatch(SubjectAction.fetchSubjects())
    try {
      let res = await fetchSubjects()
      dispatch(SubjectAction.fetchSubjectsSuccess(res.data.subjects))
    } catch (error) {
      dispatch(SubjectAction.fetchSubjectsError())
    }
  }
}

export const thunkDeleteSubject = (subject) => {
  return async dispatch => {
    dispatch(SubjectAction.deleteSubject())
    try {
      let res = await deleteSubject(subject)
      dispatch(SubjectAction.deleteSubjectSuccess(res.data.subjects))
      dispatch(thunkFetchSubjectList())
    } catch (error) {
      dispatch(SubjectAction.deleteSubjectError())
    }
  }
}