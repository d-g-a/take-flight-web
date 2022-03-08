import React from 'react'
import {TeacherPageStyled} from './style';
import { TeacherScrollTwo } from '../TeachersScrollTwo'

export const TeachersPage = () => {
  return (
    <TeacherPageStyled>
         <h1>TEACHERS</h1>
            <TeacherScrollTwo />
    </TeacherPageStyled>
  )
}
