import { Button, Flex, Input, Select } from "@chakra-ui/react"
import DataGrid from "../components/DataGrid"
import { useEffect, useState } from "react"


const home = () => {
  const [month, setMonth] = useState('')
  const [totalWeeks, setTotalWeeks] = useState(0)

  useEffect(() => {

    const firstDay = (new Date(month).getDay() + 6) % 7
    console.log('First Day:', firstDay);

    let weeks = 5
    if (firstDay > 5) {
      weeks = 6
    }

    setTotalWeeks(weeks)

  }, [month])


  return (
    <>
      <Flex justifyContent='center' p='2rem' pt='3rem' direction='column' gap='3rem'>
        <Flex justifyContent='space-between' w='100%'>
          <Input type='month' w='300px' value={month} onChange={(e) => setMonth(e.target.value)} />
          <WeekPicker totalWeeks={totalWeeks} />
          <Button w='300px'>Freeze Month</Button>
        </Flex>
        <DataGrid />
      </Flex>
      <Flex px='2rem' justifyContent='flex-end'>
        <Button w='8rem' colorScheme='blue'>Save</Button>
      </Flex>
    </>
  )
}

const WeekPicker = ({ totalWeeks }: { totalWeeks: number }) => {
  return (
    <Select placeholder='Select Week' w='300px'>
      <option value='week_1'>Week 1</option>
      <option value='week_2'>Week 2</option>
      <option value='week_3'>Week 3</option>
      <option value='week_4'>Week 4</option>
      <option value='week_5'>Week 5</option>
      {totalWeeks > 5 && (
        <option value='week_6'>Week 6</option>

      )}
    </Select>
  )
}

export default home