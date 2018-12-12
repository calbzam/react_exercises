import * as React from 'react';

interface Props {
    initialOrganization: string;
    onOrganizationUpdated: (newName: string) => any;
  }

  interface State {
    editingOrganization: string;
  }
  


export class InputCompanyComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // Watch out what would happen if we get this user name via an AJAX callback
        // you will find a different implementatin on 05 sample
        this.state = { editingOrganization: this.props.initialOrganization };
      }


    onChange = (event) => {
        this.setState({ editingOrganization: event.target.value });
      }

    onOrganizationSubmit = (event: any): any => {
        this.props.onOrganizationUpdated(this.state.editingOrganization);
      }

      public render() {
        return (
          <>
            <input type="text" name="title" value={this.state.editingOrganization} onChange={this.onChange}/>
            <button className="btn btn-default" onClick={this.onOrganizationSubmit}>Change Organization</button>
          </>
    );
  }
}
