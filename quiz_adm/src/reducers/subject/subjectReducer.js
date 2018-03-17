import { createReducer } from 'reduxsauce'
import { SubjectTypes } from '../../actions/subject/subjectAction'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  newSubject: {
    error: false, 
    loading: false, 
  },
  subjectList: {
    error: false, 
    loading: false, 
    subjects: [],   
  },
  deleteSubject: {
    error: false, 
    loading: false, 
  }   
})

export const createSubject = (state = INITIAL_STATE, action) => {
  return {...state, newSubject: {error: false, loading: true}}
}

export const createSuccess = (state = INITIAL_STATE, action) => {
  return {...state, newSubject: {error: false, loading: false, subject: action.subject}}
}

export const createError = (state = INITIAL_STATE, action) => {
  return {...state, newSubject: {error: true, loading: false}}
}

export const fetchSubjects = (state =INITIAL_STATE, action) => {
  return {...state, subjectList: {error: false, loading: true, subjects: []}}
}

export const fetchSubjectsSuccess = (state =INITIAL_STATE, action) => {
  return {...state, subjectList: {error: false, loading: false, subjects: action.subjects}}
}

export const fetchSubjectsError = (state =INITIAL_STATE, action) => {
  return {...state, subjectList: {error: true, loading: false, subjects: []}}
}

export const deleteSubject = (state =INITIAL_STATE, action) => {
  return {...state, deleteSubject: {error: false, loading: true}}
}

export const deleteSubjectSuccess = (state =INITIAL_STATE, action) => {
  return {...state, deleteSubject: {error: false, loading: false}}
}

export const deleteSubjectError = (state =INITIAL_STATE, action) => {
  return {...state, deleteSubject: {error: true, loading: false}}
}

export const HANDLER = {
  [SubjectTypes.CREATE_SUBJECT]: createSubject,
  [SubjectTypes.CREATE_SUCCESS]: createSuccess,
  [SubjectTypes.CREATE_ERROR]: createError,
  [SubjectTypes.FETCH_SUBJECTS]: fetchSubjects,
  [SubjectTypes.FETCH_SUBJECTS_SUCCESS]: fetchSubjectsSuccess,
  [SubjectTypes.FETCH_SUBJECTS_ERROR]: fetchSubjectsError,
  [SubjectTypes.DELETE_SUBJECT]: deleteSubject,
  [SubjectTypes.DELETE_SUBJECT_SUCCESS]: deleteSubjectSuccess,
  [SubjectTypes.DELETE_SUBJECT_ERROR]: deleteSubjectError,
}

export default createReducer(INITIAL_STATE, HANDLER)