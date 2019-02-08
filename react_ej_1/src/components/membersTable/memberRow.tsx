import * as React from 'react';
import {MemberEntity} from '../../model/member';
import { TableCell, TableRow, withStyles } from '@material-ui/core';


export const MemberRow = (props: {member : MemberEntity}) =>
  <TableRow>
    <TableCell align="right"><img src={props.member.avatar_url} style ={{maxWidth: '10rem'}}/></TableCell>
    <TableCell align="right"><span>{props.member.id}</span></TableCell>
    <TableCell align="right"><span>{props.member.login}</span></TableCell>
  </TableRow>




