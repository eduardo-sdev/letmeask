import { ReactNode } from 'react'
import className from 'classnames'

import { Container } from './style'

type QuestionProps = {
    content: string
    author: {
        name: string
        avatar: string
    }
    children?: ReactNode
    isAnswered?: boolean
    isHighlighted?: boolean
}

export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
}: QuestionProps) {
    return (
        <Container>
            <div
                className={className(
                    'question',
                    { answered: isAnswered },
                    { highlighted: isHighlighted && !isAnswered }
                )}
            >
                <p>{content}</p>
                <footer>
                    <div className="user-info">
                        <img src={author.avatar} alt={author.name} />
                        <span>{author.name}</span>
                    </div>
                    <div>{children}</div>
                </footer>
            </div>
        </Container>
    )
}
