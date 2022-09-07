import { Table } from 'react-bootstrap';

const AllergyInfo = (props) => {
    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          {props.info.map((arg) => 
            <th>{arg.A_NAME}</th>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
            {props.info.map((arg) => 
                <th>{arg.AM_GRADE}</th>
            )}
            </tr>
      </tbody>
    </Table>
    );
}

export default AllergyInfo;