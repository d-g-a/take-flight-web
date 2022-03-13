import React from 'react'
import { TeacherGlider } from '../TeacherGlider'
import {TeachersTemplateWrapper} from './style'

export const TeachersTemplate = ({teachers}) => {
  return (
    <TeachersTemplateWrapper>
        <TeacherGlider teachers={teachers?.authors} />
    </TeachersTemplateWrapper>
  )
}
