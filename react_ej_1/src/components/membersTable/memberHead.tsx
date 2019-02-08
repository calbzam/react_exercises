import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { Table, Paper, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';

export const MemberHead = () =>
    <TableRow>
        <TableCell align="right">Avatar</TableCell>
        <TableCell align="right">Id</TableCell>
        <TableCell align="right">Name</TableCell>
    </TableRow>