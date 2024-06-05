import { Input, Text } from "@chakra-ui/react"


const DataGrid = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Task</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Duration</th>
          </tr>
          <tr>
            <td><Text p='1rem' align='center'>Mon</Text></td>
            <td><Text p='1rem' align='center'>6 Jun 24</Text></td>
            <td><Input border='none' borderRadius='0px' textAlign='center' size='lg' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Text p='1rem' align='center'>1</Text></td>
          </tr>
          <tr>
            <td><Text p='1rem' align='center'>Tue</Text></td>
            <td><Text p='1rem' align='center'>6 Jun 24</Text></td>
            <td><Input border='none' borderRadius='0px' textAlign='center' size='lg' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Text p='1rem' align='center'>1</Text></td>
          </tr>
          <tr>
            <td><Text p='1rem' align='center'>Wed</Text></td>
            <td><Text p='1rem' align='center'>6 Jun 24</Text></td>
            <td><Input border='none' borderRadius='0px' textAlign='center' size='lg' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Text p='1rem' align='center'>1</Text></td>
          </tr>
          <tr>
            <td><Text p='1rem' align='center'>Thu</Text></td>
            <td><Text p='1rem' align='center'>6 Jun 24</Text></td>
            <td><Input border='none' borderRadius='0px' textAlign='center' size='lg' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Text p='1rem' align='center'>1</Text></td>
          </tr>
          <tr>
            <td><Text p='1rem' align='center'>Fri</Text></td>
            <td><Text p='1rem' align='center'>6 Jun 24</Text></td>
            <td><Input border='none' borderRadius='0px' textAlign='center' size='lg' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Input border='none' borderRadius='0px' type='time' /></td>
            <td><Text p='1rem' align='center'>1</Text></td>
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default DataGrid