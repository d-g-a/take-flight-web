import React from 'react';
import { FutureEventsStyled } from './style';
import { Link } from 'gatsby';

export const FutureEvents = () => {
  return (
    <FutureEventsStyled>
     
      <ul>
        <li><Link>Take Flight Immersive</Link></li>
        <li><Link>Take Flight Intensive</Link></li>
        <li><Link>Take Flight Tour</Link></li>
      </ul>

    </FutureEventsStyled>
  )
}
