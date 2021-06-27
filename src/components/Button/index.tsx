import { ButtonHTMLAttributes } from 'react'

import { Container } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
        <Container>
            <button
                className={`button ${isOutlined ? 'outlined' : ''}`}
                {...props}
            />
        </Container>
    )
}
