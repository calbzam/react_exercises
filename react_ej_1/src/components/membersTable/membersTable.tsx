import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { InputCompanyComponent } from '../InputCompanyComponent';
import {} from 'core-js';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>,
  organization: string
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { members: [] , organization: "lemoncode" };

  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.organization).then((members) =>
      this.setState({ members: members })
    );
  }

  setOrganizationState = (newName: string) => {
    this.setState({ organization: newName });
  }

  
  public render() {

    return (
      <>
      <InputCompanyComponent initialOrganization={this.state.organization} onOrganizationUpdated={this.setOrganizationState} />
      <div className="row">
        <h2> Members Page</h2>
        <button onClick={this.loadMembers}>Load</button>
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
      </>
    );
  }
}
