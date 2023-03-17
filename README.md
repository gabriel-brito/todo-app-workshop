# Workshop - React Testing Library

The objective of this workshop is to present, at least, the basics of unit tests with the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## This application must:

- Warn the user if the task list is empty
- Create a new task
- Change the task status to done (updating your visual styles and components)
- Delete the task

## Each component and it's must have list:

### Todo List:

- should render correctly
- should create a new task
- should create multiple new tasks
- should mark task as done
- should delete the task

#### AddField

- should render properly
- should trigger the function onSubmit when the value is fulfilled
- should trigger the function onSubmit when user presses {enter} and the value is fulfilled
- should show an error message if the user do not type on the input and presses enter
- should show an error message if the user do not type on the input

#### TaskItem

- should render properl
- should should call updateTask when checkbox is clicked
- should have a different style and shows icon when the task is done
- should should call deleteTask when Icon is clicked

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
