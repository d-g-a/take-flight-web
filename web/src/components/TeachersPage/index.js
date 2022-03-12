import React from 'react'
import {TeacherPageStyled} from './style';
import { TeachersScrollTwo } from '../TeachersScrollTwo'
import { TeachersScroll } from '../TeachersScroll';

export const TeachersPage = () => {
  return (
    <TeacherPageStyled>
         <h1>TEACHERS</h1>
         <TeachersScroll className="TeachersScroll" />
            
    </TeacherPageStyled>
  )
}
