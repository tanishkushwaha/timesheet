import { Button, Flex, Input, Select } from "@chakra-ui/react"
import DataGrid from "../components/DataGrid"
import { useEffect, useState } from "react"


const home = () => {
  const [month, setMonth] = useState('2024-06')
  const [totalWeeks, setTotalWeeks] = useState(0)

  // useEffect(() => {

  //   const firstDay = (new Date(month).getDay() + 6) % 7
  //   console.log('First Day:', firstDay);

  //   let weeks = 5
  //   if (firstDay > 5) {
  //     weeks = 6
  //   }

  //   setTotalWeeks(weeks)

  // }, [month])


  return (
    <>
      <Flex justifyContent='center' p='2rem' pt='3rem' direction='column' gap='2rem'>
        <Flex justifyContent='space-between' w='100%'>
          <Input type='month' w='300px' value={month} onChange={(e) => setMonth(e.target.value)} />
          <WeekPicker />
          <Button w='300px'>Freeze Month</Button>
        </Flex>
        <DataGrid />
      </Flex>
    </>
  )
}

const WeekPicker = ({ totalWeeks }: { totalWeeks?: number }) => {
  return (
    <Select placeholder='Select Week' w='300px' value='week_1'>
      <option value='week_1'>Week 1 (2 Jun - 8 Jun)</option>
      <option value='week_2'>Week 2 (9 Jun - 15 Jun)</option>
      <option value='week_3'>Week 3 (16 Jun - 22 Jun)</option>
      <option value='week_4'>Week 4 (23 Jun - 29 Jun)</option>
      {/* {totalWeeks > 5 && (
        <option value='week_6'>Week 6</option>

      )} */}
    </Select>
  )
}

export default home