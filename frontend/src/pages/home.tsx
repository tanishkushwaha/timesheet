import { Button, Flex, Input, Select } from "@chakra-ui/react"
import DataGrid from "../components/DataGrid"
import { useState } from "react"
import { getWeeks } from "../utils/DateHelper"


const home = () => {
  const [month, setMonth] = useState('2024-06')
  const [week, setWeek] = useState<string | undefined>(undefined)

  return (
    <>
      <Flex justifyContent='center' p='2rem' pt='3rem' direction='column' gap='2rem'>
        <Flex justifyContent='space-between' w='100%'>
          <Input type='month' w='300px' value={month} onChange={(e) => setMonth(e.target.value)} />
          <WeekPicker monthStr={month} setWeek={setWeek} />
          <Button w='300px'>Freeze Month</Button>
        </Flex>
        <DataGrid week={week} />
      </Flex>
    </>
  )
}

const WeekPicker = ({ monthStr, setWeek }: { monthStr: string, week?: string, setWeek: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
  const month = new Date(monthStr)
  const weeks = getWeeks(month)

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <Select w='300px' placeholder="Select Week" onChange={(e) => setWeek(e.target.value)}>
      {weeks.map((week, index) => (
        <option value={week}>{`Week ${index + 1} (${new Date(week[0]).getDate()} ${monthNames[new Date(week[1]).getMonth()]} - ${new Date(week[6]).getDate()} ${monthNames[new Date(week[6]).getMonth()]})`}</option>

      ))}
    </Select>
  )
}

export default home