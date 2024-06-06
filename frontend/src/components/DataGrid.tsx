import { Input, Text } from "@chakra-ui/react"
import { useState } from "react"

type Entries = {
  mon: { task: string, timeIn: string, timeOut: string },
  tue: { task: string, timeIn: string, timeOut: string },
  wed: { task: string, timeIn: string, timeOut: string },
  thu: { task: string, timeIn: string, timeOut: string },
  fri: { task: string, timeIn: string, timeOut: string },
}

const DataGrid = () => {
  const defaultEntries = {
    mon: { task: '', timeIn: '', timeOut: '' },
    tue: { task: '', timeIn: '', timeOut: '' },
    wed: { task: '', timeIn: '', timeOut: '' },
    thu: { task: '', timeIn: '', timeOut: '' },
    fri: { task: '', timeIn: '', timeOut: '' },
  }

  const [entries, setEntries] = useState<Entries>(defaultEntries)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, entryKey: string) => {
    setEntries(prevEntries => (
      {
        ...prevEntries, [entryKey]: { ...prevEntries[entryKey as keyof Entries], [e.target.name]: e.target.value }
      }
    ))
  }


  return (
    <>
      <table>
        <tbody>

          {/* TABLE HEADERS */}
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Task</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Duration</th>
          </tr>

          {/* MONDAY */}
          <tr>
            <td><Text p='1rem' align='center'>Mon</Text></td>
            <td><Text p='1rem' align='center'>3 Jun 24</Text></td>
            <td>
              <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.mon.task} onChange={(e) => handleChange(e, 'mon')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.mon.timeIn} onChange={(e) => handleChange(e, 'mon')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' value={entries.mon.timeOut} onChange={(e) => handleChange(e, 'mon')} />
            </td>
            <td>
              <Text p='1rem' align='center'></Text>
            </td>
          </tr>

          {/* TUESDAY */}
          <tr>
            <td><Text p='1rem' align='center'>Tue</Text></td>
            <td><Text p='1rem' align='center'>4 Jun 24</Text></td>
            <td>
              <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.tue.task} onChange={(e) => handleChange(e, 'tue')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.tue.timeIn} onChange={(e) => handleChange(e, 'tue')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' value={entries.tue.timeOut} onChange={(e) => handleChange(e, 'tue')} />
            </td>
            <td><Text p='1rem' align='center'></Text></td>
          </tr>

          {/* WEDNESDAY */}
          <tr>
            <td><Text p='1rem' align='center'>Wed</Text></td>
            <td><Text p='1rem' align='center'>5 Jun 24</Text></td>
            <td>
              <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.wed.task} onChange={(e) => handleChange(e, 'wed')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.wed.timeIn} onChange={(e) => handleChange(e, 'wed')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' value={entries.wed.timeOut} onChange={(e) => handleChange(e, 'wed')} />
            </td>
            <td><Text p='1rem' align='center'></Text></td>
          </tr>

          {/* THURSDAY */}
          <tr>
            <td><Text p='1rem' align='center'>Thu</Text></td>
            <td><Text p='1rem' align='center'>6 Jun 24</Text></td>
            <td>
              <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.thu.task} onChange={(e) => handleChange(e, 'thu')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.thu.timeIn} onChange={(e) => handleChange(e, 'thu')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' value={entries.thu.timeOut} onChange={(e) => handleChange(e, 'thu')} />
            </td>
            <td><Text p='1rem' align='center'></Text></td>
          </tr>

          {/* FRIDAY */}
          <tr>
            <td><Text p='1rem' align='center'>Fri</Text></td>
            <td><Text p='1rem' align='center'>7 Jun 24</Text></td>
            <td>
              <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.fri.task} onChange={(e) => handleChange(e, 'fri')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.fri.timeIn} onChange={(e) => handleChange(e, 'fri')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' value={entries.fri.timeOut} onChange={(e) => handleChange(e, 'fri')} />
            </td>
            <td><Text p='1rem' align='center'></Text></td>
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default DataGrid