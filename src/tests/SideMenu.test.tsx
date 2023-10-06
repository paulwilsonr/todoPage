import { describe, it, expect } from 'vitest';
import { render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from '../App';


describe('SideBar Display', () => {
    it('Does not show menu on load', () => {
        render(<App/>);
        expect(screen.queryByText('Today')).toBeNull();
    });
    it('Shows menu after clicking burger',async () => {
        const user = userEvent.setup();
        render(<App />);
        const button = screen.getByLabelText('open-menu');
        await user.click(button)

        expect(screen.getByText('Today').textContent).toMatch(/Today/i)

    })
}) 