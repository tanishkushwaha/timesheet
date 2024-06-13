import { Box, Input, List, ListItem, Select, Text, useOutsideClick, useToast } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import Autocomplete from "./Autocomplete"
import { getDateString } from "../utils/DateHelper"

type Entries = {
  mon: { task: string, timeIn: string, timeOut: string },
  tue: { task: string, timeIn: string, timeOut: string },
  wed: { task: string, timeIn: string, timeOut: string },
  thu: { task: string, timeIn: string, timeOut: string },
  fri: { task: string, timeIn: string, timeOut: string },
}

// Complete this
type EntryType = {

}

const DataGrid = ({ week }: { week: string | undefined }) => {
  const days = week?.split(',')

  const defaultEntries = {
    mon: { task: '', timeIn: '', timeOut: '' },
    tue: { task: '', timeIn: '', timeOut: '' },
    wed: { task: '', timeIn: '', timeOut: '' },
    thu: { task: '', timeIn: '', timeOut: '' },
    fri: { task: '', timeIn: '', timeOut: '' },
  }

  // Complete this
  const [entry_0, setEntry_0] = useState({})

  const [entries, setEntries] = useState<Entries>(defaultEntries)
  const [update, setUpdate] = useState(false)
  const toast = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, entryKey: string) => {
    setEntries(prevEntries => (
      {
        ...prevEntries, [entryKey]: { ...prevEntries[entryKey as keyof Entries], [e.target.name]: e.target.value }
      }
    ))
    setUpdate(true)
  }

  // Auto Save
  useEffect(() => {
    if (!update) return

    const interval = setInterval(() => {
      console.log('Auto Saving...')
      toast({
        title: 'Auto Saved',
        status: 'success',
        duration: 3000,
        isClosable: false,
        position: 'bottom-left',
        variant: 'subtle'
      })
      setUpdate(false)
    }, 5000)

    return () => clearInterval(interval)

  }, [update])

  const suggestions = [
    'Leave',
    'Knowledge Development',
    'Training',
    'Official Travel',
    'Customer Meeting',
    'Weekend'
  ];

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

          {/* SUNDAY */}
          <tr>
            <td>
              <Text p='1rem' align='center'>Sun</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[0])}</Text>
            </td>
            <td>
              {/* <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.mon.task} onChange={(e) => handleChange(e, 'mon')} /> */}
              <Autocomplete suggestions={suggestions} value='Weekend - Sunday' />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.mon.timeIn} onChange={(e) => handleChange(e, 'moon')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' />
            </td>
            <td>
              <Text p='1rem' align='center'></Text>
            </td>
          </tr>

          {/* MONDAY */}
          <tr>
            <td>
              <Text p='1rem' align='center'>Mon</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[1])}</Text>
            </td>
            <td>
              {/* <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.mon.task} onChange={(e) => handleChange(e, 'mon')} /> */}
              <Autocomplete suggestions={suggestions} />
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
            <td>
              <Text p='1rem' align='center'>Tue</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[2])}</Text>
            </td>
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
            <td>
              <Text p='1rem' align='center'>Wed</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[3])}</Text>
            </td>
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
            <td>
              <Text p='1rem' align='center'>Thu</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[4])}</Text>
            </td>
            <td>
              <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.thu.task} onChange={(e) => handleChange(e, 'thu')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeIn' value={entries.thu.timeIn} onChange={(e) => handleChange(e, 'thu')} />
            </td>
            <td>
              <Input border='none' borderRadius='0px' type='time' name='timeOut' value={entries.thu.timeOut} onChange={(e) => handleChange(e, 'thu')} />
            </td>
            <td>
              <Text p='1rem' align='center'></Text>
            </td>
          </tr>

          {/* FRIDAY */}
          <tr>
            <td>
              <Text p='1rem' align='center'>Fri</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[5])}</Text>
            </td>
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

          {/* SATURDAY */}
          <tr>
            <td>
              <Text p='1rem' align='center'>Sat</Text>
            </td>
            <td>
              <Text p='1rem' align='center'>{days && getDateString(days[6])}</Text>
            </td>
            <td>
              {/* <Input border='none' borderRadius='0px' textAlign='center' size='lg' name='task' value={entries.mon.task} onChange={(e) => handleChange(e, 'mon')} /> */}
              <Autocomplete suggestions={suggestions} value='Weekend - Saturday' />
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

        </tbody>
      </table>
    </>
  )
}



export default DataGrid