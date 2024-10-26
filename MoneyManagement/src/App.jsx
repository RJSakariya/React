import { Container, Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from './App/expenseSlice';
import {addBudget } from './App/badgetSlice';

export default function App() {
  const dispatch = useDispatch()
  const expensesList = useSelector((state) => state.expenseKey.expenseList)
  const totalBudget = useSelector((state) => state.budgetKey.budget)
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');

  const handleAddBudget = () => {
    dispatch(addBudget(budget))
    setBudget(0)
  };

  const handleAddExpense = () => {
    if (expense === "" || description === '') {
      return
    } else if (expense > totalBudget) {
      alert("Your budget is low")
      return
    }
    dispatch(addExpense({ expense: expense, description: description }))
    setExpense('');
    setDescription('');
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Money Manager
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Set Budget</Typography>
          <Typography variant="h6">{totalBudget} ₹</Typography>
          <TextField
            fullWidth
            label="Budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddBudget}>
            Add Budget
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Add Expense</Typography>
          <TextField
            fullWidth
            label="Expense Amount"
            type="number"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="secondary" onClick={() => handleAddExpense()}>
            Add Expense
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Expense Amount</TableCell>
              <TableCell align="center">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expensesList.length > 0 && expensesList.map((expenseItem, index) => (
              <TableRow key={index}>
                <TableCell align="center">{expenseItem.expense} ₹</TableCell>
                <TableCell align="center">{expenseItem.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
