import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Box, Container, Divider, List, Typography } from '@mui/material'

import AddField from 'components/TodoList/AddField'
import TaskItem from 'components/TodoList/TaskItem'

import { TaskType } from 'types'

export default function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([])

  const createNewTask = (description: string) => {
    const tasksCopy = structuredClone(taskList)

    const newTask = {
      id: uuidv4(),
      description,
      isDone: false
    }

    tasksCopy.unshift(newTask)

    setTaskList(tasksCopy)
  }

  const updateTask = (id: string) => {
    const tasksCopy: TaskType[] = structuredClone(taskList)
    const indexOf = tasksCopy.findIndex((task) => task.id === id)

    if (indexOf !== -1) {
      tasksCopy[indexOf].isDone = !tasksCopy[indexOf].isDone

      setTaskList(tasksCopy)
    }
  }

  const deleteTask = (id: string) => {
    const tasksCopy: TaskType[] = structuredClone(taskList)
    const indexOf = tasksCopy.findIndex((task) => task.id === id)

    if (indexOf !== -1) {
      const newTaskList = tasksCopy.filter((task) => task.id !== id)

      setTaskList(newTaskList)
    }
  }

  return (
    <Container
      maxWidth="xs"
      data-testid="todo-list"
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        mt: 8,
        mx: 'auto',
        px: 3,
        py: 4
      }}
    >
      <Typography component="h1" display="block" fontWeight={600} variant="h5">
        Welcome to your ToDo list.
      </Typography>

      <AddField createNewTask={createNewTask} />

      <Divider sx={{ my: 3 }} />

      <Box component="section" my={3}>
        <Typography
          component="h2"
          variant="h6"
          display="block"
          fontWeight={600}
          mb={3}
        >
          My tasks
        </Typography>

        {taskList.length === 0 ? (
          <Typography>Your task list is empty...</Typography>
        ) : (
          <List>
            {taskList.map((task) => (
              <TaskItem
                key={`task-${task.id}`}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </List>
        )}
      </Box>
    </Container>
  )
}
