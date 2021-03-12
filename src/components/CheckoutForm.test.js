import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    // screen.debug()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.queryByLabelText(/first name/i)
    const lastName = screen.queryByLabelText(/last name/i)
    const address = screen.queryByLabelText(/address/i)
    const city = screen.queryByLabelText(/city/i)
    const state = screen.queryByLabelText(/state/i)
    const zip = screen.queryByLabelText(/zip/i)
    const submitButton = screen.queryByRole('button')

    userEvent.type(firstName, 'Randy')
    userEvent.type(lastName, 'Ortiz')
    userEvent.type(address, '1208 East 81st')
    userEvent.type(city, 'Brooklyn')
    userEvent.type(state, 'NY')
    userEvent.type(zip, '11040')
    
    userEvent.click(submitButton)
    
    const success = await screen.queryByTestId('successMessage')
    screen.debug(success)
});
