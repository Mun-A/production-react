import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test clean theme', () => {
        render(<Button theme={ThemeButton.CLEAN}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clean');
        screen.debug();
    });
});
