import {render,screen} from '@testing-library/react';
import Login from '../Component/Login';

test ('renders login component', () => {
    render(<Login/>);
    expect(screen.getByText(/Login/)).toBeInTheDocument();

});

test('renders username and password fields', () => {
    render(<Login />);
    expect(screen.getByLabelText(/username/i)).toHaveValue('');
    expect(screen.getByLabelText(/password/i)).toHaveValue('');
});
test('renders login button', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
